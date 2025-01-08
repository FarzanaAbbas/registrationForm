import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-red-500 text-center">
        Hello, Tailwind CSS!
      </h1>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
