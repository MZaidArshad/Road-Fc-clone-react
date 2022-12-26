import React from "react";
import "./NFTstaking.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import StakingNav from "../StakingPage/StakingNav";
import { ToastContainer, toast } from "react-toastify";
import CarouseLeftRight from "../UniverselComponents/CarouseLeftRight";

function NFTstaking() {
  const showToast = () => {
    toast.info("Please Connect Wallet");
  };
  return (
    <>
      <Header />
      <div className="imgPool">
        <ConnectBackBar backBtn={true} />
        <div className="container container-fluid">
          <div className="row d-flex justify-content-center justify-content-around">
            <StakingNav activeLink={5} />
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row d-flex justify-content-center mt-4 mb-5">
                <div className="col-lg-12 col-11 breed-container">
                  <img
                    src="./images/mystery-section.png"
                    alt="headImg"
                    className="breed-section-img"
                  />
                  <div className="row">
                    <div className="col-12">
                      <span className="staking-span">
                        With NFTs card Stake and get your reward with $ROAD
                        token!
                      </span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-md-3 mt-4 mb-4 ms-lg-1">
                    <div className="col-lg-4 col-11 NFTstaking-boxes">
                      <div className="row d-flex justify-content-center">
                        <div className="col-12 NFTstaking-boxes1">
                          <p className="nftstaking-p">My Total Rewards:</p>
                          <p className="nftstaking-p1">0</p>
                        </div>
                        <div className="col-11 boxs-staking d-flex justify-content-between align-items-center mt-3">
                          <span className="nftstaking-span2">
                            Pool Remaining Rewards:
                          </span>
                          <span className="nftstaking-span3">743,016,041</span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center justify-content-around">
                        <div className="col-5  boxs-staking d-flex flex-column mt-3 text-start">
                          <span className="nft-staking-p pb-2">0</span>
                          <span className="nft-staking-p1">
                            Total Mining Power
                          </span>
                        </div>
                        <div className="col-5 boxs-staking d-flex flex-column mt-3">
                          <span className="nft-staking-p pb-2">0</span>
                          <span className="nft-staking-p1">My Hash Power</span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center justify-content-around">
                        <div className="col-5 boxs-staking d-flex flex-column mt-3">
                          <span className="nft-staking-p pb-2">0</span>
                          <span className="nft-staking-p1">
                            Total Staked NFTs
                          </span>
                        </div>
                        <div className="col-5 boxs-staking d-flex flex-column mt-3 text-center">
                          <span className="nft-staking-p pb-2">0</span>
                          <span className="nft-staking-p1">My Staked NFTs</span>
                        </div>
                      </div>
                      <div className=" d-flex justify-content-center mt-5">
                        <div className="col-md-10">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-unstake21"
                              onClick={showToast}
                            >
                              Claim
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" d-flex justify-content-center mt-4">
                        <div className="col-md-10">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-unstake22"
                              onClick={showToast}
                            >
                              UnStake All
                            </button>
                          </div>
                        </div>
                        <ToastContainer />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row d-flex justify-content-md-start justify-content-center flex-wrap  mt-md-0 mt-3">
                        <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                          <div>
                            <img
                              src="./images/nft-staking1.png"
                              className="nftstaking-img mt-2"
                              alt="nft"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                          <div>
                            <img
                              src="./images/nft-staking2.png"
                              className="nftstaking-img mt-2"
                              alt="nft"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                          <div>
                            <img
                              src="./images/nft-staking3.png"
                              className="nftstaking-img mt-2"
                              alt="nft"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                          <div>
                            <img
                              src="./images/nft-staking4.png"
                              className="nftstaking-img mt-2"
                              alt="nft"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                          <div>
                            <img
                              src="./images/nft-staking5.png"
                              className="nftstaking-img mt-2"
                              alt="nft"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 nft-staking-b0xxs m-1 p-2 mt-2">
                          <div>
                            <img
                              src="./images/nft-staking6.png"
                              className="nftstaking-img mt-2"
                              alt="nft"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <CarouseLeftRight />
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

export default NFTstaking;
