import React from "react";
import "./Banner.css";
import image01 from "../../../asset/Group 171.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="BannerMain">
        <div className="bannerLeftSideBox">
          <p className="text-xl font-semibold">
            Discover the beauty of the tropics
          </p>
          <h1 className="text-7xl">
            <span className="font-bold">Tropical Destinations</span> <br/><span className="font-medium">For Student</span> 
          </h1>
          <p className="py-6 font-normal text-base">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer<br/> rutrum nisi. A nec nisl vitae
          </p>
          <button className="BannerButton">Course</button>
        </div>
        <div className="imeClass">
          <img src={image01} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
