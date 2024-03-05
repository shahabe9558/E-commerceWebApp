import Template from "../components/Template";
import img from "../assets/login.webp";


const Login = () =>{
    return(
        <Template
        className ="bg-black border 10px solid"
        title={"Welcome Back"}
        desc1={"Build Skills for today, tomorrow and beyond"}
        desc2={"Education is future proof your career"}
        image={img}
        formType={"login"}
        
        />
    );
}
export default Login;