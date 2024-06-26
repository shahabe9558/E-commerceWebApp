import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import fimg from "../assets/frame.png";
import {FcGoogle} from "react-icons/fc";



const Template = ({title, desc1, desc2, image, formType}) =>{
    return(
       <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between text-black">
           <div className="w-11/12 max-w-[450px] flex flex-col">
              <h1 className="font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
              <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
              <span className="opacity-50">{desc1}</span>
               <span className="opacity-80">{desc2}</span>
              </p>
              {formType === "signup" ? (<SignUpForm/>) : (<LogInForm/>)}
              
              <div className="flex w-full items-center gap-x-2 my-4">
                  <div className="h-[1px] w-full bg-slate-400"></div>
                  <p className=" font-medium leading-[1.375rem]">OR</p>
                  <div className="h-[1px] w-full bg-slate-400"></div>
              </div>
              <button className="flex rounded-md items-center justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6">
               <FcGoogle/>
               Sign Up with Google</button>
           </div>
            <div className="relative w-11/12 max-w-[450px]">
               <img src={fimg}
               alt="pattern"
               width={558}
               height={504}
               loading="lazy"/>

               <img src={image}
               alt="pattern"
               width={558}
               height={504}
               loading="lazy"
               className="absolute -top-4 right-4"
               />
            </div>
       </div>
    );
}
export default Template;