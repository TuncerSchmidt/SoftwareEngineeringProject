import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

export default function Player(){
    const navigate = useNavigate();
     //This part is for navigation
    //Basically it plays an mp4 video
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={()=>navigate(-1)}/>
                </div>
                <video src={video} autoPlay loop controls muted></video>
            </div>
        </Container>
    )
}
//It is an area for css encoding

const Container = styled.div`
    .player{
        width: 100vw;
        height: 100vh;
        .back{
            position: absolute;
            padding: 2rem;
            z-index: 1;
            svg{
                font-size: 3rem;
                cursor: pointer;
            }
        }
        video{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`;
