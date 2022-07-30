// import notes from "../notes.js";
import {useState,useContext} from "react";
import "./element.css";
import Card from "./Card.jsx";
import Input from "./Input";
import { useEffect } from "react";
import axios from "axios";
import loginContext from "../Context/usecontext";
import { useLocation } from "react-router-dom";

export default function Element(){
       const {search} = useLocation();
    const [notes,setnotes] = useState([]);
     const {user} = useContext(loginContext);

    function addNote(title1,desc1){
        const newNote = {
            title: title1,
            content: desc1
        }
        setnotes([...notes,newNote])
    }

    const fetchnotes = ()=>{
        console.log(user);
        const res =  axios.post("https://keeper-clone-mern.herokuapp.com/note/all",{
                user
            });
            console.log(res.data);
            setnotes(res.data);
    }

    useEffect(()=>{
        try{
        fetchnotes();
        }catch(error){
            console.log(error);
        }  
    },[search])
    

function deleteNote(track){
    console.log(track);
setnotes(prevNotes=>{
   return prevNotes.filter((noteItem,index)=>{
        return index !== track;
    })
})
}   

function createCard(data,index){
    return(
   <Card
   key = {index}
   id={data._id}
   track = {index}
    title = {data.title}
    desc = {data.content}
     onDelete={deleteNote}
   />)
}
   

    return(
        <div>
        <Input onAdd={addNote}/>
        <div className="data">
        {notes && notes.map(createCard)}
        </div>
        </div>
    );
}

 