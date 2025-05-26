import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-amber-200 text-base-content p-10">
        <aside>
          <div className="flex justify-center items-center gap-2 ">
            <GiCoffeeBeans className="text-amber-700" />{" "}
            <h1 className="text-xl text-amber-800 font-bold">Nusantara Roast</h1>
          </div>
          <p className="text-md font-semibold w-96" >
            Biji kopi premium dari Nusantara langsung dari petani lokal ke
            cangkir Anda di seluruh dunia.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-amber-700 font-bold">Tautan Cepat</h6>
          <a className="link link-hover">Beranda</a>
          <a className="link link-hover">Tentang Kami</a>
          <a className="link link-hover">Produk</a>
          <a className="link link-hover">Kontak</a>
        </nav>
        <nav>
          <h6 className="footer-title text-amber-700 font-bold">Jenis Kopi</h6>
          <a className="link link-hover">Arabika</a>
          <a className="link link-hover">Robusta</a>
          <a className="link link-hover">Coffe Spesial</a>
          <a className="link link-hover">Pesanan Kostum</a>
        </nav>
        <nav className="w-96">
          <h6 className="footer-title text-amber-700 font-bold">Hubungi Kami</h6>
          <p>Jl. Kopi Nusantara No. 45, Palembang, Sumatera Selatan, Indonesia 30123</p>
          <p>info@nusantararoast.com</p>
          <p>+62 812 3456 7890</p>
          
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-amber-200 text-base-content p-4">
        <aside>
          <p>
            Hak Cipta © {new Date().getFullYear()} Nusantara Roast. Seluruh hak dilindungi.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
