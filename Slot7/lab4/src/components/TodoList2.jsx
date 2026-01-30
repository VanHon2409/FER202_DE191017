import React, { useReducer, useState } from 'react';

const initialState = [];
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'RESET_TODOS':
      return [];
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue.trim() });
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-list-container">
      <h3>Exercise 4: Todo List</h3>
      <p style={{ color: '#999', marginBottom: '25px', fontSize: '14px' }}>
        Manage your tasks efficiently
      </p>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập công việc mới..."
        />
        <button onClick={handleAddTodo}>➕ Thêm</button>
        <button onClick={() => dispatch({ type: 'RESET_TODOS' })} style={{ marginLeft: '10px' }}>
          🧹 Xóa tất cả
        </button>
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
