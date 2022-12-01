import React from "react";
import background from "../assets/yolocodemain.png"
import styled from "styled-components";

export default function BackgroundImage(){
    return (
    <Container className="flex a-center j-between">
        <img src= {background} alt = "background"/>;
    </Container>
    )
}
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img{
        height: 100vh;
        width: 100vw;
    }
`;