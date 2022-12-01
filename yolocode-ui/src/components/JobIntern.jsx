import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import styled from "styled-components";

const JobIntern = (props) =>{

    const{
        company,
        contract,
        featured,
        id,
        languages,
        level,
        location,
        logo,
        position,
        postedAt,
        role,
        tools,
    } = props.data;

    let keywords = [role, level, ...languages, ...tools];

    const[icon, setIcon] = useState("");

    const importSvgs =()=>{
        const logoSvg = import(`${logo}`).then((d)=>{
            
            setIcon(d.default);
        });
    }

    useEffect(()=>{
        importSvgs();
    }, [logo]);

    return (
    <Container>
    <div className="job-container">
        
        <div className="part1">

            <div className="company">
                <span className="cname">{company}</span>
                {props.data.new && <span className="new">new!</span>}
                {props.data.featured && <span className="featured">featured!</span>}
            </div>
            <div className="position">{position}</div>
            <div className="details">
                <span>{postedAt}</span>
                <span>&nbsp;•&nbsp;</span>
                <span>{contract}</span>
                <span>&nbsp;•&nbsp;</span>
                <span>{location}</span>
            </div>
        
        </div>
        <div className="logo">
            <img src={icon} alt = ""/>
        </div>
        
    </div>
    </Container>
    );
}

export default JobIntern;

const Container = styled.div`
    .job-container{
        width: 50vw;
	 background-color:green;
	 display: flex;
	 align-items: center;
	 padding: 1.5rem 2rem;
	 border-radius: 5px;
	 margin: 1.3rem 0;
     .logo{
        display:flex;
        align-items: center;
        padding-right: 1.5rem;
    }
    .part1 {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        .company{
            .cname{
                font-weight: 700;
                color: blue;
                margin-right: 0.8rem;
            }
            .new,
            .featured{
                color:#fff;
                background-color:green;
                border-radius: 1rem;
                padding: 0.4rem;
                font-size: 0.7rem;
                font-weight: 700;
                text-transform: uppercase;
            }
            .featured{
                background-color: #484848
            }

        }
        .position{
            font-weight: 700;
            font-size; 1.1rem;
            display: inline-block;
            padding: 0.7rem 0;
        }
        
        
   }
   .part2{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    span{
        &:not(:last-child){
            margin-right: 1rem;
        }
        background-color: grey;
        color: blue;
        font-weight: 700;
        padding: 0.5rem;
        border-radiusL 5px;
        cursor:pointer;
    }
}
    
        
        

        
    

`;