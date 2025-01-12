import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Photo() {
  return (
    <div>
      <Navbar />
      <div className="container flex items-center justify-center bg-primary min-h-[400px]">
        <h1 className="text-center text-[55px] text-font">Category 'Photo'</h1>
      </div>

      <div className="flex flex-col items-center w-full gap-16 mb-8">
        <p className="font-serif text-2xl font-light text-center text-nav-menu">
          The more inspiration has yet to be found.
        </p>
      </div>
      
      <Footer></Footer>
    </div>
  );
}
