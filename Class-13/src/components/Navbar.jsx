import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    function gotopage(){
        // console.log(navigate)
        navigate('/login')
    }
  return (
    <div>
        <ul className='flex bg-blue-400 h-[60px] items-center gap-[20px] text-white justify-center'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li>
                <button onClick={gotopage} className='border border-white rounded-xl p-1 px-5 '>Login</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar