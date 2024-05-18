import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

const CardCategory = ({props, category, index, categories})=>{
    const path = category.route;
    console.log(path);
    return (
        <div>
            <Link to={path} className=" max-width: 100%; h-auto">
               <img src={category.img} />
            </Link>
            <h4 className=" text-xl p-4 "> {category.title}</h4>
        </div>
    )
}
export default CardCategory;