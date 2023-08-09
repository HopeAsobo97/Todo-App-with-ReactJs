/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
      <p  className={{...task.completed ? "completed" : ""}}>{task.task}</p><div>
        <FontAwesomeIcon icon={faPenToSquare} className='icon' />
        <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => deleteTodo(task.id)}/>
        <FontAwesomeIcon icon={faSquareCheck} className='icon' onClick={() => toggleComplete(task.id)} />
      </div>
    </div>
  )
}
