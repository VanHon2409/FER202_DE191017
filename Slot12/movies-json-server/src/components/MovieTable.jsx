import React, { useState, useMemo } from 'react';
import { Table, Button, Image, Modal, Spinner } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';
import FilterBar from './FilterBar';

const MovieTable = () => {
    const state = useMovieState();
    const { dispatch, confirmDelete } = useMovieDispatch();
    const { movies, genres, loading, movieToDelete, showDeleteModal } = state;
    const [filters, setFilters] = useState({ search: '', genreId: '', sortBy: 'title', order: 'asc' });

    // Create genre map
    const genreMap = useMemo(() => genres.reduce((map, genre) => {
        map[genre.id] = genre.name;
        return map;
    }, {}), [genres]);

    // Handle filter changes from FilterBar
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Compute filtered and sorted movies
    const displayMovies = useMemo(() => {
        let result = [...movies];

        if (filters.search) {
            result = result.filter(m => m.title.toLowerCase().includes(filters.search.toLowerCase()));
        }
        if (filters.genreId) {
            result = result.filter(m => m.genreId === parseInt(filters.genreId));
        }

        result.sort((a, b) => {
            let valA = a[filters.sortBy];
            let valB = b[filters.sortBy];

            if (typeof valA === 'string') {
                valA = valA.toLowerCase();
                valB = valB.toLowerCase();
            }

            if (filters.order === 'asc') return valA > valB ? 1 : -1;
            return valA < valB ? 1 : -1;
        });

        return result;
    }, [movies, filters]);

    const handleEditClick = (movie) => {
        dispatch({ type: 'OPEN_EDIT_MODAL', payload: movie });
    };

    const handleDeleteClick = (movie) => {
        dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });
    };

    return (
        <>
            <FilterBar onFilterChange={handleFilterChange} />

            {loading && movies.length === 0 ? (
                <div className="text-center my-4">
                    <Spinner animation="border" role="status" variant="primary" />
                    <div className="mt-2">Loading movies...</div>
                </div>
            ) : (
                <Table striped bordered hover responsive className="mt-4 shadow-sm bg-white">
                    <thead className="table-dark">
                        <tr>
                            <th>Avatar</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Duration</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayMovies.map((movie) => (
                            <tr key={movie.id}>
                                <td><Image src={movie.avatar} alt={movie.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} rounded /></td>
                                <td>#{movie.id}</td>
                                <td>
                                    <strong>{movie.title}</strong>
                                    <br />
                                    <small className="text-muted">{movie.country}</small>
                                </td>
                                <td>{genreMap[movie.genreId] || 'Unknown'}</td>
                                <td>{movie.duration} min</td>
                                <td>{movie.year}</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" onClick={() => handleEditClick(movie)} className="me-2">Edit</Button>
                                    <Button variant="outline-danger" size="sm" onClick={() => handleDeleteClick(movie)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <Modal show={showDeleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>"{movieToDelete?.title}"</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>Cancel</Button>
                    <Button variant="danger" onClick={() => confirmDelete(movieToDelete.id)}>Confirm Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MovieTable;
