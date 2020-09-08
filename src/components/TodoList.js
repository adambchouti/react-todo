import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map(todo => 
          <Todo key={todo.id} todos={props.todos} todo={todo} setTodos={props.setTodos} />
        )}
      </ul>
    </div>
  )
}

export default TodoList
