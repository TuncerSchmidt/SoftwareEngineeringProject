import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth} from "../utils/firebase-config";

export default function Signup(){
    //It is for signup page
    //Creating showPassword and setShowPassword variables
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
//We also created formvalues and setFormValues
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
//It is for signing in
    const handleSignIn = async() =>{
        //console.log(formValues);
        try{
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);

        }catch(err){
          alert("Hello It is nice to see you again. It looks like you have an account. Please try to log in");
            console.log(err);
        }
    }
//It is for signin Authentication
    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser) navigate("/");
    });
//Here we have necessary html tags and written statements
    return( 
    <Container showPassword = {showPassword}>
        <BackgroundImage/>
        <div className="content">
            <Header login />
           <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1> YOLOCODE</h1>
                <h1> Find jobs anywhere</h1>
                <h4> Work from anywhere, Get chance easily</h4>
                <h6>
                    Ready to get it? Enter your email to create or restart membership
                </h6>
             </div>
             <div className="form">
                <input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues, [e.target.name]:e.target.value})}/>
                {
                    showPassword && (
                        <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues, [e.target.name]:e.target.value})}/>
                    )
                }
                
                {
                    !showPassword && <button onClick={()=> setShowPassword(true)}> Get Started </button>
                }
             </div>
             <button onClick={handleSignIn}> Sign Up </button>
            </div>
        </div>
    </Container>
    
    );
}
//Here it is for css
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        
        h1 {
          padding: 0 25rem;
          color: white;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({showPassword}) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          border-radius: 0.5rem;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.5rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

