import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function HomeScreneOne() {
  return (
    <Container>
        <TextSection>
        <h1>YOOGOO</h1>
        </TextSection>
        {/* <SocialIcons>
        <FaDiscord style={{color: 'white', margin: '5px 0'}}/>
          <FaTwitter style={{color: 'white', margin: '5px 0'}} />
          <FaTelegram style={{color: 'white', margin: '5px 0'}}/>
          <FaInstagram style={{color: 'white', margin: '5px 0'}}/>
          <FaPinterest style={{color: 'white', margin: '5px 0'}}/>         
          <FaFacebook style={{color: 'white', margin: '5px 0'}}/>
        </SocialIcons> */}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

   
    


`
const TextSection = styled.div`

h1{
  font-size: 250px;
  color: #c8c5b7;
  

  @media only screen and (max-width: 1200px) {
    font-size: 80px;

  }

}

@media only screen and (max-width: 1200px) {
  z-index: 1;
}
`
const SocialIcons = styled.div`
    position: fixed;
    top: 30%;
    right: 1%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    font-size: 45px;

    @media only screen and (max-width: 1200px) {
      font-size: 30px;
    }
`

export default HomeScreneOne
