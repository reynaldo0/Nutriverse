import { useEffect, useState } from "react";

export default function KomuIntro() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 200);
    setTimeout(() => setAnimateImage(true), 600);
  }, []);

  const handleScrollToForum = () => {
    setClicked(true);
    const forumSection = document.getElementById("forum-komunitas");

    if (forumSection) {
      setTimeout(() => {
        forumSection.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center w-full px-6 pt-20 pb-16 bg-[#FCFFEC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[url('/background/herokomunitas.png')] bg-cover bg-center blur-sm"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* Judul */}
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#3B3B0E] mb-10 text-center leading-tight transition-all duration-700 relative z-10 ${
          animateText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        Bangun relasi baik melalui{" "}
        <span className="text-[#90C444]">komunitas</span>
      </h1>

      {/* Card Konten */}
      <div
        className={`bg-[#F0FCD7] rounded-3xl shadow-2xl border-2 border-green-200 p-8 md:p-14 flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full transition-all duration-700 relative z-10 ${
          animateText
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
      >
        {/* Teks */}
        <p
          className={`text-[#2C2C2C] text-lg md:text-2xl lg:text-3xl leading-relaxed text-center md:text-left transition-all duration-700 ${
            animateText
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5"
          }`}
        >
          Website Nutriverse membantu antarsiswa untuk{" "}
          <span className="text-[#90C444] font-semibold animate-pulse">
            membangun relasi
          </span>{" "}
          melalui berbagai{" "}
          <span className="text-[#90C444] font-bold">seminar</span> dan forum{" "}
          <span className="text-[#90C444] font-bold">komunitas</span> sebagai
          ruang diskusi seru dan bermanfaat.
        </p>

        {/* Gambar */}
        <div className="relative flex justify-center w-full md:w-auto">
          <img
            src="/icon/nuti5.png"
            alt="Nuti Mascot"
            className={`w-52 md:w-72 lg:w-[380px] drop-shadow-2xl transition-all duration-700 ease-out mx-auto ${
              animateImage
                ? "opacity-100 scale-100 rotate-0 animate-float"
                : "opacity-0 scale-75 -rotate-6"
            }`}
          />

          {/* dekorasi */}
          <span className="absolute -top-4 -left-4 w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-300 opacity-70 animate-ping"></span>
          <span className="absolute top-10 -right-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-300 opacity-70 animate-bounce"></span>
          <span className="absolute -bottom-6 left-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 opacity-60 animate-pulse"></span>
        </div>
      </div>

      {/* Tombol Menuju Forum */}
      <button
        onClick={handleScrollToForum}
        className={`mt-10 py-4 px-10 text-lg md:text-xl lg:text-2xl rounded-full font-semibold transition-all z-10
                    ${
                      clicked
                        ? "bg-[#90C444] text-white scale-95"
                        : "bg-[#A6E272] text-[#224C14] hover:bg-[#94D45E] hover:scale-105"
                    }`}
      >
        Menuju Komunitas
      </button>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
