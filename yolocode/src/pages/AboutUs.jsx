import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/yolocodemain.png";
import websiteLogo from "../assets/code1.png";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import Map from "../components/Map";
import { SimpleSlider } from "../components/Slider";
import "../scss/about.css";
import {motion} from "framer-motion";
import { useRef, useEffect } from "react";
import images from "./images.js";
import "../scss/about.css";

import image3 from "../components/images/View3.jpeg";


//In this page first I created my const variables
export default function Contactus(){
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const [width, setWidth] = useState(0);
    const carousel = useRef();
//I used useeffect to set my width. 
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
    })
//This part is for scrolling through all website
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll = null);
    };
//I created a container I added Navbar inside it
    console.log(images);
    return(
        <Container>
            
            <Navbar isScrolled = {isScrolled} />
            
            <div className="apple">
            <div className="yazi">
  <h1>About Us Page</h1>
  <p>Some text about who we are aome text about who we are and what we doSome text about who we are and what we doSome text about who we are and what we do</p>
  <p>Some text about who we are and what we doSome text about who we are and what we doSome text about who we are and what we doResize the browser window to see that this page is responsive by the way.</p>
</div>
<h1 className="yazi">Services</h1>
                <motion.div ref={carousel} className="carousel">
                    <motion.div drag="x" dragConstraints={{right : 0, left: -width}} className="inner-carousel">
                        {images.map(image=>{
                            return(
                                <motion.div className="item" key = {image}>
                                    <img src={image} alt=""/>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
                <div class="yazi">
  <h1>Our Vision</h1>
  <p>Some text about who we are and what ext about who we are and what we doSome text about who we are and what we doSome text about who we are and what we doSome text about who we are and what we doSome text about who we are and what we do.</p>
  <p>Some text about who we are and what we doSome text about who we are and what we doSome text about who we are and what we doResize the browser window to see that this page is responsive by the way.</p>
</div>
            </div>
            
            
            <h1 className="yazi">Our Team</h1>
            <div className="teams">
            
                <img className="burada" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMU6LWVr_YOlHC_u0GxqmAEVX8k2Pe8fzLQ&usqp=CAU"}>
                
                </img>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMU6LWVr_YOlHC_u0GxqmAEVX8k2Pe8fzLQ&usqp=CAU"}>
                
                </img>
                <div className="son">
                <h1 className="myname">Tuncer Schmidt </h1><h1> Miken Melvin</h1>
                </div>
                
                </div>
            


        </Container>
        
    );
}
//Here I added css parts
const Container = styled.div`
  background-color: black;
  
  
  padding: 2rem 0;
  .apple{
    padding-top: 6rem;
    margin: 0 20%;
    
  }
  .son{
    justify-content: center;
    display: flex;
    padding-bottom: 7rem;
    
  }
  .burada{
    padding-right: 5rem;
  }
  .teams{
    justify-content: center;
    text-align: center;
  }
  .myname{
    padding-right: 7rem;
  }
  .yazi{
    
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    text-align: center;
  }
  .item{
    min-height: 30rem;
    min-width: 30rem;
    
  }
  .item img{
    width: 20rem;
    height: 20rem;
    padding: 0.1rem;
    border-radius: 2rem;
    pointer-events: none;
  }
  .inner-carousel{
    display: flex;
    
  }
  .carousel{
    cursor: grab;
    overflow: hidden;
  }
    
`;
