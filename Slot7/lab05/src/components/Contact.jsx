import React, { useReducer, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, InputGroup } from 'react-bootstrap';

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false
};

const contactReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

function Contact() {
    const [state, dispatch] = useReducer(contactReducer, initialState);
    const [validated, setValidated] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        dispatch({ type: 'INPUT_CHANGE', field, value });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            setValidated(true);
            setIsSubmitted(false);
            return;
        }

        const { firstName, lastName, username, city, state: formState, zip, agree } = state;
        if (!firstName || !lastName || !username || !city || !formState || !zip || !agree) {
            setValidated(true);
            return;
        }

        // Success simulation
        setIsSubmitted(true);
        setValidated(false);
        dispatch({ type: 'RESET' });

        // Hide success message after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <Container className="mb-5 mt-4">
            <h2 className="mb-4">Contact</h2>

            {isSubmitted && (
                <Alert variant="success" className="mb-4">
                    Message sent successfully!
                </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Mark"
                            value={state.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            First name cannot be empty.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Otto"
                            value={state.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Last name cannot be empty.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={state.username}
                                onChange={(e) => handleInputChange('username', e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            required
                            value={state.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            required
                            value={state.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            required
                            value={state.zip}
                            onChange={(e) => handleInputChange('zip', e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        checked={state.agree}
                        onChange={(e) => handleInputChange('agree', e.target.checked)}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Submit form</Button>
            </Form>
        </Container>
    );
}

export default Contact;
