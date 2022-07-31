import React ,{useContext} from 'react';
// import Input from './components/Input';
import Topbar from './components/Topbar';
import Element from './components/Element';
import Register from './components/Register';
import Login from './components/Login';
import Context from "./Context/Context";
import loginContext from './Context/Context';


import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

export default function App(){
const {user} = useContext(loginContext);

  return(
       <Router>
        <Context>
        <Switch>
          <Route exact path="/" element={user ? <div><Topbar/><Element/></div>: <Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Switch>
        </Context>
       </Router>
  );
}


