import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { apiConnector } from "../services/apiConnector";
import { endPoint } from "../services/apis";
import { RxCross2 } from "react-icons/rx";
import { LuIndianRupee } from "react-icons/lu";
import './Cart.css';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((total, num) => total + num.price, 0));
  }, [cart]);

  const apiCall = async () => {
    let response = await apiConnector("POST", endPoint.ORDER_NOW, {
      amount,
      cart,
    });
    console.log(response);
  };

  // order handler define here
  const orderHandler = () => {
    apiCall();
    toast.success("Order Reaceive Succefully");
  };
  return (
    <div className=" h-[90vh] border max-h-[100vh] w-[100%] flex justify-end absolute">
      <div className="  w-[30%] h-[100%] border 2px  bg-white space-y-10 ">
        {/* heder sec  */}
        <div className=" h-[5%] ">
          <div className="flex justify-between items-center p-5 text-xl">
            <h5>Cart</h5>
            <Link to="/">
              <RxCross2 />
            </Link>
          </div>
          <div className=" h-0.5 w-[100%] border bg-slate-500 opacity-30 "></div>
        </div>
        {/* item section  */}
        {cart.length > 0 ? (
          <div className=" h-[95%]  w-[100%] flex flex-col items-start">
            {/* cart dikhan hai  */}
            <div className="h-[70%]">
              {cart.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })}
            </div>
            {/* summary bahi dikhana hai  */}
            <div className="w-[100%] h-[30%] flex flex-col items-start justify-center p-8">
              <div className=" w-[100%] h-0.5 bg-slate-500 opacity-30"></div>
              <div className="w-[85%] pt-4 mx-auto">
                <p>Add Order Note</p>
                <p className=" opacity-70 ">Shipping & taxes calculated at checkout</p>
              </div>
              <div className=" mx-auto flex items-center justify-center space-x-16 w-[85%] bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                <button
                  onClick={orderHandler}
                  className=""
                >
                Checkout
                </button>
                <div className="flex items-center text-xl">
                  <LuIndianRupee/>
                  <p>{amount}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // footer section
          <div className="flex flex-col items-center justify-center gap-6 min-h-[30%]">
            <h1 className="text-2xl font-semibold">Your Cart is empty !</h1>
            <NavLink to="/">
              <button className="bg-green-600 text-white p-5 font-semibold text-xl rounded-md hover:bg-white border border-green-600 border-2 hover:text-green-600 transition-all duration-300 ease-in">
                CONTINUE SHOPPING
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
