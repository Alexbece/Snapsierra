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
      <div className="flex flex-col items-center justify-center py-6 px-[90px]">
        <div className="flex justify-between items-center gap-4 w-auto py-2 px-4 rounded-xl text-nav-menu bg-[#3d3d3d]">
          <Link to="/" className="">
            <img
              src={logoDarkBG}
              alt=""
              className="transition-all ease-out max-h-12 hover:scale-125"
            />
          </Link>
          <li className="list-none transition-all ease-out text-md hover:text-font hover:text-lg">
            <a href="/Explore">Explore</a>
          </li>
          <div className="flex items-center gap-3 font-medium">
            <button className="py-2 border-2 border-[#e2e2e2] text-font px-7 rounded-2xl hover:text-xl transition-all ease-out">
              <a href="/Login">Login</a>
            </button>
            <button className="py-2  bg-[#e2e2e2] text-primary px-7 rounded-2xl hover:text-xl transition-all ease-out">
              <a href="/Sign Up">Sign Up</a>
            </button>
          </div>
        </div>

        {/* End Navbar Section */}

        {/* Hero Section */}
        <div className="container flex flex-col items-center justify-center h-[675px]">
          <h1
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            className="items-center font-bold text-center md:text-9xl text-font sm:text-6xl"
          >
            SNAP SIERRA
          </h1>
          <p className="md:text-2xl text-nav-menu sm:text-xl">
            Home for your inspirations.
          </p>
        </div>
        {/* End Hero Section */}

        {/* Section 2 */}
        <div
          className="container flex flex-col items-center justify-center h-screen gap-2"
          style={{
            backgroundImage: `url(${bgSection2})`,
          }}
        >
          <h1 className="items-center font-normal text-center text-7xl text-font">
            We keep things simple.
          </h1>
          <p className="font-light md:flex md:text-2xl text-nav-menu sm:text-lg sm:hidden">
            Help you succeed through your design.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex items-center justify-between md:w-full md:py-5 gap-auto px-[130px] h-[600px]">
          <img
            src={imgsection3}
            alt=""
            className="max-w-[450px] md:flex sm:hidden"
          />
          <div className="flex flex-col">
            <h2 className="text-[100px] text-font md:text-right">SnapSierra</h2>
            <p className="text-xl font-light text-nav-menu md:text-right sm:text-center">
              We are a platform that provides a curated collection of
              inspiration and resources, helping designers create with clarity
              and purpose. Inspiration made simple for designers.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="flex flex-col gap-16 py-20 m-10 text-center ">
          <h1 className="text-7xl text-font ">Our Team</h1>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20 "
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font "
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Salwa Kharisma Dinata
                </p>
                <p className="text-lg job-personil text-nav-menu ">
                  Project Manager
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20 "
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font "
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Revina Putri Arifiansyah
                </p>
                <p className="text-lg job-personil text-nav-menu ">
                  Quality Assurance
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20 "
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font "
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Farrel Yassar Kurniwan
                </p>
                <p className="text-lg job-personil text-nav-menu ">Front End</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20 "
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font "
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Najia Binazir
                </p>
                <p className="text-lg job-personil text-nav-menu ">
                  System Analyst
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={imgsection3}
                className="bg-black rounded-full min-h-20 max-w-20 "
              ></img>
              <div className="block text-center">
                <p
                  className="text-3xl nama-personil text-font "
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mochammad Fauzan Azzaki
                </p>
                <p className="text-lg job-personil text-nav-menu ">Back End</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="flex flex-col items-center justify-center h-screen gap-9">
          <h1 className="leading-normal text-center md:text-7xl text-font sm:text-4xl">
            Create your own experience <br />
            with <span className="text-nav-menu">SnapSierra</span>.
          </h1>
          <button className="md:py-4 w-max bg-[#e2e2e2] md:text-3xl sm:text-md font-bold text-primary px-7 rounded-full hover:bg-primary hover:text-font transition-all ease-out sm:py-2">
            <a href="/Sign Up">SIGN UP</a>
          </button>
        </div>
        {/* End Header Section */}
      </div>
    </>
  );
};

export default Home;
