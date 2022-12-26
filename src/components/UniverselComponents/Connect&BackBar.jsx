import React from "react";
import "./Connect&BackBar.css";
import Backbtn from "../Backbtn";

function ConnectBackBar(props) {
  return (
    <div
      className={`container connectBar d-flex justify-content-${
        props.backBtn ? "between" : "end"
      } pt-5 pb-3`}
    >
      {props.backBtn && <Backbtn />}
      <button className="btn connBtn">Connect</button>
    </div>
  );
}

export default ConnectBackBar;
