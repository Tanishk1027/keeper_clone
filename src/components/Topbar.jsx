import React,{useContext} from "react";
import "./topbar.css";
import  loginContext  from "../Context/usecontext";
import { Link } from "react-router-dom";


export default function Topbar(){
    const {user} = useContext(loginContext);
    console.log(user);
    return(
    <div className="top">
        <h1 className="headingtopbar">keeper-app</h1>
        <Link to="/login">Login</Link>
    </div>)
}