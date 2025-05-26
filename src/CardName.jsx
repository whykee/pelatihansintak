import React from "react";
import { FaFacebook, FaInstagram, FaGithub} from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-96 h-auto shadow-xl bg-white p-4">
          <div className="flex justify-center items-center flex-col">
            <img
              src="src\assets\after 7.jpg"
              alt=""
              className="w-30 h-30 rounded-full shadow-xl"
            />

            <h1 className="text-xl font-bold mt-4">Dwike Nabila Putri</h1>
            <p className="text-gray-500">Mahasiswi</p>

            <div className="mt-4">
              <p>
                Hai! Aku Dwike, seorang mahasiswi yang tertarik pada dunia
                pemrograman dan desain web. Aku senang belajar hal baru,
                terutama yang berkaitan dengan teknologi dan pengembangan diri.
                Saat ini aku sedang menempuh studi di D3 Manajemen Informatika.
              </p>
            </div>

            <LinkSocial 
             text='Instragram'
             icon= {<FaInstagram className="mr-2 text-red-600" />}
             link='https://www.instagram.com/dwikemee_/'/>
            <LinkSocial 
             text='Facebook'
             icon= {<FaFacebook className="mr-2 text-blue-600" />}
             link='https://www.facebook.com/dwike.nabilaputri.56?locale=id_ID'/>
            <LinkSocial 
             text='Github'
             icon= {<FaGithub className="mr-2" />}
             link='https://github.com/whykee'/>

          </div>
        </div>
      </div>
    </>
  );
}

export default CardName;

// Nested componen
function LinkSocial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center items-center`">
        <a
          className="bg-black text-white p-4 w-89 rounded-lg text-center flex justify-center items-center"
          href="https://www.google.com/?hl=id"
          target="blank"
        >
          {/* untuk memanggil link dengan simple  agar tidak berulang*/}
          {props.text} {props.icon}
        </a>
      </div>
    </>
  );
}
