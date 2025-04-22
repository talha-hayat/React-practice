import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateRoute from './Routes/Private'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/hom' element={<PrivateRoute>
          {/* <Home /> */}
        </PrivateRoute>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
