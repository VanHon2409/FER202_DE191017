import React, { useState } from 'react';
import { Form, Row, Col, Container, InputGroup } from 'react-bootstrap';
import { useMovieState } from '../contexts/MovieContext';

const FilterBar = ({ onFilterChange }) => {
    const { genres } = useMovieState();
    const [filters, setFilters] = useState({
        search: '',
        genreId: '',
        sortBy: 'title',
        order: 'asc'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <Container className="bg-light p-3 mb-4 rounded shadow-sm">
            <Form>
                <Row className="align-items-end">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Search Title</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    name="search"
                                    placeholder="Type to search..."
                                    value={filters.search}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Genre</Form.Label>
                            <Form.Select name="genreId" value={filters.genreId} onChange={handleChange}>
                                <option value="">All Genres</option>
                                {genres.map(g => (
                                    <option key={g.id} value={g.id}>{g.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Sort By</Form.Label>
                            <Form.Select name="sortBy" value={filters.sortBy} onChange={handleChange}>
                                <option value="title">Title</option>
                                <option value="year">Year</option>
                                <option value="duration">Duration</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <Form.Label>Order</Form.Label>
                            <Form.Select name="order" value={filters.order} onChange={handleChange}>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default FilterBar;
