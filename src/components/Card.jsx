import axios from "axios";
import React from "react";
import "./card.css";

export default function Card(props){
const handleClick =async()=>{
    props.onDelete(props.track);
    try{
        await axios.post("https://keeper-clone-mern.herokuapp.com/note/delete",{
            id: props.id
        });
    }catch(error){
         console.log(error);
    }
}

    return(
       <div className="card">
           <p className="info">{props.title}</p>
           <br />
           <p className="info">{props.desc}</p>
           <button className="button" onClick={handleClick}>Delete</button>
       </div>
    );
}