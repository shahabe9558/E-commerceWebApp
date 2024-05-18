import { FiArrowUpRight } from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] h-[80vh] bg-black opacity-90 flex text-white text-opacity-50 space-x-52 pt-14 pl-8 pr-8 pb-10 ">
      {/* left part  */}
      <div className="h-[70vh] flex flex-col justify-between w-[50%] ">
        <div className="flex flex-col space-y-5">
          <h1 className="text-4xl">Newsletter</h1>
          <span className="w-72">
            Sign up for perks, and exclusive first access to newest collections
            and sales.
          </span>
          <div className="h-8 w-64 flex items-center justify-center justify-around space-x-3 bg-black opacity-95 p-1 pl-2 rounded-full border border-white border-opacity-50">
            <input className="bg-black opacity-95 outline-none opacity-30 " placeholder="Enter Email"/>
            <FiArrowUpRight className="text-3xl" />
          </div>
        </div>
        <div className="flex items-center space-x-1 pb-6 text-sm ">
          <RiCopyrightLine />
          <h6>SHAZNAVI RUGS INDIA</h6>
        </div>
      </div>
      {/* right part  */}
      <div className="flex space-x-24">
        {/* about us  */}
        <div className="flex flex-col items-start">
          <h3 className=" opacity-50 "> ABOUT US</h3>
          <button>Contact Us</button>
          <button>Legacy</button>
          <button>Sustainability</button>
          <button>Craftsmanship</button>
          <button>Blog</button>
        </div>
        {/* our stories  */}
        <div className="flex flex-col space-y-9">
          <div className="w-44">
            <h3 className="opacity-50">OUR STORES</h3>
            <button>Delhi Store</button>
            <button>Hyderabad Store</button>
            <button>Kolkata Studio</button>
            <button>Bengaluru Store</button>
            <button>Jaipur Store</button>
          </div>
          <div className="w-52">
            <h3 className="opacity-50">SERVICES</h3>
            <button>The White Glove Services</button>
            <button>Customization</button>
          </div>
          <div>
            <h3 className="opacity-50">PRESS & EVENTS</h3>
            <button>Media</button>
          </div>
        </div>
        {/* shopping with us  */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-start w-52 ">
            <h3 className="opacity-50">SHOPPING WITH US</h3>
            <button>Frequently Asked Questions</button>
            <button>Shipping</button>
            <button>Return/Exchange</button>
            <button>Terms & Conditions</button>
            <button>Buy Back Programme</button>
            <button>Privacy</button>
            <button>Shop Carpets</button>
          </div>
          <div className="flex flex-col space-y-8">
            <h3 className="opacity-50">Connect With Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-5 text-xl">
                <RiFacebookFill />
                <FaWhatsapp />
                <FaSquareXTwitter />
                <FaInstagramSquare />
              </div>
              <div className="flex space-x-5 text-xl">
                <FaYoutube />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
