import React, { useEffect, useState } from 'react'
//I created index function
//It checks all users on api.github.com/users
//It waits for json response
const Index = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])
//Here I created all cardview 
    //It includes necessary information
    //At the end of each card there is a button to see more

    return (
      
            <div className="container">
               
                {
                    users.map((curElem) => {
                        return (

                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                    <img src={curElem.avatar_url} alt="" />
                                    <div className="userName">{curElem.login}</div>
                                    <div className="userUrl">{curElem.url}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>Articles</span>23</div>
                                        <div className="gitDetail"><span>Following</span>45</div>
                                        <div className="gitDetail"><span>Followers</span>11</div>
                                    </div>
                                    <button className="seeMore">See More</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default Index;
