import { useEffect, useState, useRef } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

export default function ZeroHunger() {
  const [progress, setProgress] = useState({ kerawanan: 0, undernourishment: 0, fies: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress({ kerawanan: 21.5, undernourishment: 8.53, fies: 4.5 });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const stockData = [
    { name: "Beras", value: 8398 },
    { name: "Jagung Pakan", value: 3665 },
    { name: "Gula", value: 1478 },
    { name: "Daging Ayam", value: 283 },
    { name: "Telur Ayam", value: 177 },
    { name: "Daging Sapi & Kerbau", value: 68 },
  ];

  const foodSecurityData = [
    { name: "Kerawanan Pangan Akut (%)", value: progress.kerawanan },
    { name: "Prevalensi Undernourishment (%)", value: progress.undernourishment },
    { name: "Prevalensi FIES (%)", value: progress.fies },
  ];

  const COLORS = ["#16a34a", "#65a30d", "#166534", "#3f6212", "#84cc16", "#a3e635"];

  const styles = {
    section: {
      width: "100%",
      padding: "3rem 1rem",
      fontFamily: "sans-serif",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(to bottom, #fafbe9, #ffe7b3, #f5c16c)"
    },
    backgroundImg: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "350px",
      backgroundImage: "url(/background/bg-tangan.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "cover",
      zIndex: 0
    },
    backgroundOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "350px",
      background: "linear-gradient(to top, rgba(250,251,233,0.3), transparent)",
      zIndex: 1
    },
    titleContainer: {
      textAlign: "center",
      marginBottom: "2rem",
      position: "relative",
      zIndex: 10
    },
    titleFlex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.75rem"
    },
    titleImg: { width: "3rem", height: "3rem" },
    titleText: { fontSize: "2.25rem", fontWeight: 800, color: "#3B3B0E" },
    paragraph: {
      maxWidth: "50rem",
      margin: "0 auto",
      color: "#4B5563",
      fontSize: "1rem",
      lineHeight: 1.6
    },
    highlight: { color: "#DDA73A", fontWeight: 600 },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.5rem",
      maxWidth: "80rem",
      margin: "0 auto",
      zIndex: 10,
      position: "relative"
    },
    card: {
      background: "#fff",
      borderRadius: "1.25rem",
      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
      padding: "1.25rem",
      position: "relative"
    },
    cardTitle: {
      background: "#3B3B0E",
      color: "#fff",
      padding: "0.5rem 1rem",
      borderRadius: "0.75rem 0.75rem 0 0",
      position: "absolute",
      top: "-1.25rem",
      left: "50%",
      transform: "translateX(-50%)",
      fontWeight: 600,
      fontSize: "1rem"
    },
    chartContainer: { marginTop: "1.75rem", width: "100%", height: "14rem" },
    chartNote: { marginTop: "0.5rem", fontSize: "0.75rem", textAlign: "center", color: "#4B5563" },
    explanation: {
      maxWidth: "50rem",
      margin: "2rem auto 0 auto",
      textAlign: "center",
      color: "#4B5563",
      fontSize: "1rem",
      lineHeight: 1.6
    },
    strongText: { fontWeight: 600 },
    greenText: { color: "#166534", fontWeight: 600 }
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.backgroundImg}></div>
      <div style={styles.backgroundOverlay}></div>

      <div style={styles.titleContainer}>
        <div style={styles.titleFlex}>
          <img src="/icon/zerohunger.png" alt="SDG 2 Icon" style={styles.titleImg} />
          <h2 style={styles.titleText}>Zero Hunger</h2>
        </div>
        <p style={styles.paragraph}>
          Pemerintah Indonesia melalui <span style={styles.highlight}>Badan Pangan Nasional (NFA) </span> 
          terus memperkuat ketahanan pangan nasional dalam rangka mewujudkan 
          <span style={styles.highlight}> Zero Hunger</span> pada tahun 2030. Data terbaru menunjukkan tren positif dalam penyediaan pangan pokok dan penurunan prevalensi kerawanan pangan di Indonesia.
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Proyeksi Stok Pangan 2024</h3>
          <div style={styles.chartContainer}>
            <ResponsiveContainer>
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip wrapperStyle={{ fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="value" barSize={30}>
                  {stockData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p style={styles.chartNote}>Sumber: Badan Pangan Nasional, 2024</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Indikator Ketahanan Pangan 2023</h3>
          <div style={styles.chartContainer}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={foodSecurityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={{ fontSize: 12 }}
                >
                  {foodSecurityData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip wrapperStyle={{ fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p style={styles.chartNote}>Sumber: NFA & FAO, 2023</p>
        </div>
      </div>

      <div style={styles.explanation}>
        <p>
           Pada tahun 2023, Indonesia berhasil menurunkan tingkat <strong style={styles.strongText}>undernourishment</strong> 
          menjadi <span style={styles.greenText}>8,53%</span> dan 
          <strong style={styles.strongText}> food insecurity</strong> menjadi 
          <span style={styles.greenText}> 4,5%</span>.
        </p>
      </div>
    </section>
  );
}
