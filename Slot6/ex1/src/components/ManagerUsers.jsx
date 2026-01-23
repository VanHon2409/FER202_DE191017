import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Form,
  Navbar,
  Nav,
  Pagination,
  Modal,
} from "react-bootstrap";
import ListOfUsers from "../data/ListOfUsers";

function ManagerUsers() {
  const [users, setUsers] = useState(ListOfUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "User",
    address: "",
  });

  const itemsPerPage = 4;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const activeUsers = users.filter((u) => u.role !== "Locked").length;
  const lockedUsers = users.filter((u) => u.role === "Locked").length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "User",
      address: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    if (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim()
    ) {
      const newUser = {
        id: users.length + 1,
        ...formData,
      };
      setUsers((prev) => [...prev, newUser]);
      handleCloseModal();
      setCurrentPage(1);
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  return (
    <div className="admin-layout">
      {/* Header Navbar */}
      <Navbar bg="light" className="header-navbar">
        <Container fluid className="px-4">
          <Navbar.Brand className="brand-logo">
            <span className="brand-icon">G</span>
            <div>
              <div className="brand-name">Admin Panel</div>
              <small className="brand-subtitle">Gxeth Organization</small>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="navbar-actions">
              <Form.Control
                type="text"
                placeholder="Search users by name, email or role..."
                className="search-input"
              />
              <Button variant="light" size="sm" className="mx-2">
                🔔
              </Button>
              <Button variant="light" size="sm" className="mx-2">
                📧
              </Button>
              <Button variant="success" size="sm" onClick={handleShowModal}>
                + Add New User
              </Button>
              <Button variant="light" size="sm" className="mx-2">
                👤
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="admin-container">
        {/* Sidebar */}
        <div className="sidebar">
          <Nav className="flex-column sidebar-nav">
            <Nav.Link href="#dashboard" className="nav-item">
              📊 Dashboard
            </Nav.Link>
            <Nav.Link href="#users" className="nav-item active">
              👥 Users
            </Nav.Link>
            <Nav.Link href="#roles" className="nav-item">
              🎭 Roles
            </Nav.Link>
            <Nav.Link href="#permissions" className="nav-item">
              🔐 Permissions
            </Nav.Link>
            <Nav.Link href="#settings" className="nav-item">
              ⚙️ Settings
            </Nav.Link>
          </Nav>

          <div className="sidebar-footer">
            <Button variant="outline-secondary" className="w-100 logout-btn">
              📤 Log Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Container fluid className="content-wrapper">
            {/* Page Header */}
            <Row className="page-header mb-4">
              <Col>
                <h2>User Management</h2>
                <p className="text-muted">
                  Review, edit, and manage system access for all organization members.
                </p>
              </Col>
            </Row>

            {/* Users Table */}
            <Row className="mb-4">
              <Col>
                <div className="table-wrapper">
                  <Table hover responsive className="users-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>USER</th>
                        <th>ACCOUNT INFO</th>
                        <th>SECURITY</th>
                        <th>STATUS</th>
                        <th className="text-center">ACTIONS</th>
                      </tr>
                    </thead>

                    <tbody>
                      {currentUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="id-cell">
                            <span className="id-badge">#{Math.floor(Math.random() * 900) + 100}</span>
                          </td>

                          <td>
                            <div className="user-info">
                              <div className="user-avatar">{user.fullName.charAt(0)}</div>
                              <div>
                                <strong>{user.fullName}</strong>
                                <br />
                                <small className="text-muted">{user.email}</small>
                              </div>
                            </div>
                          </td>

                          <td>
                            <small className="text-muted">{user.email}</small>
                          </td>

                          <td>
                            <span className="password-dots">•••••••</span>
                          </td>

                          <td>
                            <Badge
                              bg={
                                user.role === "Admin"
                                  ? "success"
                                  : user.role === "Locked"
                                  ? "danger"
                                  : "warning"
                              }
                              className="status-badge"
                            >
                              {user.role === "Admin" || user.role === "Manager"
                                ? "Active"
                                : user.role === "Locked"
                                ? "Locked"
                                : "Pending"}
                            </Badge>
                          </td>

                          <td className="actions-cell text-center">
                            <Button
                              variant="link"
                              size="sm"
                              className="action-btn"
                              title="Edit"
                            >
                              ✏️
                            </Button>
                            <Button
                              variant="link"
                              size="sm"
                              className="action-btn"
                              title="Lock"
                            >
                              🔒
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>

            {/* Pagination */}
            <Row className="pagination-row mb-4">
              <Col md="6">
                <small className="text-muted">
                  Showing 1 to 4 of 24 results
                </small>
              </Col>
              <Col md="6" className="text-end">
                <Pagination className="justify-content-end">
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Pagination.Item
                      key={i + 1}
                      active={currentPage === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </Col>
            </Row>

            {/* Stats Cards */}
            <Row className="stats-row">
              <Col md="4">
                <div className="stat-card">
                  <div className="stat-icon users-icon">👥</div>
                  <div className="stat-content">
                    <h6>TOTAL USERS</h6>
                    <h3>{ListOfUsers.length}</h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stat-card">
                  <div className="stat-icon active-icon">✓</div>
                  <div className="stat-content">
                    <h6>ACTIVE NOW</h6>
                    <h3>{activeUsers}</h3>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="stat-card">
                  <div className="stat-icon locked-icon">🔒</div>
                  <div className="stat-content">
                    <h6>LOCKED ACCOUNTS</h6>
                    <h3>{lockedUsers}</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Add User Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Người Dùng Mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Họ và Tên</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Số Điện Thoại</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Địa Chỉ</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Nhập địa chỉ"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vai Trò</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="User">User</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleAddUser}>
            Thêm Người Dùng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ManagerUsers;
