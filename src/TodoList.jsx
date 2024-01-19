import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const addTodo = () => {
        setTodos([...todos, { text: newTodo, completed: false}]);
        setNewTodo('');
    };
    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };
    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>To-Do Liste</h2>
            <input 
            type='text' 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Hinzufügen</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                    <input 
                    type='checkbox' 
                    checked={todo.completed} 
                    onChange={() => toggleTodo(index)} 
                    />
                    {todo.completed && <button onClick={() => removeTodo(index)}>Löschen</button>}
                </li>
            ))}
        </ul>
        </div>
    );
}

export default TodoList;
