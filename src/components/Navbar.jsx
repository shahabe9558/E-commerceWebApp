import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import cartSlice from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa6";



const Navbar = () => {
    const { cart } = useSelector((state) => state);
    const login = useSelector((state) => state.login.value);
    return (
        <div className="flex justify-between items-center justify-center w-[100%] mx-auto p-2 pl-14 pr-14">
            {/* shop category  */}
            <div className="flex space-x-8 text-white text-lg">
                <Link>Shop</Link>
                <Link>Service</Link>
                <Link>Connect</Link>
                <Link>Sale</Link>
                <Link>Custom</Link>
            </div>
            {/* brand name  */}
            <NavLink to="/">
                <div className="text-white text-3xl italic flex flex-col space-y-0">
                    <p>
                      SHAZNAVI
                    </p>
                    <p className="mx-auto text-sm">
                      RUGS
                    </p>
                </div>
            </NavLink>
            {/* search category  */}
            <div className="flex items-center gap-8 text-white -tracking-tighter text-xl">
                {/* THIS IS SEARCH ICON  */}
                 <div className=" h-8 flex items-center justify-center space-x-3  bg-richblack-901 opacity-60 p-1 pl-2 rounded-full  ">
                    <CiSearch className="text-white placeholder-opacity-100" />
                    <input className=" w-[80%] outline-none bg-richblack-901 text-white placeholder-opacity-100  " type="search" placeholder="Search" />
                 </div>
                {/* this is login page */}
                <Link to='/login'>
                    { !login && 
                        <FaUserGraduate/>
                    }
                </Link>
                <Link to='/signup'>
                    {
                        !login && 
                       <FaUserSecret/>
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
