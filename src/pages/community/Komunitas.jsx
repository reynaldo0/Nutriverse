import { useEffect, useState } from "react";

export default function KomuIntro() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 200);
    setTimeout(() => setAnimateImage(true), 500);
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
    <section className="min-h-[65vh] flex flex-col items-center justify-center w-full px-4 pt-10 pb-10 bg-[#FCFFEC] relative overflow-hidden">
      
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
        className={`text-2xl md:text-4xl lg:text-4xl font-extrabold text-[#3B3B0E] mb-4 text-center leading-tight transition-all duration-700 relative z-10 ${
          animateText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        Bangun relasi baik melalui{" "}
        <span className="text-[#90C444]">komunitas</span>
      </h1>

      {/* Card */}
      <div
        className={`bg-[#F0FCD7] rounded-3xl shadow-xl border border-green-200 p-5 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-5 max-w-3xl w-full transition-all duration-700 relative z-10 ${
          animateText
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-5"
        }`}
      >
        {/* Teks */}
        <p
          className={`text-[#2C2C2C] text-sm md:text-lg lg:text-xl leading-relaxed text-center md:text-left transition-all duration-700 ${
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
            className={`w-28 md:w-44 lg:w-52 drop-shadow-2xl transition-all duration-700 ease-out mx-auto ${
              animateImage
                ? "opacity-100 scale-100 rotate-0 animate-float"
                : "opacity-0 scale-75 -rotate-6"
            }`}
          />

          {/* Dekorasi lebih kecil */}
          <span className="absolute -top-2 -left-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-300 opacity-70 animate-ping"></span>
          <span className="absolute top-6 -right-4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-300 opacity-70 animate-bounce"></span>
          <span className="absolute -bottom-4 left-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 opacity-60 animate-pulse"></span>
        </div>
      </div>

      {/* Tombol */}
      <button
        onClick={handleScrollToForum}
        className={`mt-6 py-2.5 px-7 text-sm md:text-base lg:text-lg rounded-full font-semibold transition-all z-10
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
            transform: translateY(-8px);
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
