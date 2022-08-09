
import './App.css';
import {Helmet} from "react-helmet"
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';
import styled from 'styled-components'



function App() {
  return (
    <Container>

      <Helmet>
        <title>YooGoo P2E | Holders Earn NFTs Daily!</title>
        <meta 
        name='description'
        content='YooGoo is a supply of 3333 YooGoo and one of the most exciting upcoming Metaverse P2E game where only NFT holders can participate in the game. Each NFT is completely unique, hand-crafted from over 130 assets. Our unique YooGoos are built on top of the metaverse, with the future abilities to breed, battle, and earn daily, weekly, monthly for 1 year on Naturly world!'
         />
      </Helmet>

      
      {/* <HomeBot />
      <HomeScreneOne />
      <HomeScreneTwo /> */}
      <LayerOne />
      <LayerTwo />




    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  overflow: hidden;

`
export default App;
