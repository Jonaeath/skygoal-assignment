import React from "react";
import "./Adventure.css";
import image01 from "../../../asset/Group 167.png";

const Adventure = () => {
  return (
    <div className="main">
      <div className="mainLeftSide">
        <div className="cardOne">
          <div className="cardImage">
            <img src={image01} alt="" />
          </div>
          <div className="cardDetails">
            <h3 className="text-lg font-medium">Jenny Wilson</h3>
            <p className="text-xs font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
          </div>
        </div>
        <div className="cardOne">
          <div className="cardImage">
            <img src={image01} alt="" />
          </div>
          <div className="cardDetails">
            <h3 className="text-lg font-medium">Jenny Wilson</h3>
            <p className="text-xs font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
          </div>
        </div>
        <div className="cardOne">
          <div className="cardImage">
            <img src={image01} alt="" />
          </div>
          <div className="cardDetails">
            <h3 className="text-lg font-medium">Jenny Wilson</h3>
            <p className="text-xs font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
          </div>
        </div>
      </div>
      <div className="mainRightSide">side</div>
    </div>
  );
};

export default Adventure;
