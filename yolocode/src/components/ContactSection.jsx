import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItems';
import styled from 'styled-components';
//import SectionTitle from './SectionTitle';

//Here I added styled div
//I created css designs here
const ContactSectionStyle = styled.div`
    .contactSection__wrapper{
        display: flex;
        gap: 5rem;
        margin-top: 0rem;
        margin-bottom: 2rem;
        justify-content: center;
        position: relative;
    }
    
`;
//I created Contact Section method here
//Inside it wrote phone number, email, address
//Next to them there are icons
export default function ContactSection(){
    return (
        <ContactSectionStyle>
            <div className="container">
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem icon={<MdLocalPhone/>} text="4054059493"/>
                        <ContactInfoItem icon ={<MdEmail/>} text="ou@gmail.com"/>
                        <ContactInfoItem text="Oklahoma City, Oklahoma"/>
                    </div>
                    <div className="right">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </ContactSectionStyle>
    )
}
