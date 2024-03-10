import { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Home = ()=> {
    const API_URL = "https://fakestoreapi.com/products";
    const[loading, setLoading] = useState(true);
    const[products, setProducts] = useState([]);
    // data ko fetch karo pahle tab to product card bana paaoge 
    async function fetchProductData(){
        setLoading(true);
        try{
            const output = await fetch(API_URL);
            const data = await output.json();
            setProducts(data);
        }
        catch(error){
            setProducts([]);
        }
        setLoading(false);
    }
    useEffect(()=> {
        fetchProductData();
    }, []);
    return(
        <div className="space-y-10 w-[100%]  justify-center ">
            {
                loading ? (<Spinner className="w-[100%]" />) : products.length > 0 
                ? (
                  <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                     {
                       products.map((product) => (
                        <Card key = {product.id} product = {product} />
                       ))
                     }     
                  </div>
                  ) 
                : (<p className="font-semibold mx-auto">No Product found</p>)
            }
        </div>
    )
}
export default Home;