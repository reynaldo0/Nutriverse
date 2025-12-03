import { useEffect, useState, useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function GlobalHunger() {
  const [progress, setProgress] = useState({
    ghiTrend: [],
    ghiASEAN: [],
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setProgress({
        ghiTrend: [
          { year: "2000", value: 26.1 },
          { year: "2007", value: 29.1 },
          { year: "2014", value: 22.2 },
          { year: "2022", value: 17.9 },
        ],
        ghiASEAN: [
          { country: "Laos", value: 19.2 },
          { country: "Indonesia", value: 17.9 },
          { country: "Kamboja", value: 17.1 },
          { country: "Myanmar", value: 15.6 },
          { country: "Malaysia", value: 12.5 },
          { country: "Thailand", value: 12.0 },
          { country: "Vietnam", value: 11.9 },
        ],
      });
    }, 800);
  }, []);

  const COLORS = ["#166534", "#84cc16", "#a3e635", "#65a30d", "#3f6212", "#bef264", "#d9f99d"];
  const latestGHI = progress.ghiTrend.length ? progress.ghiTrend.at(-1).value : 0;

  const indonesiaGHI =
    progress.ghiASEAN.find((c) => c.country === "Indonesia")?.value || 0;

  const renderCustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="legend-list">
        {payload.map((entry, index) => (
          <li key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: entry.color }}
            />
            {entry.payload.country}: {entry.payload.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section ref={sectionRef} className="gh-section">
      <div className="gh-bg" />

      <div className="gh-container">
        <div className="gh-header fade-in">
          <h2 className="gh-title">
            Tingkat Kelaparan di Indonesia
            <span className="gh-underline" />
          </h2>

          <p className="gh-subtext">
            Berdasarkan laporan <strong className="highlight">Global Hunger Index (GHI) 2022</strong>, Indonesia berada pada skor{" "}
            <strong className="highlight">{indonesiaGHI}</strong> dengan kategori
            <em> “moderate”.</em> Upaya menuju <strong className="highlight">Zero Hunger</strong> tetap membutuhkan komitmen panjang.
          </p>
        </div>

        <div className="chart-grid">

          {/* BAR CHART */}
          <div className="chart-card fade-in-up">
            <h3 className="chart-title">Tren Skor GHI Indonesia (2000–2022)</h3>

            <div className="chart-box">
              <ResponsiveContainer>
                <BarChart data={progress.ghiTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" barSize={45} radius={[8, 8, 0, 0]}>
                    {progress.ghiTrend.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="chart-source">Sumber: GHI 2000–2022</p>
          </div>

          {/* PIE CHART */}
          <div className="chart-card fade-in-up delay-200">
            <h3 className="chart-title">Perbandingan GHI ASEAN (2022)</h3>

            <div className="chart-box">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={progress.ghiASEAN}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    dataKey="value"
                    label={({ country, value }) => `${country}: ${value}`}
                  >
                    {progress.ghiASEAN.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend content={renderCustomLegend} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p className="chart-source">Sumber: GHI ASEAN 2022</p>
          </div>
        </div>

        <div className="gh-summary fade-in-up delay-400">
          <p>
            Dengan skor <strong className="text-green">{latestGHI}</strong>, Indonesia menunjukkan perkembangan positif dari dua dekade terakhir.
            Tantangan seperti <strong>stunting</strong> dan <strong>malnutrisi</strong> tetap menjadi fokus utama dalam mencapai{" "}
            <span className="highlight">Zero Hunger 2030</span>.
          </p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .gh-section {
          width: 100%;
          min-height: 100vh;
          padding: 90px 20px;
          background: #FCFFEC;
          position: relative;
          overflow: hidden;
        }

        .gh-bg {
          background-image: url('/background/herohome.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          opacity: 0.5;
          position: absolute;
          inset: 0;
        }

        .gh-container {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: auto;
        }

        .gh-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .gh-title {
          font-size: 55px;
          font-weight: 900;
          color: #3B3B0E;
        }

        .gh-underline {
          width: 90px;
          height: 4px;
          background: #DDA73A;
          display: block;
          margin: 12px auto 0;
          border-radius: 5px;
        }

        .gh-subtext {
          max-width: 900px;
          margin: 20px auto 0;
          font-size: 20px;
          line-height: 1.6;
        }

        .highlight {
          color: #DDA73A;
          font-weight: 700;
        }

        .chart-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .chart-card {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 25px;
          padding: 30px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        .chart-title {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .chart-box {
          width: 100%;
          height: 350px;
        }

        .chart-source {
          text-align: center;
          margin-top: 10px;
          font-size: 14px;
          opacity: 0.7;
          font-style: italic;
        }

        .legend-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 12px;
          list-style: none;
          padding: 0;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-color {
          width: 14px;
          height: 14px;
        }

        .gh-summary {
          margin-top: 50px;
          text-align: center;
          font-size: 20px;
          line-height: 1.7;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s forwards;
        }

        .delay-200 { animation-delay: .2s; }
        .delay-400 { animation-delay: .4s; }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
