import React, { useEffect, useState } from "react";

export default function HeroTree() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sunTranslate = offsetY * 0.5;

  return (
    <div className="min-h-[80vh] flex flex-col bg-gradient-to-b from-[#90C444] to-[#FCFFEC] relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/background/herohome.png')] bg-cover bg-center opacity-40"
        style={{ backgroundAttachment: "fixed" }}
      />

      {/* Matahari */}
      <div className="absolute inset-0 flex justify-center -translate-y-32 z-10">
        <img
          src="/illustrasi/matahari.png"
          alt="Sun"
          className="w-32 h-32 md:w-[350px] md:h-[350px] object-contain"
          style={{ transform: `translateY(${sunTranslate}px)`, transition: "transform 0.1s linear" }}
        />
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center relative z-20 mt-10">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white font-nunito">NUTRITREE</h1>
        <p className="mt-3 text-white max-w-xl font-nunito font-bold text-lg md:text-3xl md:pb-4">
          Yuk bermain game tanaman yang seru!!
        </p>
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="mt-5 px-6 md:px-10 py-3 md:py-4 bg-[#EDFFCD] text-[#3F3313] rounded-full shadow-md hover:bg-[#90C444] hover:text-white transition text-xl md:text-3xl font-nunito font-extrabold"
        >
          Mulai
        </button>

        {/* Ilustrasi utama */}
        <div className="absolute bottom-0">
          <img
            src="/illustrasi/herohome.png"
            alt="Hero"
            className="w-56 md:w-[60%] mx-auto opacity-60 z-0"
          />
        </div>
      </div>
    </div>
  );
}
