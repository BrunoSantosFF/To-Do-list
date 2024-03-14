import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const items = [
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]

  const [todos, setTodos] =  useState(items);

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}

      </div>
      <TodoForm></TodoForm>
    </div>
  )
}

export default App
