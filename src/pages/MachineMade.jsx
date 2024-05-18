import { useEffect, useState } from "react";
import { Products } from "../datas/products"; 
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

const MachineMade = ()=>{
    return (
        <div className=" bg-white py-8">
          {
            Products.map((product) => (
            <ListingCard key={product.id} product={product} />
            ))
          }
          <Footer/>
        </div>
    )
}
export default MachineMade;