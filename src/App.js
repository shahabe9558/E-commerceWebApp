
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className=" w-[100%] h-[100vh] flex flex-col 
    bg-[url('https://www.obeetee.in/cdn/shop/files/dekstop_d0156670-b70c-49ba-8c40-f73125255dec_1800x.jpg?v=1707892891')] 
    bg-no-repeat">
      <div className=''> 
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
