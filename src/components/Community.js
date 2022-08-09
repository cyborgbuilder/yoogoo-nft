import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Community() {
  return (
    <Container>
        <h1>Join Our Community Now</h1>
        <p>YooGoo Just Want to Have Fun</p>
        <ButtonSection>
            <a href='https://discord.gg/XE77mMAzFk' target="_blank"><button><FaDiscord style={{fontSize: '25px', margin: '0 10px'}}/>Discord</button></a>
            <a href='https://twitter.com/YooGoo_Club' target="_blank"><button><FaTwitter style={{fontSize: '25px', margin: '0 10px'}}/>Twitter</button></a>
            <a href='https://t.me/yoogooclub' target="_blank"><button><FaTelegram style={{fontSize: '25px', margin: '0 10px'}}/>Telegram</button></a>
        </ButtonSection>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    // background-image: url("/images/community/community.jpg");
    background-image: linear-gradient(180deg, #0000004A -10%, #000000 120%), url('/images/community/community.jpg');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media only screen and (max-width: 1200px) {
        text-align: center;
      }

    h1{
        color: #c8c5b7;
        font-size: 70px;
        margin: 10px 0;

        @media only screen and (max-width: 1200px) {
            font-size: 50px;
          }
    }

    p{
        color: #c8c5b7;
        font-size: 25px;
        margin: 10px 0;

        @media only screen and (max-width: 1200px) {
            font-size: 19px;
          }
    }



`

const ButtonSection = styled.div`
    display: flex;
    margin-top: 50px;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }

    button{
        width: 200px;
        margin: 0 20px;
        border: none;
        outline: none;
        padding: 15px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background-color: rgb(206 178 102);
        color: white;
        
        &:hover{
        color: black;
        cursor: pointer;
        background: #c8c5b7;
      }

        @media only screen and (max-width: 1200px) {
            margin: 10px 0;
          }
        
    }

    a{
      text-decoration: none;
    }

`
export default Community
