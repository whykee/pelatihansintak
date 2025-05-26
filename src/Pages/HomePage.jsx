import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section2 />
      <Footer/>
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[570px]"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/e5/a4/fd/e5a4fdc3bf5cf3aa5b52cb5ffefa0215.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Nusantara Roast</h1>
            <p className="mb-5 text-xl font-semibold">
              Meracik Kopi Terbaik Nusantara untuk Dunia
            </p>
            <button className="btn bg-amber-700 border-amber-700 text-white shadow-none">
              Jelajahi Kopi Kami <IoIosArrowForward />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-[#fefbea] min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.pinimg.com/736x/83/1d/33/831d335f6492eeb1e984353f4cd603c5.jpg"
            className="w-xl rounded-lg shadow-2xl"
          />
          <div>
            <p className="bg-orange-200 text-amber-800 w-max p-1.5 rounded-lg text-sm font-medium">
              Dipetik dari Bumi Nusantara
            </p>
            <h1 className="text-5xl font-bold text-amber-700">
              Biji Kopi Pilihan, Kaya Akan Warisan
            </h1>
            <p className="py-6">
              Di Nusantara Roast, kami bekerja sama dengan petani dari Sumatera,
              Jawa, Bali, dan daerah lainnya untuk menghadirkan biji Arabika dan
              Robusta berkualitas tinggi. Ditanam secara berkelanjutan,
              diperdagangkan secara adil, dan diproses dengan penuh cinta —
              setiap cangkir punya cerita.
            </p>
            <button className="btn bg-amber-700 border-amber-700 text-white">
              Kenali Lebih Dalam
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
