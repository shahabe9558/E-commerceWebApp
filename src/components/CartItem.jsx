
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { FaIndianRupeeSign } from "react-icons/fa6";



const CartItem = ({item}) => {
    const dispatch = useDispatch();


    const removeFromCart = () => {
       dispatch(remove(item.id)); 
       toast.success("Item Remove");
    }
    return(
        <div className='w-[100%] h-[33%] border'>
            <div className='flex justify-between p-2 gap-2'>
                {/* image area  */}
                <div className=''>
                    <img height='160px' width='160px' src={item.image} className='object-cover'/>
                </div>
                {/* content area  */}
                <div className='w-[70%] self-start space-y-5 ml-5'>
                    <h1 className=' text-xs w-[100%]'> {item.title} </h1>
                    <div className='flex space-x-3 items-center'>
                        <FaIndianRupeeSign/>
                       <p className='text-green-600 font-bold text-lg'> {item.price} </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex space-x-3 border shadow-md p-1 text-xl'>
                           <p>-</p> 
                           <p>1</p> 
                           <p>+</p> 
                        </div>
                        <button onClick={removeFromCart} className='text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
                          <AiFillDelete/>
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default CartItem;