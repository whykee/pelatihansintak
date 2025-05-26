import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "./Footer";

function Produk() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Card />
      <Section2/>
      <Footer/>
    </div>
  );
}

export default Produk;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[570px]"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/5d/99/30/5d9930063217dd36a891283515c95a3e.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Produk Kopi Nusantara</h1>
            <p className="mb-5 text-xl font-semibold">
              Biji kopi Arabika dan Robusta premium dari daerah terbaik Indonesia
            </p>
            <button className="btn bg-amber-700 border-amber-700 text-white shadow-none">
              Penilaian <IoIosArrowForward />{" "}
            </button>
            <button className="btn ml-5 text-black shadow-none">
              Unduh Catalog <MdOutlineFileDownload />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Card() {
  return (
    <>
      {/* Card1 1 */}
      <div className="flex items-center justify-center my-10 gap-4">
        <div className="card bg-base-100 w-96 h-110 shadow-sm">
          <figure>
            <img
              src="https://i.pinimg.com/736x/f0/8f/47/f08f4785f81f9b53ae65588a29d9e8d5.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sumatra Mandheling</h2>
            <p>
              Kopi khas Sumatra dengan rasa kuat dan aroma rempah yang khas.
              Cocok untuk pecinta kopi dengan karakter tebal dan kompleks.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-amber-700 text-white p-4 w-89 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 h-110 shadow-sm">
          <figure>
            <img
              src="https://i.pinimg.com/736x/0f/de/21/0fde21f64e12adcf6da11f3b84f8433c.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Java Preanger</h2>
            <p>
              Ditanam di tanah vulkanik Jawa Barat, kopi ini menghadirkan rasa
              seimbang dengan keasaman ringan dan aroma floral yang elegan.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-700 text-white p-4 w-89 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 w-96 h-110 shadow-sm">
          <figure>
            <img
              src="https://i.pinimg.com/736x/ac/d2/a7/acd2a71b1065296cb47a3c1d040cca93.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bali Kintamani</h2>
            <p>
              Nikmati cita rasa segar dengan sentuhan citrus dan keasaman
              yang cerah dari kopi yang tumbuh di dataran tinggi Kintamani.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-700 text-white p-4 w-89 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center justify-center my-10 gap-4">
        <div className="card bg-base-100 w-96 h-110 shadow-sm">
          <figure>
            <img
              src="https://i.pinimg.com/736x/c4/ad/c5/c4adc588a0891e663712a857b1960434.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toraja Sapan</h2>
            <p>
               Kopi eksotis dari Sulawesi dengan rasa earthy, body medium, dan
              aftertaste yang bersih. Cocok untuk penikmat kopi klasik.
            </p>
            <div className="card-actions justify-center">
              <button className="btn bg-amber-700 text-white p-4 w-89 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 h-110 shadow-sm">
          <figure>
            <img
              src="https://i.pinimg.com/736x/71/40/fc/7140fc77b55e447f63eafe9300822371.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Flores Bajawa</h2>
            <p>
              Aroma cokelat dan rempah dari biji kopi organik yang ditanam
              di lereng pegunungan Flores Bajawa. Lembut dan menggoda.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-700 text-white p-4 w-89 rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 w-96 h-110 shadow-sm">
          <figure>
            <img
              src="https://i.pinimg.com/736x/ca/6f/2f/ca6f2f2fa3071d91fbe5a38fb35cd96a.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Papua Wamena</h2>
            <p>
              Kopi langka dari pegunungan tinggi Papua, dengan rasa ringan,
              aroma bunga, dan cita rasa lembut yang unik.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-amber-700 text-white p-4 w-89 rounded-lg">Buy Now</button>
            </div>
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
            src="https://i.pinimg.com/736x/be/8a/38/be8a38c91d5e1803d1b6f50159b47a00.jpg"
            className="w-xl rounded-lg shadow-2xl"
          />
          <div>
            <p className="bg-orange-200 text-amber-800 w-max p-1.5 rounded-lg text-sm font-medium">
              Pesanan Khusus untuk Kebutuhan Anda
            </p>
            <h1 className="text-5xl font-bold text-amber-700">
              Nusantara Roast, Solusi Kopi Sesuai Spesifikasi Anda
            </h1>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 pt-4">
              <li>Campuran unik dari berbagai varietas kopi Indonesia</li>
              <li>Metode pemrosesan khusus untuk profil rasa tertentu</li>
              <li>Kemasan eksklusif sesuai kebutuhan pasar Anda</li>
              <li>Harga berbasis volume untuk pemesanan dalam jumlah besar</li>
            </ul>
            <button className="btn bg-amber-700 border-amber-700 text-white">
              Diskusikan Pesanan Anda
            </button>
          </div>
        </div>
      </div>
    </>
  );
}