import React, { useReducer } from 'react';
import { useAuth } from '../contexts/AuthContext';

// 1. Khởi tạo trạng thái ban đầu của form
const initialState = {
    username: '',
    password: '',
    error: '',
    loading: false
};

// 2. Định nghĩa hàm reducer để quản lý trạng thái form
function loginReducer(state, action) {
    switch (action.type) {
        case 'FIELD_CHANGE':
            return {
                ...state,
                [action.field]: action.value,
                error: '' // Xóa lỗi khi người dùng bắt đầu nhập lại
            };
        case 'LOGIN_START':
            return { ...state, loading: true, error: '' };
        case 'LOGIN_SUCCESS':
            return { ...initialState }; // Reset form khi thành công
        case 'LOGIN_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

function LoginForm() {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { login } = useAuth();

    const handleInputChange = (e) => {
        dispatch({
            type: 'FIELD_CHANGE',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation cơ bản
        if (!state.username || !state.password) {
            dispatch({ type: 'LOGIN_FAILURE', error: 'Vui lòng nhập đầy đủ thông tin!' });
            return;
        }

        if (state.password.length < 6) {
            dispatch({ type: 'LOGIN_FAILURE', error: 'Mật khẩu phải có ít nhất 6 ký tự!' });
            return;
        }

        dispatch({ type: 'LOGIN_START' });

        try {
            // Giả lập xử lý đăng nhập (vẫn gọi từ AuthContext)
            await new Promise(resolve => setTimeout(resolve, 1000)); // Hiệu ứng chờ cho "premium"
            login(state.username, state.password);
            dispatch({ type: 'LOGIN_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', error: err.message });
        }
    };

    return (
        <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center' }}>Đăng Nhập Hệ Thống</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Chỉ dành cho quản trị viên (Admin)
            </p>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Tên đăng nhập</label>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleInputChange}
                        placeholder="Nhập username..."
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'var(--text-primary)',
                            outline: 'none'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                        placeholder="Nhập mật khẩu..."
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'var(--text-primary)',
                            outline: 'none'
                        }}
                    />
                </div>

                {state.error && (
                    <div style={{
                        color: '#ff7675',
                        background: 'rgba(255, 118, 117, 0.1)',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        fontSize: '0.85rem',
                        textAlign: 'center',
                        border: '1px solid rgba(255, 118, 117, 0.3)'
                    }}>
                        ⚠️ {state.error}
                    </div>
                )}

                <button
                    className="premium-button"
                    type="submit"
                    disabled={state.loading}
                    style={{
                        width: '100%',
                        background: 'var(--accent-primary)',
                        color: 'white',
                        opacity: state.loading ? 0.7 : 1
                    }}
                >
                    {state.loading ? 'Đang xác thực...' : 'Đăng Nhập'}
                </button>
            </form>

            <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                <p>Gợi ý: admin / 123456</p>
            </div>
        </div>
    );
}

export default LoginForm;
