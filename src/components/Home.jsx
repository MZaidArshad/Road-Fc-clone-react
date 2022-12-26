import React from "react";
import Header from "./UniverselComponents/Header";
import ConnectBackBar from "./UniverselComponents/Connect&BackBar";
import Card from "./Card";
import "./Home.css";
import Footer from "./UniverselComponents/Footer";

function Home() {
  return (
    <>
      <Header active={1} />
      <div className="imgPool">
        <div className="container">
          <ConnectBackBar backBtn={false} />
          <div className="row d-flex justify-content-center justify-content-around pt-4 pb-4">
            <Card
              img="./images/trending.png"
              title="Staking & Point"
              disc="Welcome to the Road pool.Here you are able to benefit from staking tokens and receiving"
              btnText="Enter"
              linkTo="/Staking"
            />
            <Card
              img="./images/mint.png"
              title="Mint"
              disc="With uncertainity, comes excitement, You never know what you are going to get.Try your luck!"
              btnText="Mint"
              linkTo="/Mint"
            />
            <Card
              img="./images/breed.png"
              title="Breed"
              disc="Select two fighters who will perform the breed to get higher level card in exchange."
              btnText="Enter"
              linkTo="/Breed"
            />
            <Card
              img="./images/gift-box.png"
              title="Mystery Box"
              disc="Limited Mystery boxes waiting to be unboxed! What fighter will you get ?"
              btnText="Mint"
              linkTo="/MysteryBox"
            />
            <Card
              img="./images/nft.png"
              title="NFT Staking"
              disc=<span>
                Browse your <br />
                personal Staking of <br /> NFTs
              </span>
              btnText="Enter"
              linkTo="/NFTstaking"
            />
            <Card
              img="./images/breed.png"
              title="NFT Market"
              disc=<span>
                Buy and Sell
                <br />
                large collection of
                <br />
                NFTs
              </span>
              btnText="Show Market"
              linkTo="/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
