import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }, [todos, status])


  return (
    <div className="App">
      <header>
      <h1>React Todo list</h1>
      </header>

      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
