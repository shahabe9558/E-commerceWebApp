import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import CardCategory from "../components/CardCategory";
import { categories } from "../datas/categories";
import { Products } from "../datas/products";
import ListingCard from "../components/ListingCard";
import { delivery } from "../datas/delivery";
import DelCard from "../components/DelCard";
import Footer from "../components/Footer";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  let viewImg = 'https://d3o59fu9acgbkr.cloudfront.net/jrc2021/home/master/2024/1/11/jrc-desktop-banner-1-11-2024-11-19-41-AM.jpg';
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
    <div className="w-[100%] h-[100vh] flex flex-col space-y-8 ">
      {/* head section  */}
      <div className="flex flex-col items-center space-y-9 text-white mt-96 p-12">
        <div className="flex flex-col space-y-5 text-7xl">
          <h1>Threads Of Time,</h1>
          <h1>Woven With Love</h1>
        </div>
        <div className="flex justify-between space-x-80 text-lg ">
          <Link to='/machinemade' >Shop Machine Made</Link>
          <div className=" h-10 w-fit flex items-center space-x-1 bg-white rounded-full p-6 text-black">
            <Link to='/allrugs' >Shop All Rugs</Link>
            <FaLocationArrow />
          </div>
          <Link to='/handmade'>Shop Handmade</Link>
        </div>
      </div>
      {/* category section  */}
      <div className="flex flex-col text-center space-y-6 pr-32 pl-32 mt-48 ">
        <h3 className=" text-xl ">SHOP BY CATEGORY</h3>
        <div className="cat grid grid-cols-5 space-x-8 space-y-3">
          {categories.map((category, index, catogories) => (
            <CardCategory key={index} index = {index}  category={category} categories={categories} />
          ))}
        </div>
      </div>
      {/* view in your room  */}
      <div className="mx-auto">
        <NavLink to='/viewin'>
          <img src={viewImg} />
        </NavLink>
      </div>
      {/* listing section  */}
      <div className="flex flex-col w-[100%] mx-auto text-center">
        <div>
          <h2 className="text-2xl p-5">Most Sold Carpets</h2>
        </div>
        <div>
          {Products.map((product) => (
            <ListingCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* delivery location section  */}
      <div className=" w-full h-[50%] flex flex-col items-center space-y-20 ">
        <h1>SPEAK WITH A CARPET SPECIALIST NEAR YOU</h1>
        <div className="grid grid-cols-7 gap-9 pl-24 pr-24 ">
          {delivery.map((del, index) => (
            <DelCard key={del.id} del={del} />
          ))}
        </div>
      </div>
      {/* footer section  */}
      <Footer />
    </div>
  );
};
export default Home;
