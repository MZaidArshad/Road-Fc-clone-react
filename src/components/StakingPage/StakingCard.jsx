import React from "react";
import "./StakingCard.css";
import InfoIcon from "@mui/icons-material/Info";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StakingCard({
  heading,
  img,
  label1,
  label2,
  label3,
  label4,
  btn1Val,
  btn2Val,
  btn3Val,
}) {
  const showToast = () => {
    toast.error("Not Connected");
  };

  return (
    <div className=" col-lg-5 col-md-10 col-xm-12 col-11 px-0 mt-3 staking__card">
      <div className="col-12 py-2 d-flex justify-content-center staking__card__heading">
        <div className="col-10 staking__card__heading_text">{heading}</div>
        <div className="staking__card__heading_icon">
          <InfoIcon />
        </div>
        <div className="toolTipImg">
          <img src="./images/tooltip1.png" alt="tooltip" />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11 px-3 mt-4 d-flex justify-content-center align-items-center">
          <img src={img} alt="card-img" />
        </div>
      </div>
      <div className="row d-flex px-3 justify-content-center">
        <div className="col-11 mt-5 mb-3 p-3 d-flex justify-content-between staking__card__valuesField">
          <span className="label">{label1}</span>
          <span className="value">0</span>
        </div>
        <div className="col-11 mt-1 mb-3 p-3 d-flex justify-content-between staking__card__valuesField">
          <span className="label">{label2}</span>
          <span className="value">0</span>
        </div>
        <div className="col-11 mt-1 mb-3 p-3 d-flex justify-content-between staking__card__valuesField">
          <span className="label">{label3}</span>
          <span className="value">0</span>
        </div>
        <div className="col-11 mt-1 mb-3 p-3 d-flex justify-content-between align-items-center staking__card__valuesField">
          <span className="label">{label4}</span>
          <span className="value">
            <input
              type="number"
              placeholder="0"
              className="form-control py-2"
            />
          </span>
        </div>
        <div className="col-md-11 d-flex mb-2 justify-content-between staking__card__btns">
          <div className="col-5">
            <button className="btn staking__card__btn" onClick={showToast}>
              {btn1Val}
            </button>
          </div>
          <div className="col-5">
            <button className="btn staking__card__btn" onClick={showToast}>
              {btn2Val}
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 btn staking__card__Redeem">
            <button
              className="btn staking__card__RedeemBtn"
              onClick={showToast}
            >
              {btn3Val}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakingCard;
