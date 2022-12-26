import React from "react";
import "./Backbtn.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function Backbtn() {
  return (
    <div>
      <Link to="/" className="link">
        <span className="backbtn">
          <ArrowBackIcon className="backbtn__arrow" />
          Back
        </span>
      </Link>
    </div>
  );
}

export default Backbtn;
