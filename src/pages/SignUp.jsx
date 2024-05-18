import Template from "../components/Template";
import img from "../assets/signup.webp";

const Signup = () =>{
    return(
        <div className="w-[100%] space-y-10 bg-white">
            <Template
            title={"Join Us and Indulge in Style"}
            desc1={"Elevate Your Every Day-"}
            desc2={"With our new Trends and Pattern"}
            image={img}
            formType={"signup"}
            />
        </div>
    );
}
export default Signup;