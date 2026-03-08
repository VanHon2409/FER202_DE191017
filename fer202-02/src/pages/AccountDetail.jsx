import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getAccountById } from "../services/accountService";

const AccountDetail = () => {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await getAccountById(id);
                setAccount(response.data);
            } catch (error) {
                console.error("Error fetching account details:", error);
            }
        };
        fetchAccount();
    }, [id]);

    if (!account) {
        return (
            <Container className="mt-5 text-center">
                <h3>Loading account details...</h3>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
                <Card.Header className="bg-dark text-white text-center py-3">
                    <h2>Account Details</h2>
                </Card.Header>
                <Card.Body className="p-4">
                    <Row className="align-items-center">
                        <Col md={4} className="text-center mb-3 mb-md-0">
                            <img
                                src={account.avatar}
                                alt={account.username}
                                className="img-fluid rounded-circle border p-1"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/150";
                                }}
                            />
                        </Col>
                        <Col md={8}>
                            <div className="mb-3">
                                <label className="fw-bold text-muted small text-uppercase">Username</label>
                                <div className="fs-5">{account.username}</div>
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold text-muted small text-uppercase">Email</label>
                                <div className="fs-5">{account.email}</div>
                            </div>
                            <div className="mb-3 d-flex gap-4">
                                <div>
                                    <label className="fw-bold text-muted small text-uppercase d-block">Role</label>
                                    <Badge bg={account.role === "admin" ? "primary" : "info"} className="px-3 py-2">
                                        {account.role.toUpperCase()}
                                    </Badge>
                                </div>
                                <div>
                                    <label className="fw-bold text-muted small text-uppercase d-block">Status</label>
                                    <Badge bg={account.status === "active" ? "success" : "secondary"} className="px-3 py-2">
                                        {account.status.toUpperCase()}
                                    </Badge>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-center bg-white border-top-0 pb-4">
                    <Button variant="secondary" onClick={() => navigate("/accounts")}>
                        Back to Lists
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default AccountDetail;
