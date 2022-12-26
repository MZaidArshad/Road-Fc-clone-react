import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <div className="poolCard col-lg-3 col-md-5 col-10 pt-4 m-2 text-center">
      <img src={props.img} alt="iconImg" />
      <h5 className="poolCard__heading pt-4">{props.title}</h5>
      <div className="d-flex justify-content-center">
        <div className="col-10 poolCard__p_container">
          <p className="poolCard__p pt-2">{props.disc}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-3 pt-2">
        <div className="col-10">
          <Link to={props.linkTo}>
            <button className="btn poolCard__btn">{props.btnText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
