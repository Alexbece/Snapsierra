import React from "react";
import logoDarkBG from "../assets/logo/logo-dark-background.svg";
import bgSection2 from "../assets/img/bg-home-1.png";
import imgsection3 from "../assets/img/imgsection3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      {/* Navbar Section */}
      <div className=" px-[90px] py-6 flex flex-col items-center justify-center">
        <div className="flex justify-between items-center gap-4 w-auto py-2 px-4 rounded-xl text-nav-menu bg-[#3d3d3d]">
          <Link to="/">
            <img src={logoDarkBG} alt="" className="max-h-12" />
          </Link>
          <ul className="flex gap-5 text-md">
            <li>
              <a href="/Explore">Explore</a>
            </li>
          </ul>
          <div className="flex items-center gap-3 font-medium">
            <button className="py-2 border-2 border-[#e2e2e2] text-font px-7 rounded-2xl">
              <a href="/Login">Login</a>
            </button>
            <button className="py-2  bg-[#e2e2e2] text-primary px-7 rounded-2xl">
              <a href="/Sign Up">Sign Up</a>
            </button>
          </div>
        </div>

        {/* End Navbar Section */}

        {/* Hero Section */}
        <div className="container flex flex-col items-center justify-center h-[675px]">
          <h1
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            className="items-center font-bold text-center text-9xl text-font"
          >
            SNAP SIERRA
          </h1>
          <p className="text-2xl text-nav-menu">Home for your inspirations.</p>
        </div>
        {/* End Hero Section */}

        {/* Section 2 */}
        <div
          className="container flex flex-col items-center justify-center gap-2 h-[900px]"
          style={{ backgroundImage: `url(${bgSection2})` }}
        >
          <h1 className="items-center text-5xl font-normal center text-font">
            We keep things simple.
          </h1>
          <p className="text-lg font-light text-nav-menu">
            Help you succeed through your design.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex items-center justify-between w-full py-5 gap-auto px-[130px]">
          <img src={imgsection3} alt="" className="max-w-[450px]" />
          <div className="flex flex-col">
            <h2 className="text-right text-[100px] text-font">SnapSierra</h2>
            <p className="text-xl font-light text-right text-nav-menu">
              We are a platform that provides a curated collection of <br />
              inspiration and resources, helping designers create with clarity
              <br /> and purpose. Inspiration made simple for designers.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="flex flex-col gap-16 py-20 m-10 text-center">
          <h1 className="text-7xl text-font">Our Team</h1>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="flex flex-col items-center justify-center gap-2 ">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20"
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Salwa Kharisma Dinata
                </p>
                <p className="text-lg job-personil text-nav-menu">
                  Project Manager
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20"
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Revina Putri Arifiansyah
                </p>
                <p className="text-lg job-personil text-nav-menu">
                  Quality Assurance
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20"
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Farrel Yassar Kurniwan
                </p>
                <p className="text-lg job-personil text-nav-menu">Front End</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20"
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Najia Binazir
                </p>
                <p className="text-lg job-personil text-nav-menu">
                  System Analyst
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20"
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mochammad Fauzan Azzaki
                </p>
                <p className="text-lg job-personil text-nav-menu">Back End</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="flex flex-col items-center justify-center h-screen gap-9">
          <h1 className="leading-normal text-center text-7xl text-font">
            Create your own experience <br />
            with <span className="text-nav-menu">SnapSierra</span>.
          </h1>
          <button className="py-4 w-max bg-[#e2e2e2] text-3xl font-bold text-primary px-7 rounded-full">
            <a href="/Sign Up">
            SIGN UP
            </a>
          </button>
        </div>
        {/* End Header Section */}
      </div>
    </>
  );
};

export default Home;
