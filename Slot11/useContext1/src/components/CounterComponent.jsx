//CounterComponent.jsx is a functional component that uses the useReducer hook to manage a counter state.
import React, { useReducer } from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Import custom hook useTheme

// 1. Khởi tạo trạng thái ban đầu
const initialState = { count: 0 };
// 2. Định nghĩa hàm reducer
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Bộ Đếm Tinh Hoa</h2>
                <button
                    className="premium-button"
                    onClick={toggleTheme}
                    style={{
                        background: 'var(--accent-primary)',
                        color: 'white',
                        fontSize: '0.8rem',
                        padding: '8px 16px'
                    }}
                >
                    {theme === 'light' ? '🌙 Chế độ tối' : '☀️ Chế độ sáng'}
                </button>
            </div>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>GIÁ TRỊ HIỆN TẠI</p>
                <h1 style={{ fontSize: '4rem', fontWeight: '800', margin: 0, color: 'var(--accent-primary)' }}>
                    {state.count}
                </h1>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                    className="premium-button"
                    onClick={() => dispatch({ type: 'increment' })}
                    style={{ background: '#00b894', color: 'white', flex: 1, minWidth: '120px' }}
                >
                    <span>➕</span> Tăng (+1)
                </button>
                <button
                    className="premium-button"
                    onClick={() => dispatch({ type: 'decrement' })}
                    style={{ background: '#fdcb6e', color: '#2d3436', flex: 1, minWidth: '120px' }}
                >
                    <span>➖</span> Giảm (-1)
                </button>
                <button
                    className="premium-button"
                    onClick={() => dispatch({ type: 'reset' })}
                    style={{ background: '#ff7675', color: 'white', flex: 1, minWidth: '120px' }}
                >
                    <span>🔄</span> Đặt lại
                </button>
            </div>
        </div>
    );
}

export default CounterComponent;
