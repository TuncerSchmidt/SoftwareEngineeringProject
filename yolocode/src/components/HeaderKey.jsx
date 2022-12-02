import React from "react";
//I created header by using map
//Basically I created many headers by looping
const HeaderKey = ({keywords}) => {
    return (
        <div className="header-container">
            {keywords.map((key, id) =>{
                return <button key={id}>{key}</button>
            })}
        </div>
    );
};

export default HeaderKey;
