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
        instagram: "https://www.instagram.com/pirnswa?igsh=MW94a3hwYnQ1a2VxdQ==",
        linkedin: "https://www.linkedin.com/in/zhafirah-naswa-naufariza-045771353/",
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
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
              <div className="overlay-glow" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-icons">
              <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="github">
                <FaGithub />
              </a>
              <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
                <FaInstagram />
              </a>
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .team-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 5rem 1.5rem 10rem;
          position: relative;
          background: linear-gradient(135deg, #f0fff4, #e1f5e7);
          overflow: hidden;
        }
        .team-section .background {
          position: absolute;
          inset: 0;
          background-image: url('/background/heroabout.png');
          background-size: cover;
          background-position: center;
          opacity: 0.25;
          z-index: 0;
          filter: blur(1px);
        }
        .team-title {
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          color: #1f3c00;
          font-size: 3rem;
          letter-spacing: 1px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: all 0.7s ease-out;
          transform: translateY(-2rem);
          opacity: 0;
        }
        .team-title span { color: #90C444; }
        .team-title.animate { transform: translateY(0); opacity: 1; }

        .team-grid {
          max-width: 60rem;
          width: 100%;
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr;
          justify-items: center;
          transition: all 0.7s ease-out;
          transform: translateY(2rem);
          opacity: 0;
        }
        @media (min-width: 640px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        .team-grid.animate { transform: translateY(0); opacity: 1; }

        .team-card {
          position: relative;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(16px);
          border-radius: 2.5rem;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transform: scale(0.95);
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .team-card:hover {
          transform: scale(1.08);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .img-wrapper {
          position: relative;
          width: 12rem;
          height: 13rem;
          border-radius: 2rem;
          overflow: hidden;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }
        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .img-wrapper:hover img { transform: scale(1.08); }
        .overlay-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(144,196,68,0.25), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .img-wrapper:hover .overlay-glow { opacity: 1; }

        .team-card h3 {
          font-weight: 700;
          font-size: 1.75rem;
          color: #1f3c00;
          transition: color 0.3s;
          margin-bottom: 0.25rem;
        }
        .team-card:hover h3 { color: #90C444; }

        .team-card p {
          font-size: 1.125rem;
          color: #4B5563;
          font-style: italic;
          margin-bottom: 0.75rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          font-size: 1.25rem;
        }
        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          border-radius: 50%;
          background-color: #d9f99d;
          color: #166534;
          transition: all 0.3s;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .social-icons a.github:hover { background-color: #111; color: #fff; }
        .social-icons a.instagram:hover { background-color: #e1306c; color: #fff; }
        .social-icons a.linkedin:hover { background-color: #0077b5; color: #fff; }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
