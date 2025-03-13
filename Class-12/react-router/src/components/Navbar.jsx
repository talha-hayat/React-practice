import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex bg-blue-400 h-[60px] items-center gap-[20px] text-white justify-center'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar