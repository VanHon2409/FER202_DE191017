import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const FilterBar = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <div className="mb-4">
            <Row className="g-3">
                <Col md={3}>
                    <Form.Control
                        type="text"
                        name="search"
                        placeholder="Search by username or email..."
                        value={filters.search}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={2}>
                    <Form.Select name="role" value={filters.role} onChange={handleChange}>
                        <Option value="All">All Roles</Option>
                        <Option value="admin">Admin</Option>
                        <Option value="user">User</Option>
                    </Form.Select>
                </Col>
                <Col md={2}>
                    <Form.Select name="status" value={filters.status} onChange={handleChange}>
                        <Option value="All">All Status</Option>
                        <Option value="active">Active</Option>
                        <Option value="locked">Locked</Option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select name="sort" value={filters.sort} onChange={handleChange}>
                        <Option value="">Sort By</Option>
                        <Option value="username-asc">Username (A &rarr; Z)</Option>
                        <Option value="username-desc">Username (Z &rarr; A)</Option>
                        <Option value="role">Role</Option>
                        <Option value="status">Status</Option>
                    </Form.Select>
                </Col>
            </Row>
        </div>
    );
};

const Option = ({ value, children }) => <option value={value}>{children}</option>;

export default FilterBar;
