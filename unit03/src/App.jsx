import { useState } from 'react'
import viteLogo from '/vite.svg'
import BaristaForm from './components/baristaForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="title-container">
          <h1 className="title">On My Grind</h1>
          <p>So you think you can barista? Let us put that to the test...</p>
        </div>
        <BaristaForm/>
    </>

  )
}

export default App
