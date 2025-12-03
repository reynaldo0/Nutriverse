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

      // progress 0 → 1 saat section keliatan di layar
      let progress = (windowHeight - rect.top) / (windowHeight * 1.2);
      progress = Math.min(Math.max(progress, 0), 1);

      const isMobile = window.innerWidth < 768;
      const maxShift = isMobile ? 70 : 150;

      setOffsetX(progress * maxShift);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="tujuan-section" ref={sectionRef}>
      <div className="background-layer" />

      <div className={`tujuan-card ${animateText ? "animate-in" : ""}`}>
        <h2 className="tujuan-title">Tujuan</h2>
        <p className="tujuan-text">
          Mengingat Indonesia masih berada pada tingkat kelaparan{" "}
          <span className="highlight-red">"Sedang"</span> dengan skor{" "}
          <span className="highlight-red">17,9</span> berdasarkan Global Hunger Index (GHI) 2022.
          Maka, Nutriverse hadir untuk mendukung pencapaian tujuan{" "}
          <span className="highlight-green">"Zero Hunger"</span>. Platform ini memberikan pengetahuan mengenai{" "}
          <span className="highlight-green">bioteknologi sintetis</span> kepada siswa, sehingga mereka dapat{" "}
          <span className="highlight-green">mengembangkan</span> berbagai jenis{" "}
          <span className="highlight-green">tanaman unggulan</span> melalui proses tertentu. Dengan cara ini,
          Nutriverse berkontribusi pada peningkatan kuantitas dan kualitas hasil pertanian serta pengurangan kelaparan,
          sekaligus memperkuat ketahanan pangan nasional.
        </p>
      </div>

      {/* Parallax Grass */}
      <div className="grass-wrapper">
        <img
          src="/icon/rumput-kiri.png"
          alt="rumput kiri"
          className="grass-left"
          style={{ transform: `translateX(-${offsetX}px)` }}
        />
        <img
          src="/icon/rumput-kanan.png"
          alt="rumput kanan"
          className="grass-right"
          style={{ transform: `translateX(${offsetX}px)` }}
        />
      </div>

      <style>{`
        .tujuan-section {
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 6rem 1.5rem 10rem; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background: linear-gradient(to bottom, #FCFFEC, #C4E196, #90C444);
            overflow: hidden;
        }

        .background-layer {
            position: absolute;
            inset: 0;
            background-image: url('/background/herohome.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            opacity: 0.4;
            z-index: 0;
        }

        .tujuan-card {
            position: relative;
            z-index: 10;
            max-width: 960px;
            background: #F7FFF0;
            border-radius: 2rem;
            border: 1px solid #E0F0C2;
            padding: 3rem 2.5rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
            opacity: 0;
            transform: scale(0.95);
            transition: all 0.7s ease-out;
            margin-bottom: 2rem;
        }

        .tujuan-card.animate-in {
            opacity: 1;
            transform: scale(1);
        }

        .tujuan-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 800;
            color: #3B3B0E;
            margin-bottom: 2rem;
        }

        .tujuan-text {
            font-size: 1.125rem;
            line-height: 1.8;
            text-align: justify;
            color: #374151;
        }

        .highlight-red { color: #AF3E3E; font-weight: 600; }
        .highlight-green { color: #90C444; font-weight: 600; }

        /* FIX: rumput selalu menempel ke bawah page */
        .grass-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            pointer-events: none;
            z-index: 5;
        }

        .grass-left,
        .grass-right {
            width: 50%;
            max-width: 600px;
            object-fit: contain;
            transition: transform 0.15s linear;
        }
        `}</style>
    </section>
  );
}
