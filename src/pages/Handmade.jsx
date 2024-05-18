import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import { Products } from "../datas/products";

const Handmade = ()=>{
    return(
        <div className="bg-white py-8">
            {
            Products.map((product) => (
            <ListingCard key={product.id} product={product} />
            ))
          }
          <Footer/>
        </div>
    )
}
export default Handmade;