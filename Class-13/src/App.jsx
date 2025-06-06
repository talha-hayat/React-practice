import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'

function App() {


  return (
    <Routes>
       <Route path="/" element={<Navbar />} />
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
