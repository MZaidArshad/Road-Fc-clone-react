import React, { useState, useRef } from "react";
import "./Mint.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import StakingNav from "../StakingPage/StakingNav";
import { ToastContainer, toast } from "react-toastify";

function Mint() {
  const [value, setValue] = useState(1);
  const [audioStatus, changeAudioStatus] = useState(false);
  let audio = new Audio("./Audios/Audio1.mp3");
  const myRef = useRef(audio);

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  const showToast = () => {
    toast.info("Not Connected");
  };
  return (
    <>
      <Header />
      <div className="imgPool">
        <ConnectBackBar backBtn={true} />
        <div className="container container-fluid">
          <div className="row d-flex justify-content-center justify-content-around">
            <StakingNav activeLink={2} />
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row d-flex justify-content-center mt-4 mb-5">
                <div className="col-lg-12 col-11 mint-container">
                  <img
                    src="./images/mint-section.png"
                    alt="headImg"
                    className="mint-section-img"
                  />
                  <div className="row">
                    <div className="col-11 ps-sm-5 text-end mt-3 mb-1">
                      <img
                        src="./images/audio.png"
                        alt="audio"
                        className={`audio-icon ${audioStatus ? "hide" : ""}`}
                        onClick={startAudio}
                      />
                      <img
                        src="./images/speaker.png"
                        alt="audio"
                        className={`audio-icon ${!audioStatus ? "hide" : ""}`}
                        onClick={pauseAudio}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-1 mb-2">
                    <div className="col-md-11 col-11 mint-boxs  pb-4 mb-5">
                      <div className="row d-flex justify-content-center m-3">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-3 mb-3">
                          <img
                            src="./images/mint-gif.gif"
                            alt="mint-gif"
                            id="mint-img"
                          />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                          <div className="col-md-10 col-12 mint-boxes d-flex justify-content-between mb-3 pt-2 pb-2">
                            <span className="mint-span ps-2">Your Energy:</span>
                            <span className="mint-span1">
                              0&nbsp;
                              <img src="./images/bolt.png" alt="bolt" />
                            </span>
                          </div>
                          <div className="col-md-10 col-12 mint-boxes d-flex justify-content-between mb-3 pt-2 pb-2">
                            <span className="mint-span ps-2">
                              Energy Spend:
                            </span>
                            <span className="mint-span1">
                              {value * 100000}&nbsp;
                              <img src="./images/bolt.png" alt="bolt" />
                            </span>
                          </div>
                          <div className=" d-flex justify-content-center justify-content-around align-items-center mt-4">
                            <span
                              className="btns dec_btn"
                              onClick={() => {
                                if (value > 1) {
                                  setValue(value - 1);
                                }
                              }}
                            >
                              <img src="./images/dec.png" alt="decBtn" />
                            </span>
                            <div className="boxess d-flex justify-content-center align-items-center">
                              {value}
                            </div>
                            <span
                              className="btns inc_btn"
                              onClick={() => {
                                setValue(value + 1);
                              }}
                            >
                              <img src="./images/inc.png" alt="decBtn" />
                            </span>
                          </div>
                          <div className=" d-flex justify-content-center align-items-center mt-lg-3 mt-3">
                            <button
                              className="btn mintbtn "
                              onClick={showToast}
                            >
                              MINT
                            </button>
                          </div>
                          <ToastContainer />
                          <span className="mintspan23 pt-lg-4 pt-3">
                            MAXIMUM OF 3 NFTs CARD PER tx
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-12 col-11 mint-Page-border mb-4 scroll-tab">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col" className="Mint-Time text-start">
                              Time
                            </th>
                            <th scope="col" className="Mint-Time">
                              Type
                            </th>
                            <th scope="col" className="Mint-Time">
                              Amount
                            </th>
                            <th scope="col" className="Mint-Time">
                              Status
                            </th>
                            <th scope="col" className="Mint-Time">
                              TX
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
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

export default Mint;
