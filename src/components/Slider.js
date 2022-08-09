import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
function Slider() {
  return (
    <Container>
        <Wrap>
            <ContainBox>
                <h2>WHO ARE WE?</h2>
                <h1>THE TEAM</h1>
            </ContainBox>

            <SliderBox>
            <Swiper
        //  pagination={{
        //    type: "progressbar",
        //  }}
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/images/team/Founder & CEO.jpg' />
            <h2>YooGoo #0</h2>
            <p>Founder & CEO</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Project Leader.jpg' />
        	<h2>YooGoo #1</h2>
        	<p>Project Leader</p>    
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Artist1.jpg' />
        	<h2>YooGoo #2</h2>
        	<p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Artist2.jpg' />
        	<h2>YooGoo #3</h2>
        	<p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Blockchain Developer.jpg' />
        	<h2>YooGoo #4</h2>
        	<p>Blockchain Developer</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Game Developer.jpg' />
        	<h2>YooGoo #5</h2>
        	<p>Game Developer</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Community.jpg' />
        	<h2>YooGoo #6</h2>
        	<p>Community</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/team/Marketing.jpg' />
        	<h2>YooGoo #7</h2>
        	<p>Marketing</p>
        </SwiperSlide>
        
      </Swiper>
            </SliderBox>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: black;



`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }



`

const ContainBox = styled.div`
    width: 35%;
    color: #c8c5b7;
    

    @media only screen and (max-width: 1200px) {
        text-align: center;
        width: 100%;
      }

    h1{
        font-size: 70px;

        @media only screen and (max-width: 1200px) {
          font-size: 60px;
        }
    }
    h2{
        color: rgb(206 178 102);

        @media only screen and (max-width: 1200px) {
          font-size: 16px;
        }
    }

`

const SliderBox = styled.div`
    width: 60%;
    height: 70vh;
    border-radius: 15px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

`
export default Slider
