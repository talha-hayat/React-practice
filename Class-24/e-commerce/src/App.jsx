import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthRoute from './Routes/AuthRoute'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import PublicRoute from './Routes/PublicRoute'
import Vendor from './pages/Vendor'



function App() {
  return (
    <div>
      <Routes>

        <Route element={<AuthRoute />}>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
        </Route>
        <Route element={<PublicRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/vendor' element={<Vendor />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
