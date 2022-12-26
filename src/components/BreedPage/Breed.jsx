import React, { useState, useRef } from "react";
import "./Breed.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import StakingNav from "../StakingPage/StakingNav";
import { ToastContainer, toast } from "react-toastify";

function Breed() {
  const [audioStatus, changeAudioStatus] = useState(false);
  let audio = new Audio("./Audios/Audio2.mp3");
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
    toast.info("Please Connect Wallet");
  };
  return (
    <>
      <Header />
      <div className="imgPool">
        <ConnectBackBar backBtn={true} />
        <div className="container container-fluid">
          <div className="row d-flex justify-content-center justify-content-around">
            <StakingNav activeLink={3} />
            <div className="col-lg-8 col-11 mb-md-1 mb-4 mt-4">
              <div className="row d-flex justify-content-center mt-4 mb-5">
                <div className="col-lg-12 col-11 breed-container">
                  <img
                    src="./images/breed-section.png"
                    alt="headImg"
                    className="breed-section-img"
                  />
                  <div className="row d-flex mt-4 justify-content-lg-start justify-content-center">
                    <div className="col-lg-7">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-12 col-11 Breed-box p-3 ms-2">
                          <span>
                            Select two Trainer Fighters who will perform the
                            breed to make more powerful fighter.
                          </span>
                        </div>
                      </div>
                      {/* Breed Boxes */}
                      <div className="row d-flex justify-content-center">
                        <div className="col-6  mb-lg-1 mb-5">
                          <p className="breedtext1 mt-3">Trainer</p>
                          {/* Box1 */}
                          <div className="BreedBoxs">
                            <div className="d-flex flex-column justify-content-center align-items-center pt-sm-5 pt-4 pb-sm-5 pb-4">
                              <img src="./images/add.png" alt="plus" />
                            </div>
                            <div className="BreedminiBox p-2">Trainer 1</div>
                            <div className="Breedtext pt-sm-4 pt-3 pb-sm-4 pb-3"></div>
                          </div>
                        </div>
                        {/* Box 2 */}
                        <div className="col-6  mb-lg-1 mb-5">
                          <p className="breedtext1 mt-3">Trainer</p>
                          <div className="BreedBoxs">
                            <div className="d-flex flex-column justify-content-center align-items-center pt-sm-5 pt-4 pb-sm-5 pb-4">
                              <img src="./images/add.png" alt="plus" />
                            </div>
                            <div className="BreedminiBox p-2">Trainer 2</div>
                            <div className="Breedtext pt-sm-4 pt-3 pb-sm-4 pb-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center justify-conten-around mt-sm-3 ">
                        <div className="col-md-7 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  ">
                          <span className="breed-psans">Available:</span>
                          <span className="bredd-span">0 BNB</span>
                        </div>
                        <div className="col-md-7 col-11 d-flex justify-content-between boxes-breed pt-3 pb-3  mt-3">
                          <span className="breed-psans">Breed Cost:</span>
                          <span className="bredd-span">200 USD</span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-5 col-md-7 col-10 mt-sm-3 mt-3 mb-5">
                          <div className="d-grid gap-2">
                            <button
                              className="btn breed-btn mt-3"
                              onClick={showToast}
                            >
                              Breed
                            </button>
                            <ToastContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-10 breed-box11 mb-3">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-11 col-11 breedboxs12">
                          <div className="row">
                            <div className="col-12 d-flex flex-row mt-3">
                              <div className="ms-3">
                                <img
                                  src="./images/audio.png"
                                  alt="audio"
                                  className={`audio-icon ${
                                    audioStatus ? "hide" : ""
                                  }`}
                                  onClick={startAudio}
                                />
                                <img
                                  src="./images/speaker.png"
                                  alt="audio"
                                  className={`audio-icon ${
                                    !audioStatus ? "hide" : ""
                                  }`}
                                  onClick={pauseAudio}
                                />
                              </div>
                              <div className="text-center offset-lg-1">
                                <span className="breedtext1">
                                  MY COLLECTION
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="breedboxs123 mt-2 p-2" id="style-1">
                            <div className="breedboxs124"></div>
                          </div>
                        </div>
                      </div>
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

export default Breed;
