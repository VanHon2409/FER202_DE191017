import React from 'react';
import { Container } from 'react-bootstrap';
import { MovieProvider } from '../contexts/MovieContext';
import Header from '../components/Header';
import MovieForm from '../components/MovieForm';
import MovieTable from '../components/MovieTable';

const MovieManagerContent = () => {
    return (
        <>
            <Header />
            <Container>
                <h1 className="text-center mb-4 text-primary">🎬 Movie Management System</h1>
                <MovieForm />
                <h2 className="mt-5 mb-3">Movie Database</h2>
                <MovieTable />
            </Container>
        </>
    );
}

const MovieManager = () => (
    <MovieProvider>
        <MovieManagerContent />
    </MovieProvider>
);

export default MovieManager;
