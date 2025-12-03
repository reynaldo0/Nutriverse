import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function TeamNutriverse() {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateCards(true), 300);
  }, []);

  const teamData = [
    {
      id: 1,
      name: "Reynaldo Yusellino",
      role: "Frontend Developer",
      img: "/team/reynaldo.jpg",
      socials: {
        github: "https://github.com/reynaldo0",
        instagram: "https://www.instagram.com/rynldysllino",
        linkedin: "https://www.linkedin.com/in/reynaldo-yusellino",
      },
    },
    {
      id: 3,
      name: "Zhafirah Naswa N",
      role: "Frontend Developer",
      img: "/team/zhafirah.jpg",
      socials: {
        github: "https://github.com/naswaaaa29",
        instagram: "https://www.instagram.com/pirnswa",
        linkedin:
          "https://www.linkedin.com/in/zhafirah-naswa-naufariza-045771353/",
      },
    },
  ];

  return (
    <section className="relative min-h-screen px-5 py-16 flex flex-col items-center bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">

      {/* Background with reduced blur */}
      <div
        className="absolute inset-0 bg-[url('/background/heroabout.png')] bg-cover bg-center opacity-20 blur-[1px]"
      ></div>

      {/* Title */}
      <h2
        className={`text-[2.2rem] font-extrabold text-[#1f3c00] text-center mb-8 tracking-wide transition-all duration-700 ${
          animateCards ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        Meet the <span className="text-[#90C444]">Team</span>
      </h2>

      {/* Grid */}
      <div
        className={`grid w-full max-w-[45rem] gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center transition-all duration-700 ${
          animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {teamData.map((member, i) => (
          <div
            key={member.id}
            style={{ animationDelay: `${i * 0.25}s` }}
            className="w-full max-w-[18rem] bg-white/85 backdrop-blur-xl p-7 rounded-3xl shadow-xl text-center scale-[0.95] opacity-0 animate-fadeUp hover:scale-[1.04] hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Wrapper */}
            <div className="relative w-36 h-40 rounded-2xl overflow-hidden mb-4 mx-auto">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#90C444]/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>

            <h3 className="text-xl font-bold text-[#1f3c00]">{member.name}</h3>
            <p className="text-gray-600 italic text-sm mb-3">{member.role}</p>

            <div className="flex justify-center gap-3 text-lg">
              <a
                href={member.socials.github}
                target="_blank"
                className="bg-lime-200 p-2 rounded-full text-green-800 transition-transform duration-200 hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href={member.socials.instagram}
                target="_blank"
                className="bg-lime-200 p-2 rounded-full text-green-800 transition-transform duration-200 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href={member.socials.linkedin}
                target="_blank"
                className="bg-lime-200 p-2 rounded-full text-green-800 transition-transform duration-200 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Keyframes Tailwind */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(22px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>
    </section>
  );
}
