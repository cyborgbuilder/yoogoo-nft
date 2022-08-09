import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
       <Wrap>
       <Left>
       <h2>What's YooGoo....</h2>
       	<br></br>
       </Left>
       <Right>
       	<h1>YooGoo is a supply of <span>3333</span> "YooGoo" and one of the most exciting upcoming Metaverse <span>P2E</span> game where only NFT holders can participate in the game.</h1> 
       	<br></br>
       	<br></br>
       	<h1>Each NFT is completely unique, hand-crafted from over 130 assets.</h1>
       	<br></br>
       	<br></br>
       	<h1>Our unique YooGoo's are built on top of the metaverse, with the future abilities to breed, battle, and <span>earn daily, weekly, monthly</span> for 1 year on Naturly world! </h1>
       	<br></br>
       	<br></br>
       	<br></br>
       </Right>
       <Left>
            <h2>Story!</h2>
            <br></br>
        </Left>
        <Right>
            <h1>In the future, blockchain robots fight for save the last Ethereum nodes.</h1>
            <br></br>
            <br></br>
            <h1><span>YooGoo is the only one who live for this war!</span></h1>
            <br></br>
            <br></br>
            <br></br>
            <h2>ARE YOU READY?</h2>
        </Right>
       </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;

`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 50px 0;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        text-align: left;
        flex-direction: column;
        padding: 0;
        padding: 30px;
        padding-bottom: 50px;
      }

`

const Left = styled.div`
    width: 40%;
    padding-top: 20px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin-bottom: 5px;
      }

    h2{
        color: rgb(206 178 102);
        font-size: 30px;

        @media only screen and (max-width: 1200px) {
          font-size: 20px;
        }
    }


`

const Right = styled.div`
    width: 100%;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

    h1{
        color: #c8c5b7;
        font-size: 36px;
        font-weight: 300;

        @media only screen and (max-width: 1200px) {
            font-size: 16px;
          }
    }
    h2{
        color: #c8c5b7;
        font-size: 48px;

        @media only screen and (max-width: 1200px) {
            font-size: 32px;
          }
    }

    span{
        color: rgb(206 178 102);
        
    }

`

export default Detail
