import React from 'react'
import { useToggle } from '../Hooks/useToggle'

const Home = () => {
   const [value,toggle] = useToggle()
  return (
    <div>
        Home
        <br />
        <p>{value? "True": "false"}</p>
        <button onClick={toggle}>click me </button>
    </div>
)
}

export default Home