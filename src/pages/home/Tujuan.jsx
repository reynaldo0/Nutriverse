import { useEffect, useState, useRef } from "react";

export default function Tujuan() {
  const [animateText, setAnimateText] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 200);

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - rect.top) / (windowHeight * 1.2);
      progress = Math.min(Math.max(progress, 0), 1);

      const isMobile = window.innerWidth < 768;
      const maxShift = isMobile ? 50 : 110;

      setOffsetX(progress * maxShift);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full min-h-screen px-5 pt-16 pb-32
        flex flex-col items-center justify-start
        bg-gradient-to-b from-[#FCFFEC] via-[#C4E196] to-[#90C444]
        overflow-hidden
      "
    >
      {/* Background Layer */}
      <div
        className="
          absolute inset-0 opacity-35 bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: "url('/background/herohome.png')", backgroundAttachment: "fixed" }}
      />

      {/* Card */}
      <div
        className={`
          relative z-10 max-w-3xl w-full bg-[#F7FFF0]
          border border-[#E0F0C2] rounded-2xl shadow-xl
          px-6 py-8 md:px-8 md:py-10
          transition-all duration-700 ease-out
          ${animateText ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#3B3B0E] mb-6">
          Tujuan
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
          Mengingat Indonesia masih berada pada tingkat kelaparan{" "}
          <span className="text-[#AF3E3E] font-semibold">"Sedang"</span> dengan skor{" "}
          <span className="text-[#AF3E3E] font-semibold">17,9</span> berdasarkan Global Hunger Index
          (GHI) 2022. Maka, Nutriverse hadir untuk mendukung pencapaian tujuan{" "}
          <span className="text-[#90C444] font-semibold">"Zero Hunger"</span>. Platform ini
          memberikan pengetahuan mengenai{" "}
          <span className="text-[#90C444] font-semibold">bioteknologi sintetis</span> kepada siswa,
          sehingga mereka dapat{" "}
          <span className="text-[#90C444] font-semibold">mengembangkan</span> berbagai jenis{" "}
          <span className="text-[#90C444] font-semibold">tanaman unggulan</span> melalui proses
          tertentu. Dengan cara ini, Nutriverse berkontribusi pada peningkatan kuantitas dan kualitas
          hasil pertanian serta pengurangan kelaparan, sekaligus memperkuat ketahanan pangan
          nasional.
        </p>
      </div>

      {/* Grass Images */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end z-20 pointer-events-none">
        <img
          src="/icon/rumput-kiri.png"
          alt="rumput kiri"
          className="w-[40%] max-w-[460px] md:w-[40%] transition-transform duration-150"
          style={{ transform: `translateX(-${offsetX}px)` }}
        />

        <img
          src="/icon/rumput-kanan.png"
          alt="rumput kanan"
          className="w-[40%] max-w-[460px] md:w-[40%] transition-transform duration-150"
          style={{ transform: `translateX(${offsetX}px)` }}
        />
      </div>
    </section>
  );
}
