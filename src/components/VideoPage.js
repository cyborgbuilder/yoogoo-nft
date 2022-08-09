import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function VideoPage() {
  return (
    <Container>
      <img src='./images/yoogoo.png' />

      <SocialIcons>
  
  <a href='https://discord.gg/XE77mMAzFk' target="_blank"><FaDiscord style={{color: 'rgb(206 178 102)', margin: '5px 0'}}/></a>
   <a href='https://twitter.com/YooGoo_Club' target="_blank"><FaTwitter style={{color: 'rgb(206 178 102)'}} /></a>
   <a href='https://t.me/yoogooclub' target="_blank"><FaTelegram style={{color: 'rgb(206 178 102)'}}/></a>
   <a href='https://www.instagram.com/yoogoo.club/' target="_blank">   <FaInstagram style={{color: 'rgb(206 178 102)'}}/></a>
   <a href='https://www.pinterest.com/yoogooclub/' target="_blank"><FaPinterest style={{color: 'rgb(206 178 102)'}}/></a>
   <a href='https://www.facebook.com/yoogoo.club' target="_blank"><FaFacebook style={{color: 'rgb(206 178 102)' }}/></a>
 </SocialIcons>

 <SnoopBot>
          <BotContent>
          <a href='https://discord.gg/SfRuS5p6' target="_blank"><p>Mint Your YooGoo Now</p></a>
          </BotContent>
        
          <BotImage>
          <a href='https://discord.gg/SfRuS5p6' target="_blank"><img src='./images/mint.jpg' /></a>
          </BotImage>

        </SnoopBot>



    </Container>


  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    z-index: 1000;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media only screen and (max-width: 1200px) {
      height: 70vh;
    }


    img{
      width: 50%;

      @media only screen and (max-width: 1200px) {
        width: 120%;
        height: 100%;
      }
    }

  

    

    


`

const SocialIcons = styled.div`
    position: fixed;
    top: 20%;
    right: 1%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    font-size: 45px;

    @media only screen and (max-width: 1200px) {
      font-size: 38px;
    }

    a{
      margin: 0;
      padding: 0;
    }

`
const SnoopBot = styled.div`
    width: 300px;
    height: 100px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 20px;
    right: 40px;

 
    a:hover{
      cursor: pointer;
      
    }
    a{
      text-decoration: none;
    }

 

`

const BotContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
p{
  color: white;
  font-size: 14px;
  background: rgb(206 178 102);
  padding: 14px;
  border-radius: 15px;
  
  &:hover{
        color: black;
        cursor: pointer;
        background: #c8c5b7;
      }
}

`

const BotImage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;


  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

`


export default VideoPage
