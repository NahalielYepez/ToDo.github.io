import React, { useState } from 'react';

export function TodoList () {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleSaveEdit = () => {
    if (editIndex !== -1 && editValue !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = editValue;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditValue('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Lista ToDo</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Agregar</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {index === editIndex ? (
              <input
                type="text"
                value={editValue}
                onChange={(event) => setEditValue(event.target.value)}
              />
            ) : (
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            )}
            {index === editIndex ? (
              <button onClick={handleSaveEdit}>Guardar</button>
            ) : (
              <button onClick={() => handleEditTodo(index)}>Editar</button>
            )}
            <button onClick={() => handleDeleteTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};