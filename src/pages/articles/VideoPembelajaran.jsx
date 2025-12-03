import { useState, useEffect, useRef } from "react";

export default function Video() {
  const [videos] = useState([
    { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/UWFDMLPul-Q?si=UQuXrNmt5fO-X_K1" },
    { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/XbIXxDMeRGA?si=k04XS5E2bPFa9KSO" },
    { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/qEafHH0gHJ0?si=u1A5UNVATBTG01iE" },
    { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/a-LnK2yOn10?si=4janvNZeXiigIAsh" },
  ]);

  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateButtons, setAnimateButtons] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  const buttonsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setAnimateTitle(true), 200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateButtons(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    setTimeout(() => setAnimateCard(true), 1000);
  }, []);

  const handleClick = (video) => {
    setActiveVideo(video);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#FCFFEC] via-[#c4e196] to-[#90c444] relative overflow-hidden px-4 pt-12 pb-28">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/background/heroartikel.png')] bg-cover bg-center opacity-40"
        style={{ backgroundAttachment: "fixed" }}
      />

      {/* Glow Animation */}
      <style>{`
        @keyframes glow {
          0%,100% { box-shadow: 0 0 8px rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 18px rgba(34,197,94,0.6); }
        }
        .animate-glow { animation: glow 2s infinite; }
      `}</style>

      {/* Title */}
      <h1
        className={`text-3xl md:text-4xl font-extrabold mb-10 text-center tracking-wide drop-shadow-lg transition-all duration-700 ease-out 
        ${animateTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
      >
        <span className="text-[#3B3B0E] tracking-wide">Video Pembelajaran</span>
      </h1>

      {/* Navigation Buttons */}
      <div
        ref={buttonsRef}
        className="flex justify-center mb-10 max-w-4xl transition-all duration-700 ease-out relative"
      >
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => handleClick(video)}
            style={{
              zIndex: videos.length - index,
              marginLeft: index === 0 ? 0 : -25,
            }}
            className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-500 transform
              ${
                video.id === activeVideo.id
                  ? "bg-[#7ED957] text-white scale-105 animate-glow shadow-lg hover:bg-[#6CD44D]"
                  : "bg-[#558B2F] text-white hover:bg-[#669933] scale-100 hover:scale-105 shadow-md"
              }
              ${animateButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* Video Card */}
      <div
        className={`bg-white rounded-2xl shadow-2xl border-2 border-green-200 p-4 md:p-6 w-full max-w-4xl h-[300px] md:h-[360px] flex items-center justify-center transition-all duration-700 ease-out
        ${animateCard ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
      >
        <iframe
          src={activeVideo.url}
          title={activeVideo.title}
          className="rounded-xl w-full h-full shadow-md"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
