import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = ({ show, message, variant, onClose }) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast
                show={show}
                onClose={onClose}
                delay={3000}
                autohide
                bg={variant === "success" ? "success" : "danger"}
            >
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body className="text-white">{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastMessage;
