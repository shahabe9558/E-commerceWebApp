
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ViewIn from './pages/ViewIn';
import AllRugs from './pages/AllRugs';
import Handmade from './pages/Handmade';
import MachineMade from './pages/MachineMade';
import Traditional from './pages/category/Traditional';
import Modern from './pages/category/Modern';
import Abstract from './pages/category/Abstaract';
import Geometric from './pages/category/Geometric';
import Floral from './pages/category/Floral';
import Unshaped from './pages/category/Unshaped';
import Durries from './pages/category/Durries';
import Playroom from './pages/category/Playroom';
import Designer from './pages/category/Designer';
import Cushion from './pages/category/Cushion';


function App() {
  return (
    <div className="container w-[100%] h-[100%] flex flex-col relative
    bg-[url('https://www.obeetee.in/cdn/shop/files/dekstop_d0156670-b70c-49ba-8c40-f73125255dec_1800x.jpg?v=1707892891')] 
    bg-no-repeat">
      <div className='w-[100%]'> 
        <Navbar/>
      </div>
      {/* pages of the site */}
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<SignUp/>} />
        <Route path='/machinemade' element = {<MachineMade/>} />
        <Route path='/allrugs' element = {<AllRugs/>} />
        <Route path='/handmade' element = {<Handmade/>} />
        <Route path='/traditional' element = {<Traditional/>} />
        <Route path='/modern' element = {<Modern/>} />
        <Route path='/abstract' element = {<Abstract/>} />
        <Route path='/geometric' element = {<Geometric/>} />
        <Route path='/floral' element = {<Floral/>} />
        <Route path='/unshaped' element = {<Unshaped/>} />
        <Route path='/durries' element = {<Durries/>} />
        <Route path='/playroom' element = {<Playroom/>} />
        <Route path='/designer' element = {<Designer/>} />
        <Route path='/cushion' element = {<Cushion/>}/>
        <Route path='/viewin' element = {<ViewIn/>} />
      </Routes>
    </div>
  )
}
export default App;
