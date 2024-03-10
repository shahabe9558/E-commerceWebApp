import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { apiConnector } from "../services/apiConnector";
import { endPoint } from "../services/apis";

const Cart = ()=> {
    const {cart} = useSelector((state) => state);
    const [amount, setAmount] = useState(0);

    useEffect(()=> {
       setAmount(cart.reduce((total, num,) => total + num.price, 0))
    }, [cart]);

    const apiCall = async () =>{
            let response = await apiConnector('POST', endPoint.ORDER_NOW, {amount, cart});
            console.log(response);  
    }
    
    // order handler define here 
    const orderHandler = ()=>{
        apiCall();
        toast.success("Order Reaceive Succefully");
    }
    return(
        <div>
             {cart.length > 0 ? (
                <div className="flex flex-row justify-center max-[1300px] mx-auto gap-x-5" >
                    {/* cart dikhan hai  */}
                    <div>
                        {
                            cart.map((item, index) => {
                                return <CartItem key={index} item={item} />
                            })
                        }
                    </div>
                    {/* summary bahi dikhana hai  */}
                    <div className="w-[40%] mt-5 flex flex-col">
                       <div className="flex flex-col gap-5">
                         <h1 className="font-semibold text-xl text-green-800">Your Cart</h1>
                         <h2 className="font-semibold text-5xl text-green-700  -mt-5">Summary</h2>
                         <p className="text-xl">
                            <span className="text-gray-700 font-semibold text-xl">
                                Total Items : {cart.length}
                            </span>
                         </p>
                       </div>
                       <div>
                          <p className="text-xl font-bold">
                            <span className="text-gray-700 font-semibold">
                                Total Amount:
                            </span>
                            {" "}
                            {amount}
                          </p>
                          <button onClick={orderHandler} className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                            Order Now
                          </button>
                       </div>
                    </div>
                </div>
             ) : (
             <div className="flex flex-col items-center justify-center gap-6 min-h-[80vh]">
                <h1 className="text-2xl font-semibold">Your Cart is empty !</h1>
                <NavLink to='/'>
                    <button className="bg-green-600 text-white p-5 font-semibold text-xl rounded-md hover:bg-white border border-green-600 border-2 hover:text-green-600 transition-all duration-300 ease-in">
                        CONTINUE SHOPPING
                    </button>
                </NavLink>
             </div>
             )
             }
        </div>
    )
}
export default Cart;