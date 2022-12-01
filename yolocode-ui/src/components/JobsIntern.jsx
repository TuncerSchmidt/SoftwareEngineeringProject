import React from "react";
import JobIntern from "./JobIntern";
import styled from "styled-components";

const JobsIntern = ({data, setkeywords}) =>{
    //console.log(data);
    return (
        <Container>
        <div className="jobs">
            {data.map((d)=>{
                return <JobIntern data={d} setkeywords={setkeywords}/>;
            })}
        </div>
        </Container>
    );
};

export default JobsIntern;

const Container = styled.div`
    .jobs{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top: calc(2vw + 2rem);
    }

`;