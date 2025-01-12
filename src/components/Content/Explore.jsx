import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const images = [
    "/src/assets/img/1.jpg",
    "/src/assets/img/2.jpg",
    "/src/assets/img/3.jpg",
    "/src/assets/img/4.jpg",
    "/src/assets/img/5.jpg",
    "/src/assets/img/6.jpg",
    "/src/assets/img/7.jpg",
    "/src/assets/img/8.jpg",
    "/src/assets/img/9.jpg",
    "/src/assets/img/10.jpg",
    "/src/assets/img/11.jpg",
    "/src/assets/img/12.jpg",
    "/src/assets/img/13.jpg",
    "/src/assets/img/14.jpg",
    "/src/assets/img/15.jpg",
    "/src/assets/img/16.jpg",
    "/src/assets/img/17.jpg",
    "/src/assets/img/18.jpg",
    "/src/assets/img/19.jpg",
    "/src/assets/img/20.jpg",
    "/src/assets/img/21.jpg",
    "/src/assets/img/22.jpg",
    "/src/assets/img/23.png",
    "/src/assets/img/24.jpg",
    "/src/assets/img/25.jpg",
  ];

  const columns = Array.from({ length: 5 }, (_, i) =>
    images.slice(
      i * Math.ceil(images.length / 5),
      (i + 1) * Math.ceil(images.length / 5)
    )
  );

  return (
    <div className="flex flex-col items-center w-full gap-16 mb-8">
            <div className="flex gap-8">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-8 w-[220px]">
                  {column.map((src, imgIndex) => (
                    <Link key={imgIndex} to="/PageFotoFree">
                      <div className="relative">
                        <img
                          src={src}
                          alt={`Photo ${colIndex * column.length + imgIndex + 1}`}
                          className="w-full transition-all cursor-pointer hover:scale-105"
                        />
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
  );
};

export default Content;
