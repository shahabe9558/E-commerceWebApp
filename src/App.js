
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
function App() {
  return (
    <div className='w-[100%] h-[100%] flex flex-col'>
      <div className='bg-richblack-900'> 
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
      </Routes>
    </div>
  )
}
export default App;
