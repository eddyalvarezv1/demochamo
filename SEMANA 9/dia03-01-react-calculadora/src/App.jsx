import { useState } from "react"

const App = () => {
  // TODO: Hacer la calculadora usando React.js
  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = (event) => {
    const buttonText = event.target.textContent
    
    if ('+-*'.includes(buttonText)) {
      setOperador(buttonText)
      setOperando(Number(numeroActual))
      setNumeroActual('0')
    } else if (buttonText === '=') {
      if (operador === '+') {
        setNumeroActual(Number(operando) + Number(numeroActual))
      } else if (operador === '-') {
        setNumeroActual(Number(operando) - Number(numeroActual))
      } else if (operador === '*') {
        setNumeroActual(Number(operando) * Number(numeroActual))
      }
    } else if (buttonText === 'AC') {
      setNumeroActual('0')
      setOperador('')
      setOperando('')
    } else {
      setNumeroActual(Number(numeroActual + buttonText))
    }
  }

  return (
    <main className="bg-orange-100 w-80 mx-auto text-center mt-5 p-5">
      <h1 className="text-3xl">Calculadora</h1>

      <section className="flex flex-col gap-4">
        <input
          className="border px-2 py-2 text-right text-xl"
          type="text"
          readOnly
          value={numeroActual}
        />

        <div className="grid grid-cols-3 gap-2">
          <button onClick={handleButton} className="bg-red-300 p-2 hover:bg-red-400 duration-300">+</button>
          <button onClick={handleButton} className="bg-red-300 p-2 hover:bg-red-400 duration-300">-</button>
          <button onClick={handleButton} className="bg-red-300 p-2 hover:bg-red-400 duration-300">*</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">7</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">8</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">9</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">4</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">5</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">6</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">1</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">2</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">3</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300">0</button>
          <button onClick={handleButton} className="bg-green-300 p-2 hover:bg-green-400 duration-300">AC</button>
          <button onClick={handleButton} className="bg-green-300 p-2 hover:bg-green-400 duration-300">=</button>
        </div>
      </section>
    </main>
  )
}

export default App