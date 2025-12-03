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
    { name: "Prevalensi FIES (Sedang/Berat) (%)", value: progress.fies },
  ];

  const COLORS = ["#16a34a", "#65a30d", "#166534", "#3f6212", "#84cc16", "#a3e635"];

  const styles = {
    section: {
      width: "100%",
      padding: "5rem 1.5rem",
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
      height: "480px",
      backgroundImage: "url(/background/bg-tangan.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "cover",
      zIndex: 0,
      filter: "brightness(0.9) saturate(1.25) contrast(1.1)"
    },
    backgroundOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "480px",
      background: "linear-gradient(to top, rgba(250,251,233,0.3), rgba(250,251,233,0.35), transparent)",
      backdropFilter: "blur(2px)",
      zIndex: 1
    },
    titleContainer: {
      position: "relative",
      textAlign: "center",
      marginBottom: "3rem",
      zIndex: 10
    },
    titleFlex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1rem"
    },
    titleImg: { width: "4rem", height: "4rem", objectFit: "contain" },
    titleText: { fontSize: "3rem", fontWeight: 800, color: "#3B3B0E" },
    paragraph: { maxWidth: "64rem", margin: "0 auto", color: "#4B5563", fontSize: "1.125rem", lineHeight: 1.8 },
    highlight: { color: "#DDA73A", fontWeight: 600 },
    grid: { display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", maxWidth: "112rem", margin: "0 auto", position: "relative", zIndex: 10 },
    card: { background: "#fff", borderRadius: "2rem", boxShadow: "0 25px 50px rgba(0,0,0,0.1)", padding: "2rem", position: "relative" },
    cardTitle: { background: "#3B3B0E", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "1rem 1rem 0 0", position: "absolute", top: "-1.75rem", left: "50%", transform: "translateX(-50%)", fontWeight: 600, fontSize: "1.25rem", textAlign: "center" },
    chartContainer: { marginTop: "2.5rem", width: "100%", height: "18rem" },
    chartNote: { marginTop: "1rem", fontSize: "0.875rem", color: "#4B5563", textAlign: "center", fontStyle: "italic" },
    explanation: { 
      maxWidth: "64rem",         // disesuaikan dengan paragraph
      margin: "3.5rem auto 0 auto",
      textAlign: "center",
      color: "#4B5563",          // sama seperti paragraph
      fontSize: "1.125rem",      // sama seperti paragraph
      lineHeight: 1.8            // sama seperti paragraph
    },
    strongText: { fontWeight: 600 },
    greenText: { color: "#166534", fontWeight: 600 },
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
          Pemerintah Indonesia melalui <span style={styles.highlight}>Badan Pangan Nasional (NFA)</span> terus memperkuat ketahanan pangan nasional dalam rangka mewujudkan <span style={styles.highlight}>Zero Hunger</span> pada tahun 2030. Data terbaru menunjukkan tren positif dalam penyediaan pangan pokok dan penurunan prevalensi kerawanan pangan di Indonesia.
        </p>
      </div>

      <div style={{ ...styles.grid, gridTemplateColumns: "1fr 1fr" }}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Proyeksi Stok Pangan Pokok Nasional 2024</h3>
          <div style={styles.chartContainer}>
            <ResponsiveContainer>
              <BarChart data={stockData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} label={{ value: "Juta Ton", angle: -90, position: "insideLeft", fontSize: 14 }} />
                <Tooltip wrapperStyle={{ fontSize: "14px" }} />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
                <Bar dataKey="value" fill="#65a30d" barSize={40}>
                  {stockData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p style={styles.chartNote}>Sumber: Badan Pangan Nasional, 2024 – Stok akhir pangan pokok strategis Indonesia.</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Indikator Ketahanan & Kerawanan Pangan 2023</h3>
          <div style={styles.chartContainer}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={foodSecurityData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}%`} labelLine={true}>
                  {foodSecurityData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip wrapperStyle={{ fontSize: "14px" }} />
                <Legend wrapperStyle={{ fontSize: "14px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p style={styles.chartNote}>Sumber: NFA & FAO, 2023 – Penurunan prevalensi kerawanan pangan di Indonesia.</p>
        </div>
      </div>

      <div style={styles.explanation}>
        <p>
          Pada tahun 2023, Indonesia berhasil menurunkan <strong style={styles.strongText}>Prevalence of Undernourishment (PoU)</strong> menjadi <span style={styles.greenText}>8,53%</span> dan <strong style={styles.strongText}>Prevalence of Food Insecurity (FIES)</strong> menjadi <span style={styles.greenText}>4,5%</span>, turun hampir setengahnya dari tahun 2017 yang masih 8,66%. Selain itu, daerah dengan status <strong style={styles.strongText}>rawan pangan</strong> juga menurun dari 74 menjadi 62 kabupaten/kota.
        </p>
      </div>
    </section>
  );
}
