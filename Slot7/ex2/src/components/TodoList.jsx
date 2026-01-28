import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue.trim() }]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="todo-list-container">
            <h3>Exercise 4: Todo List</h3>
            <p style={{ color: '#999', marginBottom: '25px', fontSize: '14px' }}>Manage your tasks efficiently</p>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập công việc mới..."
                />
                <button onClick={handleAddTodo}>➕ Thêm</button>
            </div>
            <ul>
                {todos.length === 0 ? (
                    <p style={{ color: '#ccc', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
                        Không có công việc nào. Hãy thêm một công việc mới! 📝
                    </p>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id}>
                            <span>✓ {todo.text}</span>
                            <button onClick={() => handleDeleteTodo(todo.id)}>🗑️</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default TodoList;
