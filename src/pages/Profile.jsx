import React from "react";
import Navbar from "../components/Navbar/Navbar";
import imgsection3 from "../assets/img/imgsection3.png";
import Content from "../components/Content/Explore";

const Profile = () => {
  return (
    <div>
      <div>
        {/* Header Section */}
        <Navbar></Navbar>
        <div className="container flex flex-col items-center justify-center py-20 h-max">
          <img
            src={imgsection3}
            className="bg-black rounded-full min-h-20 max-w-20"
          ></img>
          <h1 className="text-5xl text-center text-font">aleks</h1>
          <p className="text-lg text-center text-nav-menu">@aleeekss</p>
        </div>
      </div>
      {/* End Header Secion */}
      {/* Saved Image Section */}
      <div id="saveimage" className="flex flex-col items-center gap-8 ">
        <h1 className="text-3xl font-normal text-font">Saved Image</h1>

        <Content />
      </div>
      :{/* End Saved Image Section */}
    </div>
  );
};

export default Profile;
