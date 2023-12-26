
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div className=''>
      <div className='bg-slate-900 border'> 
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route/>
      </Routes>
    </div>
  )
}
export default App;
