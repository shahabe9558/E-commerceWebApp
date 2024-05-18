import { useState } from "react";
import toast from "react-hot-toast";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { add, remove } from "../redux/slices/cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import './ListingCard.css';


const ListingCard = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [test, setTest] = useState();

  let product = props.product;
  let [cnt, setCnt] = useState(0);
  function incrHandler() {
    if (cnt == product.image.length - 1) {
      cnt = 0;
      setCnt(cnt);
    } else {
      cnt = cnt + 1;
      setCnt(cnt);
    }
  }
  function decrHandler() {
    if (cnt == 0) {
      setCnt(product.image.length - 1);
    } else {
      cnt = cnt - 1;
      setCnt(cnt);
    }
  }
  function addCart() {
    dispatch(add(product));
    toast.success("Added to cart");
  }
  function removeCart() {
    dispatch(remove(product.id));
    toast.error("Removed Item");
  }
  return (
    <div>
      {/* horizontal line  */}
      <div className=" w-[95%] rounded-md h-1 mx-auto  bg-slate-500 opacity-30 "></div>
      {/* content  */}
      <div className="flex items-center space-x-14 h-[80vh] w-[85%] mx-auto">
        {/* left part  */}
        <div className="w-[50%] flex flex-col items-center space-y-5">
          {/* image part  */}
          <div className="flex justify-around space-x-7 items-center">
            <FaAngleDoubleLeft onClick={incrHandler} />
            <img
              className=""
              height="350px"
              width="350px"
              src={product.image[cnt]}
            />
            <FaAngleDoubleRight onClick={decrHandler} />
          </div>
          {/* dot part  */}
          <div className="flex space-x-3 mx-auto">
            {product.image.map((img, index) => (
              <NavLink key={index} className=" imgRoll  w-4 h-4 rounded-full bg-slate-500 opacity-50"
              onClick={()=>{
                setCnt(index);
              }}
              ></NavLink>
            ))}
          </div>
        </div>
        {/* right part  */}
        <div className="w-[50%]">
          <div className="w-[100%]  flex flex-col items-start space-y-5">
            <span className="text-2xl w-[100%] text-start"> {product.title} </span>
            <div className="flex space-x-1 text-2xl text-yellow-500 ">
              {product.image.map((img) => (
                <IoStar />
              ))}
            </div>
            <p className=" text-lg text-red-500 ">In Stock {product.stock} </p>
            <h1 className="text-2xl font-semibold"> {product.price} </h1>
            <p className=" text-sm w-[100%] text-start "> {product.description} </p>
            <div>
              {cart.some((p) => p.id == product.id) ? (
                <button
                  className="border border-black rounded-full border-opacity-50 p-2 w-44 "
                  onClick={removeCart}
                >
                  Remove Item
                </button>
              ) : (
                <button
                  className="border border-black rounded-full border-opacity-50 p-2 w-44 "
                  onClick={addCart}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingCard;
