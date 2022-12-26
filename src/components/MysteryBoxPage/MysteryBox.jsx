import React, { useRef, useState } from "react";
import "./MysteryBox.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import StakingNav from "../StakingPage/StakingNav";
import { ToastContainer, toast } from "react-toastify";

function MysteryBox() {
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
  const [value, setValue] = useState(1);
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
            <StakingNav activeLink={4} />
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row d-flex justify-content-center mt-4 mb-5">
                <div className="col-lg-12 col-11 breed-container">
                  <img
                    src="./images/mystery-section.png"
                    alt="headImg"
                    className="breed-section-img"
                  />
                  <div class="col-12 pe-4  text-end mb-3">
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
                  <div className="row d-flex justify-content-center justify-content-lg-around">
                    <div className="col-lg-7 col-11 mystrybox mb-3">
                      <div className="row d-flex justify-content-center align-items-center p-xl-5 pt-3 pb-3">
                        <div className="col-12">
                          <img src="./images/Mystery-box.png" alt="box" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 p-2 steryboxes">
                          <div className="row d-flex justify-content-center py-2 px-2">
                            <div className="col-xl-2 col-4  d-flex flex-row justify-content-md-center justify-content-start steryboxes__boxes">
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: "rgb(69, 174, 60)" }}
                                >
                                  <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <div>
                                <p className="stery-span ps-2 mb-0">25.0%</p>
                                <p className="stery-span1 ps-2 mb-0">Common</p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-4  d-flex flex-row justify-content-md-center justify-content-start steryboxes__boxes">
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: "rgb(174, 101, 60)" }}
                                >
                                  <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <div>
                                <p className="stery-span ps-2 mb-0">25.0%</p>
                                <p className="stery-span1 ps-2 mb-0">
                                  Uncommon
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-4  d-flex flex-row justify-content-md-center justify-content-start steryboxes__boxes">
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: "rgb(52, 137, 216)" }}
                                >
                                  <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <div>
                                <p className="stery-span ps-2 mb-0">27.0%</p>
                                <p className="stery-span1 ps-2 mb-0">Rare</p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-4  d-flex flex-row justify-content-md-center justify-content-start steryboxes__boxes">
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: "rgb(144, 60, 174)" }}
                                >
                                  <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <div>
                                <p className="stery-span ps-2 mb-0">13.8%</p>
                                <p className="stery-span1 ps-2 mb-0">Epic</p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-4  d-flex flex-row justify-content-md-center justify-content-start steryboxes__boxes">
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: "rgb(204, 62, 147)" }}
                                >
                                  <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <div>
                                <p className="stery-span ps-2 mb-0">7.4%</p>
                                <p className="stery-span1 ps-2 mb-0">
                                  Legendary
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-2 col-4  d-flex flex-row justify-content-md-center justify-content-start steryboxes__boxes">
                              <div>
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ color: "rgb(174, 142, 60)" }}
                                >
                                  <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                  </g>
                                </svg>
                              </div>
                              <div>
                                <p className="stery-span ps-2 mb-0">1.8%</p>
                                <p className="stery-span1 ps-2 mb-0">Mythic</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Right Box */}
                    <div className="col-lg-4 col-11 mystrybox mb-3">
                      <div className="row d-flex justify-content-center">
                        <div className="col-12 staking-col12-Box pb-2 pt-2">
                          <div className="row d-flex justify-content-center">
                            <div className="col-12 d-flex justify-content-between align-items-center mt-3 mb-3">
                              <span className="presale-span21">
                                Your Balance:
                              </span>
                              <span className="presale-span1">
                                0&nbsp;
                                <span className="presale-span1 span2">BNB</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mt-5">
                          <h3 className="mystery-h3">Mystery Box Amount</h3>
                        </div>
                        <div className=" d-flex justify-content-center justify-content-around align-items-center mt-2">
                          <span style={{ cursor: "pointer" }}>
                            <img
                              src="./images/dec.png"
                              alt="dec-btn"
                              onClick={() => {
                                if (value > 1) {
                                  setValue(value - 1);
                                }
                              }}
                            />
                          </span>
                          <div className="boxess d-flex justify-content-center align-items-center">
                            {value}
                          </div>
                          <span style={{ cursor: "pointer" }}>
                            <img
                              src="./images/inc.png"
                              alt="inc-btn"
                              onClick={() => {
                                if (value < 3) {
                                  setValue(value + 1);
                                }
                              }}
                            />
                          </span>
                        </div>
                        <div className="col-11 mint-boxes d-flex justify-content-between mt-4 mb-3 pt-3 pb-3">
                          <span className="mint-span ps-2">Total Cost:</span>
                          <span className="mint-span1">{value * 350} USD</span>
                        </div>
                        <span className="mystrybox-span1">
                          MAXIMUM OF 3 NFTs Box PER tx
                        </span>
                        <div className="col-xl-7 mt-4 mb-2">
                          <div className="d-grid gap-2">
                            <button
                              className="btn mystrybtn"
                              onClick={showToast}
                            >
                              Open Box
                            </button>
                            <ToastContainer />
                          </div>
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

export default MysteryBox;
