import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import cartSlice from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { cart } = useSelector((state) => state);
    const login = useSelector((state) => state.login.value);
    return (
        <div className="flex justify-between h-20 max-w-7xl mx-auto p-3">
            <NavLink to="/">
                <div>
                    <img src={logo} className="h-14" />
                </div>
            </NavLink>
            <div className="flex items-center gap-3 text-white -tracking-tighter text-xl">
                {/* this is home page  */}
                <Link to="/">
                    <p>Home</p>
                </Link>
                {/* this is login page */}
                <Link to='/login'>
                    { !login && 
                        <p>Login</p>
                    }
                </Link>
                <Link to='/signup'>
                    {
                        !login && 
                        <p>Signup</p>
                    }
                </Link>
                <NavLink to="/cart">
                    <div className="relative">
                        <FaShoppingCart className="text2xl" />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </NavLink>
            </div>
        </div>
    );
};
export default Navbar;
