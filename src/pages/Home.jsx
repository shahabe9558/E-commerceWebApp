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
        <div>
            {
                loading ? (<Spinner/>) : products.length > 0 
                ? (
                  <div>
                     {
                       products.map((product) => (
                        <Card key = {product.id} product = {product} />
                       ))
                     }     
                  </div>
                  ) 
                : (<p>No Product found</p>)
            }
        </div>
    )
}
export default Home;