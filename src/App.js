
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/slices/counterSlice';
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div >
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <br/>
        <br/>
        <p> {count} </p>
        <br/>
        <br/>
        <button onClick={()=> dispatch(decrement())}>
          Decrement
        </button>
    </div>
  )
}
export default App;
