import Template from "../components/Template";
import img from "../assets/login.webp";


const Login = () =>{
    return(
        <div className="w-[100%] space-y-1 bg-white">
            <Template
            className =""
            title={"Want Explore Our Collection..? "}
            desc1={"With new arrivals added regularly-"}
            desc2={"Exclusive deals you won't find anywhere else"}
            image={img}
            formType={"login"}
            />
        </div>
    );
}
export default Login;