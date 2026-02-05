import React, { useState, useReducer } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Modal from './Modal';
import Toast from './Toast';

// Initial state for the reducer
const initialState = {
    values: { username: '', email: '', password: '' },
    errors: { username: '', email: '', password: '' }
};

// Validation logic
const checkValidation = (field, value) => {
    if (field === 'username') return value.trim() === '' ? 'Username không được để trống' : '';
    if (field === 'email') return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email không hợp lệ' : '';
    if (field === 'password') return value.length < 6 ? 'Password phải có ít nhất 6 ký tự' : '';
    return '';
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                values: { ...state.values, [action.field]: action.value },
                errors: { ...state.errors, [action.field]: '' } // Clear error on change
            };
        case 'SET_ERROR':
            return {
                ...state,
                errors: { ...state.errors, [action.field]: action.error }
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const DangKyForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [dataSubmitted, setDataSubmitted] = useState(null);

    const handleBlur = (field) => {
        const error = checkValidation(field, state.values[field]);
        if (error) {
            dispatch({ type: 'SET_ERROR', field, error });
        }
    };

    const handleChange = (field, value) => {
        dispatch({ type: 'UPDATE_FIELD', field, value });
    };

    const performValidation = () => {
        let isValid = true;
        Object.keys(state.values).forEach(key => {
            const error = checkValidation(key, state.values[key]);
            if (error) {
                isValid = false;
                dispatch({ type: 'SET_ERROR', field: key, error });
            }
        });
        return isValid;
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const isValid = performValidation();

        if (isValid) {
            setValidated(false);
            console.log('Submission Success:', state.values);
            setDataSubmitted(state.values);
            setShowModal(true);
            setShowToast(true);
            dispatch({ type: 'RESET' });
        } else {
            setValidated(true);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Đăng Ký Tài Khoản</Card.Title>
                            <Form noValidate validated={validated} onSubmit={onFormSubmit}>
                                {['username', 'email', 'password'].map((field) => (
                                    <Form.Group className="mb-3" controlId={`form${field}`} key={field}>
                                        <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                                        <Form.Control
                                            type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                                            placeholder={`Nhập ${field}`}
                                            value={state.values[field]}
                                            isInvalid={!!state.errors[field]}
                                            onChange={(e) => handleChange(field, e.target.value)}
                                            onBlur={() => handleBlur(field)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {state.errors[field]}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                ))}

                                <Button variant="primary" type="submit" className="w-100">
                                    Đăng Ký
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                message="Đăng ký thành công!"
            />

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                title="Thông tin đăng ký"
                body={
                    dataSubmitted && (
                        <div>
                            <p><strong>Username:</strong> {dataSubmitted.username}</p>
                            <p><strong>Email:</strong> {dataSubmitted.email}</p>
                        </div>
                    )
                }
            />
        </Container>
    );
};

export default DangKyForm;

