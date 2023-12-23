import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = ()=> {
    const {cart} = useSelector((state) => state);
    return(
        <div>
             {cart.length > 0 ? (
                <div>
                    {/* cart dikhan hai  */}
                    <div>
                        {
                            cart.map((item, index) => {
                                return <CartItem key={index} item={item} />
                            })
                        }
                    </div>
                    {/* summary bahi dikhana hai  */}
                </div>
             ) : (
             <div>
                <h1>Your Cart is empty</h1>
                <NavLink to='/'>
                    <button>
                        Continue Shopping
                    </button>
                </NavLink>
             </div>
             )
             }
        </div>
    )
}
export default Cart;