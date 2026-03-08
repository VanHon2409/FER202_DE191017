import React from "react";
import { Modal, Button } from "react-bootstrap";

const MessageModal = ({ show, handleClose, title, message, onContinue }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onContinue}>
                    Continue
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MessageModal;
