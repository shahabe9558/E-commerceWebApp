import { Products } from "../../datas/products";
import ListingCard from "../../components/ListingCard";
import Footer from "../../components/Footer";

const Designer = () => {
  return (
    <div className="bg-white py-8">
      <div>
        {Products.map((product) => (
          <ListingCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Designer;
