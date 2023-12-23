
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';


const CartItem = ({item}) => {
    const dispatch = useDispatch();


    const removeFromCart = () => {
       dispatch(remove(item.id)); 
       toast.success("Item Remove");
    }
    return(
        <div>
            <div>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <h1> {item.title} </h1>
                    <p> {item.description} </p>
                    <div>
                        <p> {item.price} </p>
                        <button onClick={removeFromCart}>
                          <AiFillDelete/>
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default CartItem;