import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Components/cards/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card />
    </div>
  )
}

export default App
