import React from "react";
import { Link } from "react-router-dom";

const DropdownCategory = () => {
  return (
    <div className="flex flex-col dropdownCategory">
      <ul className="flex flex-col gap-6 text-md text-font">
        <Link to="/Category/Photo">
          <li className="flex items-center gap-2 cursor-pointer">
            <i class="bx bx-camera"></i>
            <a href="#">Photo</a>
          </li>
        </Link>
        <Link to="/Category/Video">
          <li className="flex items-center gap-2 cursor-pointer">
            <i class="bx bx-movie-play"></i>
            <a href="#">Video</a> 
          </li>
        </Link>
        <Link to="/Category/Vector">
          <li className="flex items-center gap-2 cursor-pointer">
            <i class="bx bx-vector"></i>
            <a href="#">Vector</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownCategory;
