import "./App.css"

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Produk from "./Pages/Produk";
import Kontak from "./Pages/Kontak";
import NotFoundPage from "./Pages/NotFoundPage";

function App() { //nma file

  return ( //isi kode
    <>

    <h1>hallo</h1>
    <h1>hallo 2</h1>

    <h2>hallo4</h2>
    <h2>hallo5</h2>
    <h1>rifki</h1>
    {/* memanggil dari file lain
    <CardName />
    <HomePage/> */}

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
