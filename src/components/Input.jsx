import axios from "axios";
import {useState,useContext} from "react";
import "./input.css";
// import notes from "../notes";
import loginContext from "../Context/usecontext";


export default function Input(props){
   const {user} = useContext(loginContext);
   const [title1,setTitle] = useState("");
   const [desc1,setDesc] = useState("");
   
   
   const handleSubmit =async()=>{
      props.onAdd(title1,desc1);
      setDesc("");
      setTitle("");
      try{
         await axios.post("/note",{
            username: user,
            title: title1,
            content: desc1
         })
      // window.location.replace("/");
      }catch(error){
           console.log(error);
      }
      setDesc("");
      setTitle("");
   }

   return(
     <div className="inputBox">
        <span>
        <input className="input" type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} value={title1}/>
        <br />
        <textarea className="input desc" type="textarea" placeholder="Desc" onChange={e=>setDesc(e.target.value)} value={desc1}/>
        </span>
        <span className="add">
         <i className="submit fa-regular fa-plus" onClick={handleSubmit}></i>
        </span>
     </div>
   );
}

// onClick={handleSubmit}