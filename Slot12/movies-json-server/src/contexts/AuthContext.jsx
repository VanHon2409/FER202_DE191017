import React, { createContext, useContext, useState } from 'react';
import movieApi from '../api/movieAPI';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = async (username, password) => {
        try {
            // Fetch all accounts to perform client-side validation
            // This is more robust against json-server version variations in filtering
            const response = await movieApi.get('/accounts');
            console.log('Accounts fetched from server:', response.data);

            const foundUser = response.data.find(acc =>
                acc.username === username && acc.password.toString() === password.toString()
            );

            if (foundUser) {
                setUser(foundUser);
                localStorage.setItem('user', JSON.stringify(foundUser));
                return { success: true };
            }

            console.warn('Login failed: No matching user found for', username);
            return { success: false, message: 'Invalid username or password' };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Server error: ' + error.message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
