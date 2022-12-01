import React from "react";
import Job from "./Job";
import styled from "styled-components";

const Jobs = ({data, setkeywords}) =>{
    //console.log(data);
    return (
        <Container>
        <div className="jobs">
            {data.map((d)=>{
                return <Job data={d} setkeywords={setkeywords}/>;
            })}
        </div>
        </Container>
    );
};

export default Jobs;

const Container = styled.div`
    .jobs{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top: calc(2vw + 2rem);
    }

`;