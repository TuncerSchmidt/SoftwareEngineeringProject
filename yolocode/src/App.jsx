import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Yolocode from "./pages/Yolocode";
import Player from "./pages/Player";
import Parttimejobs from "./pages/Parttimejobs";
import Internship from "./pages/Internship";
import Network from "./pages/Network";
import Contactus from "./pages/Contactus";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/signup" element = {<Signup/>}/>
        <Route exact path = "/player" element = {<Player/>}/>
        <Route exact path = "/parttimejobs" element = {<Parttimejobs/>}/>
        <Route exact path = "/internship" element = {<Internship/>}/>
        <Route exact path = "/contactus" element = {<Contactus/>}/>
        <Route exact path = "/network" element = {<Network/>}/>
        <Route exact path = "/aboutus" element = {<AboutUs/>}/>
        <Route exact path = "/" element = {<Yolocode/>}/>
      </Routes>
    </BrowserRouter>
  )
}