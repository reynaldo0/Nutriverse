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
      role: "Backend Developer",
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
    <section className="team-section">
      <div className="background" />

      <h2 className={`team-title ${animateCards ? "animate" : ""}`}>
        Meet the <span>Team</span>
      </h2>

      <div className={`team-grid ${animateCards ? "animate" : ""}`}>
        {teamData.map((member, i) => (
          <div
            key={member.id}
            className="team-card"
            style={{ animationDelay: `${i * 0.25}s` }}
          >
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
              <div className="overlay-glow" />
            </div>

            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <div className="social-icons">
              <a href={member.socials.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href={member.socials.instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .team-section {
          min-height: 100vh;
          padding: 4rem 1.25rem 6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #f0fff4, #e1f5e7);
          position: relative;
          overflow: hidden;
        }

        .background {
          position: absolute;
          inset: 0;
          background-image: url('/background/heroabout.png');
          background-size: cover;
          background-position: center;
          opacity: 0.22;
          filter: blur(1px);
        }

        .team-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1f3c00;
          text-align: center;
          margin-bottom: 2rem;
          letter-spacing: 1px;
          transition: 0.7s ease;
          opacity: 0;
          transform: translateY(-1rem);
        }
        .team-title span { color: #90C444; }
        .team-title.animate { opacity: 1; transform: translateY(0); }

        .team-grid {
          width: 100%;
          max-width: 45rem;
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
          justify-items: center;
          opacity: 0;
          transform: translateY(1.5rem);
          transition: 0.7s ease;
        }
        @media (min-width: 640px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .team-grid.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .team-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          padding: 1.8rem;
          border-radius: 1.8rem;
          box-shadow: 0 12px 28px rgba(0,0,0,0.07);
          text-align: center;
          transform: scale(0.95);
          opacity: 0;
          animation: fadeInUp 0.7s ease forwards;
          transition: 0.35s ease;
          width: 100%;
          max-width: 18rem;
        }
        .team-card:hover {
          transform: scale(1.04);
          box-shadow: 0 18px 36px rgba(0,0,0,0.12);
        }

        /* === FIX UTAMA: FOTO 100% CENTER === */
        .img-wrapper {
          width: 9rem;
          height: 10rem;
          border-radius: 1.6rem;
          overflow: hidden;
          margin-bottom: 1rem;
          position: relative;
          margin-left: auto;
          margin-right: auto; /* FOTO BENAR2 DI TENGAH */
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }
        .img-wrapper:hover img { transform: scale(1.07); }

        .overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(144,196,68,0.25), transparent);
          opacity: 0;
          transition: 0.4s;
        }
        .img-wrapper:hover .overlay-glow { opacity: 1; }

        .team-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1f3c00;
          margin-bottom: 0.2rem;
        }

        .team-card p {
          font-size: 0.95rem;
          color: #4B5563;
          margin-bottom: 0.7rem;
          font-style: italic;
        }

        .social-icons {
          display: flex;
          gap: 0.7rem;
          justify-content: center;
          font-size: 1.1rem;
        }
        .social-icons a {
          background: #d9f99d;
          padding: 0.55rem;
          border-radius: 50%;
          color: #166534;
          transition: 0.25s;
        }
        .social-icons a:hover { transform: scale(1.15); }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(22px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
