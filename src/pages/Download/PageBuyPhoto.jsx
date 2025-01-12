import React from "react";
import photo from "../../assets/img/1.jpg";
import { useNavigate } from "react-router-dom";

export default function PageBuyPhoto() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex items-center justify-between min-h-screen px-60">
        <button
          onClick={() => navigate(-1)}
          className="absolute items-center top-6 left-6 text-font bg-[#242424] px-4 py-3 rounded-full"
        >
          <i className="text-4xl bx bx-x"></i>
        </button>

        <div className="p-8 max-w-[400px] flex flex-col gap-8 rounded-[32px] h-max bg-[#1D1D1D]">
          <div className="flex items-center justify-between">
            <button className="text-font bg-[#242424] px-4 py-3 w-auto rounded-full">
              <i class="bx bx-dots-vertical-rounded text-base"></i>
            </button>
            <div className="flex gap-3">
              <button className="text-font bg-[#242424] px-6 py-3 rounded-full">
                Save
              </button>
              <button className="px-6 py-3 rounded-full text-[#242424] bg-[#e2e2e2]">
                Buy
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-font">
            <h2
              className="text-4xl font-bold"
            >
              50K
            </h2>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "'Open Sans', sans" }}
            >
              Bimasakti Galaxy
            </h2>
            <p className="font-light text-nav-menu">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, consectetur! Porro nesciunt corporis suscipit,
              omnis nulla, dolorem assumenda, maxime rerum magni velit quis
              cupiditate. Odio tempore iste natus aut ipsa.
            </p>
          </div>
        </div>
        <img src={photo} alt="" className="max-w-[400px]" />
      </div>
    </>
  );
}
