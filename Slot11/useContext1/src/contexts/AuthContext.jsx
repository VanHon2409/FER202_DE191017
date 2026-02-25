import React, { createContext, useContext, useState } from 'react';
import { mockAccounts } from '../data/mockAccount';

// 2. Khởi tạo AuthContext
export const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { }
});

// 3. Tạo AuthProvider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Hàm xử lý đăng nhập
    const login = (username, password) => {
        // Tìm tài khoản khớp với username và password
        const foundUser = mockAccounts.find(
            (acc) => acc.username === username && acc.password === password
        );

        if (!foundUser) {
            throw new Error("Sai tên đăng nhập hoặc mật khẩu!");
        }

        // Kiểm tra trạng thái tài khoản
        if (foundUser.status === 'locked') {
            throw new Error("Tài khoản này đã bị khóa!");
        }

        // YÊU CẦU: Chỉ admin mới được phép đăng nhập
        if (foundUser.role !== 'admin') {
            throw new Error("Bạn không có quyền truy nhập! Chỉ Admin mới được phép.");
        }

        // Đăng nhập thành công
        setUser(foundUser);
        return foundUser;
    };

    // Hàm xử lý đăng xuất
    const logout = () => {
        setUser(null);
    };

    const contextValue = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// 4. Custom hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
