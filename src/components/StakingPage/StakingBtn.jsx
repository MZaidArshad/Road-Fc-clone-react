import React from "react";
import { Link } from "react-router-dom";
import "./StakingBtn.css";

function StakingBtn(props) {
  return (
    <div className="d-flex justify-content-center">
      <Link to={props.link} className="staking_link col-10">
        <button
          className={`btn staking__btn ${
            props.active ? "active-stake" : ""
          } text-start d-flex align-items-center mt-2 mb-2 px-4 py-2 w-100`}
        >
          <img className="btnImg" src={props.icon} alt="icon" />
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default StakingBtn;
