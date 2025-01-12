import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Explore";

export default function Explore() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </div>
    </>
  );
} 