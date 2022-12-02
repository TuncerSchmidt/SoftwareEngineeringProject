import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/yolocodemain.png";
import websiteLogo from "../assets/code1.png";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import Jobs from "../components/Jobs";
import HeaderKey from "../components/HeaderKey";




export default function ParttimeJobs(){
    //It is for scrollable website
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll = null);
    };
//It is for filtering keywords and keep it in state
    const [filterKeywords, setfilterKeywords] = useState([]);

    const addFilterKeywords = (data)=>{
      if(!filterKeywords.includes(data)){
        setfilterKeywords([...filterKeywords, data]);
      }
    }

    return(
        <Container>
            <Navbar isScrolled = {isScrolled} />
            <div className="header">
            </div>
            {
              filterKeywords.length > 0 && <HeaderKey keywords={filterKeywords}/>
            }
            
            <Jobs data={data} setKeywords = {addFilterKeywords}/>
            
        </Container>
    );
}
//Css implementation are done here
const Container = styled.div`
  background-color: black;
  .header{
    width: 100%;
    height: 5rem;
    background-image: url(../images/bg-header-desktop.svg);
    background-color: var(--primary-color);
  }
`;
