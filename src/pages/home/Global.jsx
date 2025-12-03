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
      <ul className="flex flex-wrap justify-center gap-2 mt-2">
        {payload.map((entry, index) => (
          <li key={index} className="flex items-center gap-1 text-[10px]">
            <span
              className="w-3 h-3"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.payload.country}: {entry.payload.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] px-5 py-14 bg-[#FCFFEC] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/background/herohome.png')] bg-cover bg-center opacity-40"
        style={{ backgroundAttachment: "fixed" }}
      />

      <div className="relative z-10 max-w-[1050px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl font-extrabold text-[#3B3B0E]">
            Tingkat Kelaparan di Indonesia
          </h2>
          <div className="w-16 h-1 bg-[#DDA73A] mx-auto mt-2 rounded-md" />

          <p className="max-w-[760px] mx-auto mt-4 text-[16px]">
            Berdasarkan laporan <strong className="text-[#537d13]">Global Hunger Index (GHI) 2022</strong>,
            Indonesia berada pada skor{" "}
            <strong className="text-[#537d13]">{indonesiaGHI}</strong> dengan kategori
            <em> “moderate”.</em> Upaya menuju <strong className="text-[#537d13]">Zero Hunger</strong> tetap membutuhkan komitmen panjang.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* BAR CHART */}
          <div className="bg-white/80 rounded-2xl p-5 shadow-lg animate-fade-up">
            <h3 className="text-center text-[17px] mb-2">Tren Skor GHI Indonesia (2000–2022)</h3>

            <div className="w-full h-[210px]">
              <ResponsiveContainer>
                <BarChart data={progress.ghiTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip contentStyle={{ fontSize: 10 }} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="value" barSize={28} radius={[6, 6, 0, 0]}>
                    {progress.ghiTrend.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-center text-[10px] mt-1 opacity-60">Sumber: GHI 2000–2022</p>
          </div>

          {/* PIE CHART */}
          <div className="bg-white/80 rounded-2xl p-5 shadow-lg animate-fade-up delay-200">
            <h3 className="text-center text-[17px] mb-2">Perbandingan GHI ASEAN (2022)</h3>

            <div className="w-full h-[210px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={progress.ghiASEAN}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    label={({ country, value }) =>
                      `${country} (${value})`
                    }
                    labelStyle={{ fontSize: 10 }}
                  >
                    {progress.ghiASEAN.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>

                  <Tooltip contentStyle={{ fontSize: 10 }} />
                  <Legend content={renderCustomLegend} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p className="text-center text-[10px] mt-1 opacity-60">
              Sumber: GHI ASEAN 2022
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="text-center mt-8 animate-fade-up delay-400">
          <p className="text-[16px]">
            Dengan skor{" "}
            <strong className="text-green-700">{latestGHI}</strong>, Indonesia menunjukkan
            perkembangan positif dari dua dekade terakhir.
            Tantangan seperti <strong>stunting</strong> dan <strong>malnutrisi</strong> tetap menjadi fokus utama
            menuju <span className="text-[#537d13] font-semibold">Zero Hunger 2030</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
