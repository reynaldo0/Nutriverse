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

  const styles = {
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#FCFFEC",
      fontFamily: "sans-serif",
      padding: "5rem 1.5rem 4rem 1.5rem",
      overflow: "hidden",
    },
    background: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/background/heroabout.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.5,
      backgroundAttachment: "fixed",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "800",
      color: "#2F3E1E",
      marginBottom: "3rem",
      letterSpacing: "0.05em",
      zIndex: 10,
      transition: "all 0.7s ease-out",
      opacity: animateText ? 1 : 0,
      transform: animateText ? "translateY(0)" : "translateY(-2rem)",
    },
    card: {
      position: "relative",
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(20px)",
      borderRadius: "2rem",
      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
      border: "1px solid rgba(144,196,68,0.3)",
      padding: "3rem",
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
      maxWidth: "80rem",
      width: "100%",
      zIndex: 10,
      transition: "all 0.7s ease-out",
      opacity: animateCard ? 1 : 0,
      transform: animateCard
        ? "translateY(0) scale(1)"
        : "translateY(2rem) scale(0.95)",
    },
    tabs: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    },
    tabButton: (isActive) => ({
      padding: "0.75rem 2rem",
      borderRadius: "9999px",
      fontWeight: isActive ? 600 : 700,
      fontSize: "1.125rem",
      transition: "all 0.3s",
      backgroundColor: isActive ? "#90C444" : "rgba(144,196,68,0.3)",
      color: isActive ? "#fff" : "#276127",
      boxShadow: isActive ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
      cursor: "pointer",
    }),
    content: {
      color: "#2C2C2C",
      fontSize: "1.125rem",
      lineHeight: 1.8,
      transition: "all 0.7s ease-out",
    },
    paragraph: {
      fontStyle: "italic",
      textAlign: "justify",
      opacity: animateText ? 1 : 0,
      transform: animateText ? "translateX(0)" : "translateX(-2rem)",
      transition: "all 0.7s ease-out",
    },
    list: {
      listStyle: "none",
      textAlign: "justify",
      gap: "1.5rem",
      display: "flex",
      flexDirection: "column",
      opacity: animateText ? 1 : 0,
      transform: animateText ? "translateX(0)" : "translateX(2rem)",
      transition: "all 0.7s ease-out",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
    },
    listNumber: {
      color: "#90C444",
      fontWeight: "bold",
      fontSize: "1.25rem",
    },
    highlight: {
      color: "#90C444",
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.background} />
      <h1 style={styles.title}>Visi dan Misi</h1>
      <div style={styles.card}>
        {/* Tabs */}
        <div style={styles.tabs}>
          {["visi", "misi"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={styles.tabButton(activeTab === tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={styles.content}>
          {activeTab === "visi" ? (
            <p style={styles.paragraph}>
              Menjadi <span style={styles.highlight}>platform edukasi digital</span>{" "}
              yang inovatif dan terpercaya dalam memberikan pengetahuan praktis dan ilmiah
              tentang cara menanam tumbuhan yang baik, benar, dan berkelanjutan, guna
              mewujudkan masyarakat sehat, mandiri pangan, serta berkontribusi pada
              tercapainya <span style={styles.highlight}>Zero Hunger</span>.
            </p>
          ) : (
            <ul style={styles.list}>
              {[
                "Memberikan edukasi digital berbasis riset tentang cara menanam yang baik dan berkelanjutan.",
                "Mengembangkan pembelajaran interaktif untuk meningkatkan keterampilan bercocok tanam masyarakat.",
                "Mendorong praktik pertanian ramah lingkungan menuju kemandirian pangan.",
                "Membangun komunitas petani dan pembelajar yang inovatif serta peduli lingkungan.",
                "Berkontribusi pada tercapainya Zero Hunger melalui penyebaran pengetahuan dan aksi nyata.",
              ].map((text, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={styles.listNumber}>{idx + 1}.</span>
                  <p>
                    <span style={styles.highlight}>
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
