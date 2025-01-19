import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/Notfound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
