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



export default function Contactus(){
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll = null);
    };


    return(
        <Container>
            
            <Navbar isScrolled = {isScrolled} />
            
            
        </Container>
        
    );
}

const Container = styled.div`
  background-color: black;
  
  padding: 10rem 0;
`;