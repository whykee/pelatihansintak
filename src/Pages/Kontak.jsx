import Navbar from "./Navbar";
import Footer from "./Footer";

import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

function Kontak() {
  return (
    <div>
      <Navbar />
      <KontakSection />
      <Footer />
    </div>
  );
}

export default Kontak;

function KontakSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    produk: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, "contacts"), formData);
      alert("Pesan berhasil dikirim!");
      setFormData({ name: "", email: "", produk: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-5 mb-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="Masukkan nama Anda"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="Masukkan email Anda"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Produk yang Diminati
            </label>
            <select
              name="produk"
              defaultValue=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              required
              value={formData.message}
              onChange={handleChange}
            >
              <option value="" disabled>
                Pilih produk
              </option>
              <option value="product1">Produk 1</option>
              <option value="product2">Produk 2</option>
              <option value="product3">Produk 3</option>
              <option value="product4">Produk 4</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Pesan
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              placeholder="Masukkan pesan Anda"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </>
  );
}
