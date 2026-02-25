import React from 'react';
import { Toast as BSToast, ToastContainer } from 'react-bootstrap';

const Toast = ({ show, onClose, message, bg = 'success' }) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            <BSToast show={show} onClose={onClose} delay={3000} autohide bg={bg}>
                <BSToast.Header>
                    <strong className="me-auto">Notification</strong>
                </BSToast.Header>
                <BSToast.Body className={bg === 'dark' ? 'text-white' : ''}>{message}</BSToast.Body>
            </BSToast>
        </ToastContainer>
    );
};

export default Toast;
