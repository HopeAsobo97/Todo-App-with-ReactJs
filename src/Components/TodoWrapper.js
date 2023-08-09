import { useState } from 'react'
import React from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: Math.random(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            <Todo task={todo} key={index} 
            toggleComplete={toggleComplete}/>
        ))}
    </div>
  )
}
