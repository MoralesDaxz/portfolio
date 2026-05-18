"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic from "@/assets/picture/Morales.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

const PictureHero = () => {
  const [modalPic, setModalPic] = useState(true);
  const [modalPdf, setModalPdf] = useState(false);

  
    const linkStyle = "p-1 w-full border-b-2 border-b-transparent hover:border-bondiBlue-500 transition-all duration-700"
    const iconStyle="h-[25px] w-full opacity-40 hover:opacity-100 transition-all duration-300"
/* const modalClass =
    "pictureModal transition-all duration-700 absolute top-[12%] sm:top-[15%] lg:top-[18%] left-2 md:left-[5%] lg:left-[10%] h-[150px] w-[80px] flex flex-col items-center justify-around";
 */
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
  
        src={pic}
        width={0}
        height={0}
        alt="pic"
        className="w-[150px] rounded-[25px] shadow-lg shadow-bondiBlue-400 border-4 border-bondiBlue-900 0"
      />
      <div
        className="pictureModal transition-all duration-700 p-1 flex gap-6 items-center justify-around"
      >
        <Link
          className={linkStyle}
          href={"https://github.com/MoralesDaxz"}
          title="GitHub"
          target="_blank"
        >
          <FaGithub className={iconStyle}/>
        </Link>
        <Link
         className={linkStyle}
          href={
            "https://www.linkedin.com/in/ajmoralesr/"
          }
          title="Linkedin"
          target="_blank"
        >
          <FaLinkedin className={iconStyle}/>
        </Link>
        <button
          onClick={() => setModalPdf(true)}
         className={linkStyle}
          title="Curriculum"
        >
          <IoDocumentAttach className={iconStyle} />
        </button>
      </div>

      {/* PDF Modal */}
      {modalPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalPdf(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl relative flex flex-col"
            style={{ width: "95%", height: "95%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con botones */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Curriculum</h2>
              <div className="flex gap-2">
                <a
                  href="/curriculum/Alfredo Morales - Madrid.pdf"
                  download="Alfredo Morales - Madrid.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-bondiBlue-500 text-white rounded-lg hover:bg-bondiBlue-600 transition-all duration-300"
                  title="Descargar PDF"
                >
                  <HiDownload className="h-5 w-5" />
                  Descargar
                </a>
                <button
                  onClick={() => setModalPdf(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
                  title="Cerrar"
                >
                  <MdClose className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src="/curriculum/Alfredo Morales - Madrid.pdf"
              className="flex-1 w-full"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PictureHero;
