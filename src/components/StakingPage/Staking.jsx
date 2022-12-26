import React from "react";
import "./Staking.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import StakingNav from "./StakingNav";
import StakingCard from "./StakingCard";

function Staking() {
  return (
    <>
      <Header />
      <div className="imgPool">
        <ConnectBackBar backBtn={true} />
        <div className="container container-fluid">
          <div className="row d-flex justify-content-center justify-content-around">
            <StakingNav activeLink={1} />
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row">
                <div className="col-md-12 d-flex banner">
                  <div className="col-md-7 col-7 pt-4 pb-4 ps-md-4 banner__content">
                    <h4 className="pt-sm-4 pb-sm-2 text-start">
                      NFT Fighter Card Want?
                    </h4>
                    <p className="pt-1 mb-1">Need energy point to mint NFTs</p>
                    <p>Stake ROAD token to earn energy points now!</p>
                  </div>
                  <div className="col-md-5 col-5 pt-3 pb-3 justify-content-center banner__img">
                    <img src="./images/nft-fightercard.png" alt="nft-img" />
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-4 mb-4 mt-4 p-3 staking_card_container">
                <div className="col-lg-12 d-flex justify-content-evenly justify-content-center col-12">
                  <div className="row d-flex justify-content-evenly ">
                    <StakingCard
                      heading="$ROAD STAKING"
                      img="./images/road-staking.png"
                      label1="Wallet"
                      label2="Energy Point:"
                      label3="Staked:"
                      label4="Enter $ROAD:"
                      btn1Val="Stake"
                      btn2Val="Unstake"
                      btn3Val="Redeem"
                    />
                    <StakingCard
                      heading="$ROAD STAKING"
                      img="./images/road-staking.png"
                      label1="Wallet"
                      label2="Energy Point:"
                      label3="Staked:"
                      label4="Enter $ROAD:"
                      btn1Val="Stake"
                      btn2Val="Unstake"
                      btn3Val="Redeem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Staking;
