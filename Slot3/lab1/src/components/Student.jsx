import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Student({ student }) {
    return (
        <Card style={{ width: '18rem', height: '100%' }}>
            <Card.Img
                variant="top"
                src={student.avatar}
                alt={student.name}
                style={{
                    height: '200px',
                    objectFit: 'cover'
                }}
            />

            <Card.Body className="text-center">
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>
                    Age: {student.age} <br />
                    Grade: {student.grade}
                </Card.Text>

                <Button variant="primary">View Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Student;
