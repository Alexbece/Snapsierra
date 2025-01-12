import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
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
