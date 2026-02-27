import React, { createContext, useReducer, useContext, useEffect, useCallback } from 'react';
import { movieReducer, initialMovieState } from '../reducers/movieReducer';
import movieApi from '../api/movieAPI';

export const MovieStateContext = createContext(initialMovieState);
export const MovieDispatchContext = createContext(null);

export const useMovieState = () => useContext(MovieStateContext);
export const useMovieDispatch = () => useContext(MovieDispatchContext);

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialMovieState);

    const fetchMovies = useCallback(async () => {
        dispatch({ type: 'START_LOADING' });
        try {
            const response = await movieApi.get('/movies');
            dispatch({ type: 'SET_MOVIES', payload: response.data });
        } catch (error) {
            console.error("Error loading movies:", error);
            dispatch({ type: 'SET_MOVIES', payload: [] });
        }
    }, [dispatch]);

    const fetchGenres = useCallback(async () => {
        try {
            const response = await movieApi.get('/genres');
            dispatch({ type: 'SET_GENRES', payload: response.data });
        } catch (error) {
            console.error("Error loading genres:", error);
            dispatch({ type: 'SET_GENRES', payload: [] });
        }
    }, [dispatch]);

    const confirmDelete = useCallback(async (id) => {
        dispatch({ type: 'CLOSE_DELETE_MODAL' });
        dispatch({ type: 'START_LOADING' });

        try {
            await movieApi.delete(`/movies/${id}`);
            fetchMovies();
        } catch (error) {
            console.error("Error deleting movie:", error);
            fetchMovies();
        }
    }, [fetchMovies]);

    const handleCreateOrUpdate = useCallback(async (dataToSend, isEditing, isEditingId) => {
        dispatch({ type: 'START_LOADING' });

        try {
            // Chuyển ID sang chuỗi (json-server 1.0-beta ưu tiên ID chuỗi trong URL)
            const stringId = String(isEditingId);

            // Chuẩn hóa dữ liệu ảnh
            const sanitizedData = { ...dataToSend };
            if (sanitizedData.poster && !sanitizedData.avatar) {
                sanitizedData.avatar = sanitizedData.poster;
            }

            // Loại bỏ id khỏi payload để tránh lỗi "id is immutable"
            const { id, ...payload } = sanitizedData;

            if (isEditing) {
                // Sử dụng PATCH và đảm bảo ID trong URL là chuỗi
                await movieApi.patch(`/movies/${stringId}`, payload);
                alert("Cập nhật phim thành công!");
            } else {
                await movieApi.post('/movies', payload);
                alert("Thêm phim mới thành công!");
            }

            dispatch({ type: 'RESET_FORM' });
            fetchMovies();
            return true;
        } catch (error) {
            console.error("Lỗi thao tác API:", error);
            let errorMsg = error.message;
            if (error.response && error.response.status === 404) {
                errorMsg = `Không tìm thấy phim ID ${isEditingId} (404). Có thể ID trong db.json cần được để trong ngoặc kép " ".`;
            }
            alert("Lỗi khi lưu dữ liệu: " + errorMsg);
            fetchMovies();
            return false;
        }
    }, [fetchMovies]);

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, [fetchMovies, fetchGenres]);

    const dispatchValue = {
        dispatch,
        fetchMovies,
        fetchGenres,
        confirmDelete,
        handleCreateOrUpdate
    };

    return (
        <MovieStateContext.Provider value={state}>
            <MovieDispatchContext.Provider value={dispatchValue}>
                {children}
            </MovieDispatchContext.Provider>
        </MovieStateContext.Provider>
    );
};
