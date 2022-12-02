import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/yolocodemain.png";
import websiteLogo from "../assets/code1.png";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/Loading"
import Profile from "../components/Profile";
import '../components/App.css'

export default function Network(){
    //It is for scrollable website
    //I also use useNavigate for navigating between pages
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    
//I am trying to make our page scrollable
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll = null);
    };

//I added profile page. It is imported from another page
    return(
        <Container>
            <Navbar isScrolled = {isScrolled} />
            <Profile/>
        </Container>
    );
}
//I added css specifications
const Container = styled.div`
  background-color: black;
  padding-top: 90px;
  .hero {
    position: relative;
    top: 6rem;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
