import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore.jsx";
import BuyPhoto from "./pages/BuyPhoto.jsx";
import Photo from "./pages/Category/Photo.jsx";
import Video from "./pages/Category/Video.jsx";
import Vector from "./pages/Category/Vector.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import PageFotoFree from "./pages/Download/PageFotoFree.jsx";
import PageBuyPhoto from "./pages/Download/PageBuyPhoto.jsx"

export default function Sierra() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/BuyPhoto" element={<BuyPhoto />} />
          <Route path="/Category/Photo" element={<Photo />} />
          <Route path="/Category/Video" element={<Video />} />
          <Route path="/Category/Vector" element={<Vector />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PageFotoFree" element={<PageFotoFree />} />
          <Route path="/PageBuyPhoto" element={<PageBuyPhoto />} />
        </Routes>
      </Router>
    </>
  );
}
