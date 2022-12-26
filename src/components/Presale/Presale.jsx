import React, { useState } from "react";
import "./Presale.css";
import Header from "../UniverselComponents/Header";
import ConnectBackBar from "../UniverselComponents/Connect&BackBar";
import Footer from "../UniverselComponents/Footer";
import { ToastContainer, toast } from "react-toastify";

function Presale() {
  const [value, setValue] = useState();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const showToast = () => {
    toast.error("Connect Wallet");
  };
  return (
    <>
      <Header active={8} />
      <div className="imgPool">
        <div className="container">
          <ConnectBackBar backBtn={true} />
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-11  presale-box pb-4 mb-2">
              <div className="row">
                <div className="col-md-6 col-7 pt-2">
                  <p className="Presale-p pt-md-5 pt-3 ps-md-3 pb-md-3">
                    Pre-Sale is Live
                  </p>
                  <p className="presale-p1 ps-md-3 pb-md-3">Available Now</p>
                  <div className="d-flex justify-content-start align-items-md-center align-items-start  ps-md-3 pb-sm-3  prsale-cloumn">
                    <button className="btn presalebtn">ROAD Token</button>
                    <span> </span>
                    <span id="presale-span1" className="ps-sm-3 ps-2">
                      Price:$ 0.009
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-5 d-flex justify-content-end align-items-sm-end lign-items-center ">
                  <img
                    src="./images/presale-char.png"
                    className="presale-image"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center pb-5">
            <div className="col-md-12 col-11 presale-box1 pb-4 mb-2">
              <h4 className="pool-h4 pt-3">ROAD PRE-SALE POOL HAS STARTED</h4>
              <p className="pool-p2 pt-2">
                Stake $ROAD and get energy point for NFTs card
              </p>
              <div className="row d-flex justify-content-center justify-content-evenly mt-3">
                <div className="col-lg-5 col-md-7 col-11 pool-box3 mb-4 mt-4">
                  <h5 className="bool-h55 pt-sm-5 pt-3 fw-bold">PRE-SALE</h5>
                  <div className="row d-flex justify-content-center pt-4 pb-2">
                    <div className="col-11 text-start">
                      <form>
                        <label
                          className="form-label  fw-sm-bold"
                          style={{ color: "rgb(94, 96, 110)" }}
                        >
                          $BNB
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="0.00"
                          min="1"
                          onChange={handleInput}
                          value={value}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center pt-4 pb-2">
                    <div className="col-11 text-start">
                      <form>
                        <label
                          className="form-label fw-sm-bold"
                          style={{ color: "rgb(94, 96, 110)" }}
                        >
                          $Road
                        </label>
                        <input
                          disabled="true"
                          type="number"
                          className="form-control"
                          placeholder={
                            value === undefined
                              ? "0.00"
                              : `${value * 54055.555555555501}`
                          }
                          style={{ backgroundColor: "rgba(41, 44, 56, 0.16)" }}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11 text-end">
                      <span id="preale-Available">
                        Available: &nbsp;&nbsp;
                        <br />
                        <span className="dot-collision-bal"></span>
                      </span>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center pt-4 pb-2">
                    <div className="col-md-5 col-9">
                      <div className="d-grid gap-2">
                        <button
                          className="btn presalesbtn1"
                          onClick={showToast}
                        >
                          Buy ROAD
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center pt-5 pb-2 mb-3">
                    <div className="col-11 d-flex justify-content-between align-items-center">
                      <span className="presale-span">Progress</span>
                      <span className="presale-span1">Current Pool</span>
                    </div>
                    <div className="col-11 presale-b0x1 pt-4 pb-4 mt-2">
                      <div className="progress">
                        <div
                          role="progressbar"
                          className="progress-bar bg-YOU_PICK_A_NAME"
                          aria-valuenow="0.042027999999999996"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0.042%" }}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-between justify-content-center">
                        <span className="span-presale">
                          0.042027999999999996%
                        </span>
                        <span className="span-presale">200,000,000 $ROAD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-7 col-11 pool-box3 mt-4 mb-4">
                  <h5 className="bool-h55 pt-sm-5 pt-3 fw-bold">
                    PRE-SALE POOL
                  </h5>
                  <div className="row d-flex justify-content-center mt-4">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-2">
                      <div className="presale-span21">Total Supply</div>
                      <div className="presale-span22">
                        10,000,000,000 &nbsp;
                        <span className="presale-span1">ROAD</span>
                      </div>
                    </div>
                    <div className="col-11 mt-3">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Token for Presales</div>
                      <div className="presale-span22">
                        200,000,000 &nbsp;
                        <span className="presale-span1">ROAD</span>
                      </div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Price</div>
                      <div className="presale-span22">$ 0.009</div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Minimum Purchase</div>
                      <div className="presale-span22">0.1BNB </div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Max Purchase</div>
                      <div className="presale-span22">12BNB</div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Start time</div>
                      <div className="presale-span22">
                        15 Apr, 2022 UTC 21:00
                      </div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">End time</div>
                      <div className="presale-span22">
                        15 Apr, 2022 UTC 21:00
                      </div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Soft Cap</div>
                      <div className="presale-span22">2,000&nbsp; BNB</div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    <div className="col-11 d-flex justify-content-between align-items-center mt-1">
                      <div className="presale-span21">Hard Cap</div>
                      <div className="presale-span22">4,000&nbsp; BNB</div>
                    </div>
                    <div className="col-11 mt-2">
                      <p className="bdr"></p>
                    </div>
                  </div>
                  <h5 className="bool-h55 pt-3 fw-bold mb-3">
                    We accepted BNB
                  </h5>
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

export default Presale;
