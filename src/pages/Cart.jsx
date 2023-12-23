import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Cart = ()=> {
    const {cart} = useSelector((state) => state);
    const [amount, setAmount] = useState(0);
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
                    <div>
                       <div>
                         <h1>Your Cart</h1>
                         <h2>Summary</h2>
                         <p>
                            <span>
                                Total Items : {cart.length}
                            </span>
                         </p>
                       </div>
                       <div>
                          <p>
                            <span>
                                Total Amount:
                            </span>
                            {" "}
                            {amount}
                          </p>
                          <button>
                            Checkout Now
                          </button>
                       </div>
                    </div>
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