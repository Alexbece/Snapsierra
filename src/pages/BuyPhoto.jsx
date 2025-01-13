import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const BuyPhoto = () => {
  const images = [
    "/src/assets/img/Photo/1.jpg",
    "/src/assets/img/Photo/2.jpg",
    "/src/assets/img/Photo/3.jpg",
    "/src/assets/img/Photo/4.jpg",
    "/src/assets/img/Photo/5.jpg",
    "/src/assets/img/Photo/6.jpg",
    "/src/assets/img/Photo/7.jpg",
    "/src/assets/img/Photo/8.jpg",
    "/src/assets/img/Photo/9.jpg",
    "/src/assets/img/Photo/10.jpg",
    "/src/assets/img/Photo/11.jpg",
    "/src/assets/img/Photo/12.jpg",
    "/src/assets/img/Photo/13.jpg",
    "/src/assets/img/Photo/14.jpg",
    "/src/assets/img/Photo/15.jpg",
    "/src/assets/img/Photo/16.jpg",
    "/src/assets/img/Photo/17.jpg",
    "/src/assets/img/Photo/18.jpg",
    "/src/assets/img/Photo/19.jpg",
    "/src/assets/img/Photo/20.jpg",
    "/src/assets/img/Photo/21.jpg",
    "/src/assets/img/Photo/22.jpg",
    "/src/assets/img/Photo/23.png",
    "/src/assets/img/Photo/24.jpg",
    "/src/assets/img/Photo/25.jpg",
  ];

  const columns = Array.from({ length: 5 }, (_, i) =>
    images.slice(
      i * Math.ceil(images.length / 5),
      (i + 1) * Math.ceil(images.length / 5)
    )
  );

  return (
    <div className="flex flex-col gap-8">
      <Navbar />
      <ul className="flex justify-center gap-5 py-3 cursor-pointer text-nav-menu/50 ">
        <li className="transition-all hover:text-font hover:text-lg">Featured</li>
        <li className="transition-all hover:text-font hover:text-lg">Graphic Design</li>
        <li className="transition-all hover:text-font hover:text-lg">Art</li>
        <li className="transition-all hover:text-font hover:text-lg">Architecture</li>
        <li className="transition-all hover:text-font hover:text-lg">Love</li>
        <li className="transition-all hover:text-font hover:text-lg">Typography</li>
      </ul>

      <div className="flex flex-col items-center w-full gap-16 mb-8">
        <div className="flex gap-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8 w-[220px]">
              {column.map((src, imgIndex) => (
                <Link key={imgIndex} to="/PageBuyPhoto">
                  <div className="relative">
                    <img
                      src={src}
                      alt={`Photo ${colIndex * column.length + imgIndex + 1}`}
                      className="w-full transition-all cursor-pointer rounded-2xl hover:scale-105"
                    />
                    {/* Teks dalam lingkaran */}
                    <div
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="absolute p-3 text-lg text-white rounded-full price-photo bottom-1 left-1"
                    >
                      50K
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <p className="font-serif text-2xl font-light text-center text-nav-menu">
          The more inspiration has yet to be found.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default BuyPhoto;
