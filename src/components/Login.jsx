import axios from "axios";
import React,{ useState,useContext,useRef} from "react";
import "./login.css";
// import Topbar from "./Topbar";
import loginContext from "../Context/usecontext";
import { Link } from "react-router-dom";


export default function Login(){
    const userRef= useRef();
    const [password,setPassword] = useState("");
    const {user,dispatch} = useContext(loginContext);
        
    
    const handleSubmit = ()=>{
        console.log("a");
        dispatch({type: "Login_Start"});
        try{
             const res = axios.post("https://keeper-clone-mern.herokuapp.com/login",{
                username : userRef.current.value,
                password
            });
           dispatch({type: "Login_Success",payload: userRef.current.value});
           console.log(user);
            window.location.replace("/");
        }catch(error){
            alert("wrong credentials");
            console.log(error);
        }
    }

    return(
        
        <div className="Login">
            <h2 id="headinglogin">Verify yourself</h2>
            <br />
            <input type="text" placeholder="Username" className="loginBox" ref ={userRef}/>
            <br />
            <input type="password"  placeholder="Password" className="loginBox" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <button id="loginButton" onClick={handleSubmit}>Login</button>
            <br />
            <h2 id="headingRegisterlogin">New User Register here</h2>
            <br />
            <button id="registerButtonlogin">
                <Link to="/register">Register</Link>
            </button>
        </div>

    );
};


