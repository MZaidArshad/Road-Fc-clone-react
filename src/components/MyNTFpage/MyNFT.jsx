import React from "react";
import "./MyNFT.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import StakingNav from "../StakingPage/StakingNav";
import CarouseLeftRight from "../UniverselComponents/CarouseLeftRight";

function MyNFT() {
  return (
    <>
      <Header active={4} />
      <div className="imgPool">
        <ConnectBackBar backBtn={true} />
        <div className="container container-fluid">
          <div className="row d-flex justify-content-center justify-content-around">
            <StakingNav activeLink={6} />
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row d-flex justify-content-center mb-1">
                <div className="col-12">
                  <h4 className="nft-h4">MY NFTs</h4>
                  <p className="nft-p">
                    Total <span className="nft-span">(0)</span>
                  </p>
                </div>
                <CarouseLeftRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyNFT;
