import React, { useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
  }

const resetTodos = () => {
    setTodos([])
  }

 {/* const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }*/}

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={resetTodos}>Reset Todo</button>
        {/*<button onClick={removeTodo}>Remove Todo</button>*/}
      </div>
    </div>
  )
}