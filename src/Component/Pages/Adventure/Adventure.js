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
            <p className="text-xs font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
        <div className="cardTwo">
          <div className="cardImage">
            <img src={image01} alt="" />
          </div>
          <div className="cardDetails">
            <h3 className="text-lg font-medium">Jenny Wilson</h3>
            <p className="text-xs font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
        <div className="cardThree">
          <div className="cardImage">
            <img src={image01} alt="" />
          </div>
          <div className="cardDetails">
            <h3 className="text-lg font-medium">Jenny Wilson</h3>
            <p className="text-xs font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
        </div>
      </div>
      <div className="mainRightSide">
        <h1>
          <span className="text-4xl font-semibold">Tropical Adventure</span> <br/>
          <span className="text-3xl">For Student</span>
        </h1>
        <p className="text-xl font-medium">
        Student Tropical Vacation: Relax and Recharge 
        </p>
        <p className="py-6 font-normal text-base">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer
          <br /> rutrum nisi. A nec nisl vitae
        </p>
        <button className="BannerButton">Explore More</button>
      </div>
    </div>
  );
};

export default Adventure;
