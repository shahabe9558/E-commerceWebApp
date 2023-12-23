import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const Card = ({product}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const addToCart= ()=> {
        dispatch(add(product));
        toast.success("Item Added To Cart");     
    }
      
    const removeCart = ()=> {
        dispatch(remove(product.id));
        toast.error("Item Added To Cart");     
    }

    return (
        <div>
            <div>
                <h1> {product.title} </h1>
            </div>
            <div>
                <p> {product.description} </p>
            </div>
            <div>
                <img src={product.image} />
            </div>
            <div>
                <p> {product.price} </p>
                {
                  cart.some((p) => p.id == product.id) ? (
                    <button onClick={removeCart}>Remove Item</button>
                  ) : (
                    <button onClick={addToCart}>Add To  Cart</button>
                )}
            </div>
        </div>
    )
}
export default Card;