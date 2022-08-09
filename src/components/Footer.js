import React from 'react'
import styled from 'styled-components'
import ScrollUpButton from "react-scroll-up-button";
/*import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";*/
import { FaArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <Container>
    <UpButton>
        <p>Copyright @ 2022 YooGoo. All Rights Reserved</p>    
    </UpButton>

   <SocialIcons>
   	

   <ScrollUpButton>
   	<FaArrowAltCircleUp style={{color: 'white', margin: '0 20px '}} />
   	</ScrollUpButton>

   
 </SocialIcons>
  
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 100px;
    background: black;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;


`

const SocialIcons = styled.div`
    position: absolute;
    bottom: 10px;
    right: 20px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    font-size: 45px;

    @media only screen and (max-width: 1200px) {
      font-size: 40px;
      display: none;
    }
`

const UpButton = styled.div`
position: absolute;
bottom: 20px;
left: 20px;
font-size: 15px;
color: #c8c5b7;

`

export default Footer
