import React from 'react';
import {MdPlace} from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
    padding: 2rem;
    background-color: gray;
    display : flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon{
        color: white;
        background-color: white;
        padding: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }
    svg{
        width: 3rem;
        color: black;
        resize: 20px;
    }
`;
// Here I am using MdPlace inside the contact info item
//Basically I added necessary name, email, location on the left side
export default function ContactInfoItem({
    icon = <MdPlace/>,
    text= 'this is an info',
}){
     //Here it is for html tags
    return (
        <ItemStyles>
            <div className="icon">{icon}</div>
            <div className="info">
               {text}
            </div>
        </ItemStyles>
    )
}
