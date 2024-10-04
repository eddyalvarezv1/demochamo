import { useState } from "react"

const App = () => {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender JS',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwindcss',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Añadiendo una nueva tarea...')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    setTodos([...todos, newTodo])

    setInput('')
  }

  const handleChange = (event) => {
    // Vamos a capturar lo que escribimos en la caja de texto
    setInput(event.target.value)
  }

  const handleRemoveTodo = (event) => {
    const id = event.target.dataset.id

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleCompleted = (event) => {
    const { id } = event.target.dataset
    const isChecked = event.target.checked

    console.log(id, isChecked)

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: isChecked
        }
      }

      return todo // Deja el objeto sin modificaciones
    })

    setTodos(updatedTodos)
  }

  const completedTodos = todos.filter(todo => todo.completed).length

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border my-3 p-2 rounded-lg"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          onChange={handleChange}
          value={input}
        />
      </form>

      {/* {input} */}

      {/* DONE: RETO1 - Añadir una estadística de cuantas tareas estan completadas y el total de tareas */}
      {/* TODO: RETO2 - Completar la funcionalidad del botón Limpiar completadas */}

      <section className="flex justify-between items-center">
        <span className="font-bold">
          {completedTodos} de {todos.length}
        </span>
        <button
          className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-700 duration-300"
        >
          Limpiar completadas
        </button>
      </section>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                  data-id={todo.id}
                  onChange={handleCompleted}
                  checked={todo.completed}
                />
                <div className="w-full flex justify-between items-center">
                  <span
                    className={`font-medium ${todo.completed ? 'line-through' : '' }`}
                  >
                    {todo.title}
                  </span>
                  <button
                    className="bg-red-300 rounded-lg px-1 py-1"
                    data-id={todo.id}
                    onClick={handleRemoveTodo}
                  >
                    ❌
                  </button>
                </div>
              </li>
            )
          })}

        </ul>
      </section>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App