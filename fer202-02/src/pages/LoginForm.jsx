import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAccounts } from "../services/accountService";
import { useAuth } from "../contexts/AuthContext";
import MessageModal from "../components/MessageModal";

const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const validate = (trimUser, trimPass) => {
        const newErrors = {};
        if (!trimUser) {
            newErrors.usernameOrEmail = "Username or Email is required.";
        }
        if (!trimPass) {
            newErrors.password = "Password is required.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError("");

        const cleanIdentifier = usernameOrEmail.trim();
        const cleanPassword = password.trim();

        if (!validate(cleanIdentifier, cleanPassword)) return;

        try {
            const response = await getAccounts();
            const accounts = response.data;

            const user = accounts.find(
                (acc) =>
                    (acc.username === cleanIdentifier || acc.email === cleanIdentifier) &&
                    acc.password === cleanPassword
            );

            if (!user) {
                setServerError("Invalid username/email or password!");
                return;
            }

            if (user.status === "locked") {
                setServerError("Account is locked. Please contact admin.");
                return;
            }

            if (user.role !== "admin") {
                setServerError("Access denied. Only admin users can log in.");
                return;
            }

            setLoggedInUser(user);
            setShowModal(true);
        } catch (error) {
            console.error("Login error:", error);
            setServerError("Something went wrong. Please try again later.");
        }
    };

    const handleContinue = () => {
        login(loggedInUser);
        setShowModal(false);
        navigate("/accounts");
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: "400px" }} className="shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Login</Card.Title>
                    {serverError && <Alert variant="danger">{serverError}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username or Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username or email"
                                value={usernameOrEmail}
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
                                isInvalid={!!errors.usernameOrEmail}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.usernameOrEmail}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            {loggedInUser && (
                <MessageModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    title="Login Successful"
                    message={`Welcome, ${loggedInUser.username}! Login successful.`}
                    onContinue={handleContinue}
                />
            )}
        </Container>
    );
};

export default LoginForm;
