import React from 'react'
import styled from 'styled-components'
function HomeScreneTwo() {
  return (
    <Container>
        <TextSection>
        	<h1>3333<br></br></h1> 
		<h3>Of NFTs Now Minting <br></br></h3>
		<h4>A Digital NFT Collecting Game,<br></br>Built on Ethereum Blockchain For The <br></br>YooGoo Holders.</h4>

        </TextSection>
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


    


`

const TextSection = styled.div`
z-index: 1;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
  font-size: 130px;
  color: #c8c5b7;
  text-decoration: underline;
  text-align: center;
 

  @media only screen and (max-width: 1200px) {
    font-size: 66px;
  }
}
h3{
  font-size: 100px;
  color: #c8c5b7;
  text-align: center;
  

  @media only screen and (max-width: 1200px) {
    font-size: 51px;
  }
}
h4{
  font-size: 30px;
  color: #c8c5b7;
  text-align: center;
 


  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }
}

button{
  border: none;
  outline: none;
  width: 250px;
  padding: 14px;
  margin: 30px 0;
  background: rgba(234, 240, 246, 0.3);
  color: white;

  &:hover{
    cursor: pointer;
    color: black;
  }
}



`
export default HomeScreneTwo
