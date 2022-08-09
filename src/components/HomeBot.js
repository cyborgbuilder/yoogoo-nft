import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function HomeBot() {
  return (
    <Container>
        <Fade top><img src='./images/animated_yoogoo.png' /></Fade>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; 
    top: 0;

    
    
    

    img{
       width: 65%;
       height: 100%;
       z-index: 1;


       @media only screen and (max-width: 1200px) {
         width: 200%;


       }
    }

 

`

export default HomeBot
