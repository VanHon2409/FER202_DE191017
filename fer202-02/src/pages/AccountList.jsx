import React, { useState, useEffect } from "react";
import { Container, Table, Button, Badge, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAccounts, patchAccount } from "../services/accountService";
import { useAuth } from "../contexts/AuthContext";
import FilterBar from "../components/FilterBar";
import ToastMessage from "../components/ToastMessage";
import { FaUserLock, FaUserCheck, FaInfoCircle } from "react-icons/fa";

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [filteredAccounts, setFilteredAccounts] = useState([]);
    const [filters, setFilters] = useState({
        search: "",
        role: "All",
        status: "All",
        sort: "",
    });

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [targetAccount, setTargetAccount] = useState(null);
    const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

    const { user: currentUser, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchAccounts();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [filters, accounts]);

    const fetchAccounts = async () => {
        try {
            const response = await getAccounts();
            setAccounts(response.data);
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    };

    const applyFilters = () => {
        let result = [...accounts];

        // Search
        if (filters.search) {
            const search = filters.search.toLowerCase();
            result = result.filter(
                (acc) =>
                    acc.username.toLowerCase().includes(search) ||
                    acc.email.toLowerCase().includes(search)
            );
        }

        // Role Filter
        if (filters.role !== "All") {
            result = result.filter((acc) => acc.role === filters.role);
        }

        // Status Filter
        if (filters.status !== "All") {
            result = result.filter((acc) => acc.status === filters.status);
        }

        // Sorting
        if (filters.sort) {
            switch (filters.sort) {
                case "username-asc":
                    result.sort((a, b) => a.username.localeCompare(b.username));
                    break;
                case "username-desc":
                    result.sort((a, b) => b.username.localeCompare(a.username));
                    break;
                case "role":
                    result.sort((a, b) => a.role.localeCompare(b.role));
                    break;
                case "status":
                    result.sort((a, b) => a.status.localeCompare(b.status));
                    break;
                default:
                    break;
            }
        }

        setFilteredAccounts(result);
    };

    const handleToggleStatus = (account) => {
        if (currentUser && currentUser.id === account.id) {
            setToast({
                show: true,
                message: "You cannot lock your own account!",
                variant: "danger",
            });
            return;
        }
        setTargetAccount(account);
        setShowConfirmModal(true);
    };

    const confirmToggleStatus = async () => {
        const newStatus = targetAccount.status === "active" ? "locked" : "active";
        try {
            await patchAccount(targetAccount.id, {
                status: newStatus,
            });

            setAccounts((prev) =>
                prev.map((acc) =>
                    acc.id === targetAccount.id ? { ...acc, status: newStatus } : acc
                )
            );

            setToast({
                show: true,
                message: `${newStatus === "locked" ? "Locked" : "Unlocked"} successfully.`,
                variant: "success",
            });
            setShowConfirmModal(false);
        } catch (error) {
            console.error("Error updating status:", error);
            setToast({ show: true, message: "Update failed!", variant: "danger" });
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Account Management</h1>
                <div className="d-flex align-items-center">
                    <span className="me-3">Welcome, <strong>{currentUser?.username}</strong> ({currentUser?.role})</span>
                    <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                </div>
            </div>

            <FilterBar filters={filters} onFilterChange={setFilters} />

            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAccounts.map((acc) => (
                        <tr key={acc.id}>
                            <td>
                                <img
                                    src={acc.avatar}
                                    alt={acc.username}
                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/40";
                                    }}
                                />
                            </td>
                            <td>{acc.username}</td>
                            <td>{acc.email}</td>
                            <td>
                                <Badge bg={acc.role === "admin" ? "primary" : "info"}>
                                    {acc.role.toUpperCase()}
                                </Badge>
                            </td>
                            <td>
                                <Badge bg={acc.status === "active" ? "success" : "secondary"}>
                                    {acc.status.toUpperCase()}
                                </Badge>
                            </td>
                            <td>
                                <Button
                                    variant="info"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => navigate(`/accounts/${acc.id}`)}
                                >
                                    <FaInfoCircle className="me-1" /> View Details
                                </Button>
                                <Button
                                    variant={acc.status === "active" ? "warning" : "success"}
                                    size="sm"
                                    onClick={() => handleToggleStatus(acc)}
                                >
                                    {acc.status === "active" ? (
                                        <>
                                            <FaUserLock className="me-1" /> Lock
                                        </>
                                    ) : (
                                        <>
                                            <FaUserCheck className="me-1" /> Unlock
                                        </>
                                    )}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{targetAccount?.status === "active" ? "Lock Account" : "Unlock Account"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {targetAccount?.status === "active"
                        ? `Lock account ${targetAccount?.username}? The user cannot log in after this.`
                        : `Unlock account ${targetAccount?.username}?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmToggleStatus}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastMessage
                show={toast.show}
                message={toast.message}
                variant={toast.variant}
                onClose={() => setToast({ ...toast, show: false })}
            />
        </Container>
    );
};

export default AccountList;
