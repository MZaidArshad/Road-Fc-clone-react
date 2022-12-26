import React from "react";
import "./CarouselLeftRight.css";

function CarouseLeftRight() {
  return (
    <div className="row d-flex flex-row justify-content-center justify-content-md-evenly mb-4 mt-4">
      <div
        className="col-1 d-flex align-items-center justify-content-center ps-md-1 ps-4"
        style={{ cursor: "pointer" }}
      >
        <img
          src="./images/btn-bg.png"
          alt="bg"
          style={{ position: "absolute" }}
        />
        <img
          src="./images/back.png"
          style={{ position: "relative" }}
          alt="backward"
        />
      </div>
      <div className="col-lg-3 col-md-5 col d-flex flex-row justify-content-center align-items-center justify-content-md-evenly">
        <span className="MyCollectionspan">Current</span>
        <div className="bosCollection">
          <span className="mycollectionsP "></span>
        </div>
        <span className="MyCollectionspan">/1</span>
      </div>
      <div
        className="col-1 d-flex align-items-center justify-content-center  pe-md-1 pe-4"
        style={{ cursor: "pointer" }}
      >
        <img
          src="./images/btn-bg.png"
          style={{ position: "absolute" }}
          alt="bg"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABxSURBVHgB3ZPBCYAwDEW/4F1H6AiO4Ahuok5gnMgV3MRR4i8I5qBIWi/64NMUmkcoBHhAVQOzMBNSYfOgJ2kiNtbM9oYofENUsOh5dvDRmlqiRJFJyYzOSSqmMfcZHi7+RDz9fxAcEskSmEnWuIh3b3Zhrc+7R1khzAAAAABJRU5ErkJggg=="
          style={{ position: "relative" }}
          alt="forward"
        />
      </div>
    </div>
  );
}

export default CarouseLeftRight;
