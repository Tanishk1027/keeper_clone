import React from "react";
import { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register(){
     const [username,setUser] = useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");

    const handleSubmit = async (e)=>{ 
        console.log("clicked");
        e.preventDefault();
        try{
            const res = await axios.post("/register",{
                username,
                email,
                password,
               });
               console.log(res.data);
        }catch(error){
            console.log(error);
        }
       
    }

     
    return(
        <div className="register">
            <h2 id="headingregister">Fill your details</h2>
            <br />
            <input type="text" placeholder="Username" className="registerBox" onChange={e=>{setUser(e.target.value)}}/>
            <br />
            <input type="email" placeholder="Email" className="registerBox" onChange={e=>{setEmail(e.target.value)}}/>
            <br />
            <input type="password"  placeholder="Password" className="registerBox" onChange={e=>{setPassword(e.target.value)}}/>
            <br />
            <button id="registerButton" onClick={handleSubmit}>Register</button>
            <br />
            <h2 id="headingLoginregister">Already a user</h2>
            <br />
            <button id="loginButtonregister">
               <Link to="/login">Login</Link>
            </button>
        </div>
    )
}