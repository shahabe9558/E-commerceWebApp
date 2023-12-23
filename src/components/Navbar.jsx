import { Link, NavLink } from "react-router-dom";
import logo from '../logo.png'
import {FaShoppingCart} from 'react-icons/fa';

const Navbar = ()=> {
    return(
        <div>
            <NavLink to='/'>
                <div>
                    <img src= {logo} />
                </div>
            </NavLink>
            <div>
                <Link to='/'>
                   <p>Home</p>
                </Link>
                <NavLink to='/cart'>
                    <div>
                        <FaShoppingCart/>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;