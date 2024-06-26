import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import toast, { toastoast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setisLogIn } from "../redux/slices/loginSlice";
import {apiConnector} from "../services/apiConnector";
import { endPoint } from "../services/apis";
import axios from "axios";

const LogInForm = () => {


    const dispath = useDispatch();
    const navigate = useNavigate();
    

    const [FormData, setFormData] = useState({email:"", password:""})
    const [showPassword, setShowPassword] = useState(false);
    console.log("formdata is ", FormData);
    function changeHandler(event){
        const { name, value, checked, type } = event.target;
        setFormData(prevData => {
          return {
            ...prevData,
            [name] : value
          }
        });
    }
    const {email, password} = FormData;
  
    const apiCall = async () => { 
            try{
                let response = await apiConnector("POST", endPoint.LOG_IN_API, {email, password});
                if(response)
                    {
                        toast.success("User Log in Successfuly");
                        navigate('/');
                        dispath(setisLogIn(true));
                    }
                    console.log("Res is", response);
            }
            catch(error){
                console.log(error);
            }
    }
    function submitHandler(event){
        event.preventDefault();
        apiCall();
    }
    function setShowPasswordHandler(){
        console.log(setShowPassword);
      setShowPassword((prev) => !prev)
    }
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label htmlFor="email1" className="w-full text-[0.875rem] mb-1 leading-[1.375rem]">Email Address
                <sup>*</sup>
            </label>
            <input 
            id="email1"
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            value={FormData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-white"
            />

            <label htmlFor="pass" className="w-full relative">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-400">*</sup>
                </p>
                <input
                required
                id="pass"
                name="password"
                type={showPassword ? ("text") : ("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Password"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                <span onClick={setShowPasswordHandler} className="absolute right-3 text-white top-[38px] cursor-pointer">
                      {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>
            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-black">Sign In</button>  
        </form>
    );

}
export default LogInForm;