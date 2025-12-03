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

export default function ZeroHunger() {
  const [progress, setProgress] = useState({
    kerawanan: 0,
    undernourishment: 0,
    fies: 0,
  });

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

  const COLORS = [
    "#16a34a",
    "#65a30d",
    "#166534",
    "#3f6212",
    "#84cc16",
    "#a3e635",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-4 font-sans relative overflow-hidden bg-gradient-to-b from-[#fafbe9] via-[#ffe7b3] to-[#f5c16c]"
    >
      {/* Background image */}
      <div
        className="absolute bottom-0 left-0 w-full h-[350px] bg-no-repeat bg-bottom bg-cover"
        style={{ backgroundImage: "url(/background/bg-tangan.png)" }}
      ></div>

      {/* Background overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-[rgba(250,251,233,0.3)] to-transparent"></div>

      {/* Title section */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex justify-center items-center gap-2 mb-3">
          <img src="/icon/zerohunger.png" alt="SDG 2 Icon" className="w-12 h-12" />
          <h2 className="text-4xl font-extrabold text-[#3B3B0E]">Zero Hunger</h2>
        </div>

        <p className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed">
          Pemerintah Indonesia melalui{" "}
          <span className="text-[#DDA73A] font-semibold">
            Badan Pangan Nasional (NFA)
          </span>{" "}
          terus memperkuat ketahanan pangan nasional dalam rangka mewujudkan
          <span className="text-[#DDA73A] font-semibold"> Zero Hunger</span> pada tahun 2030.
          Data terbaru menunjukkan tren positif dalam penyediaan pangan pokok dan
          penurunan prevalensi kerawanan pangan di Indonesia.
        </p>
      </div>

      {/* Grid charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-xl p-5 relative">
          <h3 className="absolute top-[-1.25rem] left-1/2 -translate-x-1/2 bg-[#3B3B0E] text-white px-4 py-2 rounded-t-xl text-sm font-semibold">
            Proyeksi Stok Pangan 2024
          </h3>

          <div className="mt-7 w-full h-56">
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

          <p className="mt-2 text-xs text-center text-gray-600">
            Sumber: Badan Pangan Nasional, 2024
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-xl p-5 relative">
          <h3 className="absolute top-[-1.25rem] left-1/2 -translate-x-1/2 bg-[#3B3B0E] text-white px-4 py-2 rounded-t-xl text-sm font-semibold">
            Indikator Ketahanan Pangan 2023
          </h3>

          <div className="mt-7 w-full h-56">
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

          <p className="mt-2 text-xs text-center text-gray-600">
            Sumber: NFA & FAO, 2023
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="max-w-3xl mx-auto mt-8 text-center text-gray-600 text-base leading-relaxed">
        <p>
          Pada tahun 2023, Indonesia berhasil menurunkan tingkat{" "}
          <strong className="font-semibold">undernourishment</strong> menjadi{" "}
          <span className="text-green-800 font-semibold">8,53%</span> dan{" "}
          <strong className="font-semibold">food insecurity</strong> menjadi
          <span className="text-green-800 font-semibold"> 4,5%</span>.
        </p>
      </div>
    </section>
  );
}
