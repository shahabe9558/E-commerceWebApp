import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { apiConnector } from "../services/apiConnector";
import { endPoint } from "../services/apis";
import { useDispatch, useSelector } from "react-redux";
import { setisLogIn } from "../redux/slices/loginSlice";





const SignUpForm = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [accountType, setAccountType] = useState({accountType:"buyer"});
    const dispatch = useDispatch();

    const [formdata, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        ConfirmPass: "",
    });
    const{firstName, lastName, email, password} = formdata;
    console.log("formdata is ", formdata);
    function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }
    function setShowPasswordHandler() {
        setShowPassword((prev) => !prev);
    }
    function setShowPasswordHandler2() {
        setShowPassword2((prev) => !prev);
    }
    
    const apiCall = async (firstName, lastName, email, password)=>{
        try{
            let response = await apiConnector("post", endPoint.SIGN_IN_API, {firstName, lastName, email, password});
            console.log(response);
        }
        catch(error){
            console.log("Error While signing in");
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (formdata.password != formdata.ConfirmPass) {
          toast.error("Passwords do not match");
          return;
        }
    
        const finalData = {
          ...formdata,
          accountType
        }
        apiCall(firstName, lastName, email, password);
        dispatch(setisLogIn(true));
        toast.success("Account Create Successfull");
        navigate("/");
      }
    
    return (
        <form onSubmit={submitHandler} className="text-white mt-8">
            <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
            <div
          className={`${accountType === "buyer"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("buyer")}>
          Buyer
        </div>

        <div
          className={`${accountType === "vendor"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("vendor")}>
          Vendor
        </div>
            </div>

            <div className="flex gap-x-4">
                <label htmlFor="firstName" className="w-full text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">First Name
                    <input
                        required
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formdata.firstName}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    />
                </label>
                <label htmlFor="lastName" className="w-full text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">Last Name
                    <input
                        required
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formdata.lastName}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    />
                </label>
            </div>
            <label htmlFor="email" className="w-full text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem] ">Email Address
                <input
                    required
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    value={formdata.email}
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                />
            </label>
            <div className="flex gap-x-4">
                <label htmlFor="password" className="w-full relative text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">Create Password
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={formdata.password}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    />
                    <span onClick={setShowPasswordHandler}  className="absolute top-[38px] right-3 z-10 cursor-pointer">
                        {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                    </span>
                </label>

                <label htmlFor="ConfirmPass"  className="w-full relative text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">Confirm Password
                    <input
                        required
                        type={showPassword2 ? "text" : "password"}
                        placeholder="Re-Enter Password"
                        name="ConfirmPass"
                        id="ConfirmPass"
                        value={formdata.ConfirmPass}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
                    />
                    <span onClick={setShowPasswordHandler2} className="absolute top-[38px] right-3 z-10 cursor-pointer">
                        {showPassword2 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                    </span>
                </label>
            </div>
            <button className="w-full bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">Create Account</button>
        </form>
    );
}
export default SignUpForm;