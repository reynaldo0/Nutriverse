import React, { useState, useEffect } from "react";

export default function VisiMisi() {
  const [activeTab, setActiveTab] = useState("visi");
  const [animateCard, setAnimateCard] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const cardTimer = setTimeout(() => setAnimateCard(true), 200);
    const textTimer = setTimeout(() => setAnimateText(true), 500);

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div
      className="
        relative flex flex-col items-center justify-center min-h-screen 
        bg-[#FCFFEC] px-4 py-12 overflow-hidden
      "
      style={{
        transform: "scale(0.85)",
        transformOrigin: "top center",
      }}
    >
      {/* Background */}
      <div
        className="
          absolute inset-0 bg-[url('/background/heroabout.png')] 
          bg-cover bg-center opacity-50 bg-fixed
        "
      />

      {/* Title */}
      <h1
        className="
          text-[2.5rem] font-extrabold text-[#2F3E1E] tracking-wide mb-12 z-10
          transition-all duration-700
        "
        style={{
          opacity: animateText ? 1 : 0,
          transform: animateText ? "translateY(0)" : "translateY(-2rem)",
        }}
      >
        Visi dan Misi
      </h1>

      {/* Card */}
      <div
        className="
          relative bg-white/70 backdrop-blur-2xl rounded-3xl border border-[#90C444]/30
          shadow-[0_25px_50px_rgba(0,0,0,0.1)] p-10 flex flex-col gap-10
          w-full max-w-[70rem] z-10 transition-all duration-700
        "
        style={{
          opacity: animateCard ? 1 : 0,
          transform: animateCard
            ? "translateY(0) scale(1)"
            : "translateY(2rem) scale(0.95)",
        }}
      >
        {/* Tabs */}
        <div className="flex justify-center gap-6">
          {["visi", "misi"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-8 py-3 rounded-full text-lg font-bold transition-all
                  ${isActive
                    ? "bg-[#90C444] text-white shadow-md"
                    : "bg-[#90C444]/30 text-[#276127]"
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div
          className="
            text-[#2C2C2C] text-lg leading-8 transition-all duration-700
          "
        >
          {activeTab === "visi" ? (
            <p
              className="italic text-justify transition-all duration-700"
              style={{
                opacity: animateText ? 1 : 0,
                transform: animateText
                  ? "translateX(0)"
                  : "translateX(-2rem)",
              }}
            >
              Menjadi{" "}
              <span className="text-[#90C444] font-semibold">
                platform edukasi digital
              </span>{" "}
              yang inovatif dan terpercaya dalam memberikan pengetahuan praktis
              dan ilmiah tentang cara menanam tumbuhan yang baik, benar, dan
              berkelanjutan, guna mewujudkan masyarakat sehat, mandiri pangan,
              serta berkontribusi pada tercapainya{" "}
              <span className="text-[#90C444] font-semibold">Zero Hunger</span>.
            </p>
          ) : (
            <ul
              className="
                flex flex-col gap-6 text-justify transition-all duration-700
              "
              style={{
                opacity: animateText ? 1 : 0,
                transform: animateText
                  ? "translateX(0)"
                  : "translateX(2rem)",
              }}
            >
              {[
                "Memberikan edukasi digital berbasis riset tentang cara menanam yang baik dan berkelanjutan.",
                "Mengembangkan pembelajaran interaktif untuk meningkatkan keterampilan bercocok tanam masyarakat.",
                "Mendorong praktik pertanian ramah lingkungan menuju kemandirian pangan.",
                "Membangun komunitas petani dan pembelajar yang inovatif serta peduli lingkungan.",
                "Berkontribusi pada tercapainya Zero Hunger melalui penyebaran pengetahuan dan aksi nyata.",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#90C444] font-bold text-xl">
                    {idx + 1}.
                  </span>
                  <p className="leading-7">
                    <span className="text-[#90C444] font-semibold">
                      {text.split(" ")[0]}
                    </span>{" "}
                    {text.split(" ").slice(1).join(" ")}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
