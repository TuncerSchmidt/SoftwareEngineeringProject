import React, {useState, useRef} from 'react';
import { Form } from 'react-router-dom';
import styled from 'styled-components';
import {db} from "../utils/firebase-config";
import {addDoc, collection} from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const MyStyles = styled.div`
    width:100%;
    .form-group{
        width: 100%;
        margin-bottom: 2rem;
    }
    label{
        font-size: 1rem;
    }
    input,
    textarea{
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: gray;
        background-color: white;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea{
        height: 250px;
        resize: vertical;
    }
    button[type='submit']{
        background-color: white ;
        color: black;
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem ;
        
        border-radius: 8px;
        cursor: pointer;
    }

`;


export default function ContactForm(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        alert("Message started");

        emailjs.sendForm('service_xma6hdt', 'template_xcp0j9i', form.current, '0yRzrzB49uR1yHHPW')
      .then((result) => {
          console.log(result.text);
          alert("Message has been submitted");
      }, (error) => {
          console.log(error.text);
          alert("Message has NOT been submitted");
      });
      e.target.reset();
      
    }

    const userCollectionRef = collection(db, "contactdata");

    const handleSubmit =(e)=>{
        e.preventDefault();
        

        addDoc(userCollectionRef,{
            name: name,
            email: email,
            message: message,
        }).then(()=>{
            //alert("Message has been submitted");
        }).catch((error)=>{
            alert(error.message);
        });
        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <div>
            <MyStyles>
            <form ref = {form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">
                        Your Name</label>
                        <input
                            type = "text"
                            
                            name="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Your Email</label>
                        <input
                            type = "text"
                            
                            email="email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Your Message</label>
                        <textarea
                            type = "text"
                            
                            message="message"
                            name="message"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                    
                </div>
                <button type="submit" onClick={handleSubmit} >Send</button>
                
            </form>
            
            </MyStyles>
        </div>
    )
}