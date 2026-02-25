import React from 'react';
import { Modal as BSModal, Button } from 'react-bootstrap';

const Modal = ({ show, onHide, title, body }) => {
    return (
        <BSModal show={show} onHide={onHide} centered>
            <BSModal.Header closeButton>
                <BSModal.Title>{title}</BSModal.Title>
            </BSModal.Header>
            <BSModal.Body>{body}</BSModal.Body>
            <BSModal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </BSModal.Footer>
        </BSModal>
    );
};

export default Modal;
