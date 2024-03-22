import { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { Products } from "../data";
import { FaLocationArrow } from "react-icons/fa6";


const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // data ko fetch karo pahle tab to product card bana paaoge
  // async function fetchProductData(){
  //     setLoading(true);
  //     try{
  //         const output = await fetch(API_URL);
  //         const data = await output.json();
  //         setProducts(data);
  //     }
  //     catch(error){
  //         setProducts([]);
  //     }
  //     setLoading(false);
  // }
  useEffect(() => {
    // fetchProductData();
    setProducts(Products);
    setLoading(false);
  }, []);
  return (
    <div className="space-y-10 w-[100%] flex flex-col ">
      <div className="flex flex-col items-center space-y-9 mt-96 text-white " >
        <div className="flex flex-col space-y-5 text-7xl">
          <h1>Threads Of Time,</h1>
          <h1>Woven With Love</h1>
        </div>
        <div className="flex justify-between space-x-80 text-lg ">
          <button>Shop Machine Made</button>
          <div className=" h-10 w-fit flex items-center space-x-1 bg-white rounded-full p-6 text-black">
             <button>Shop All Rugs</button>
             <FaLocationArrow/>
          </div>
          <button>Shop Handmade</button>
        </div>
      </div>
      {loading ? (
        <Spinner className="w-[100%]" />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mt-7">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="font-semibold mx-auto">No Product found</p>
      )}
    </div>
  );
};
export default Home;
