import React, { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

export default function RulesLeaderboard({ schools }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => setTimeout(() => setAnimate(true), 300), []);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center w-full px-4 pt-10 pb-10 relative bg-[#F7FDEB]">
      <div
        className="absolute inset-0 bg-[url('/background/herohome.png')] bg-cover bg-center opacity-30"
        style={{ backgroundAttachment: "fixed" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full z-10">
        {/* Cara Main */}
        <div
          className={`bg-[#F4FFE2] rounded-2xl shadow-md p-6 md:p-8 transition-all duration-700 ease-out ${
            animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2E17] mb-4 text-center">Cara Main</h2>
          <ol className="list-decimal pl-5 space-y-3 text-[#3A2E17] text-base md:text-lg leading-relaxed">
            <li>Pilih produk tanaman <span className="text-green-600 font-semibold">(1 produk = 5 pertanyaan acak)</span></li>
            <li>Produk muncul di pohon dan pertanyaan muncul di sebelahnya</li>
            <li>Jawaban benar +5 poin, salah -2 poin</li>
          </ol>
        </div>

        {/* Leaderboard */}
        <div
          className={`bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-5 border border-primary-100 hover:shadow-xl transition transform ${
            animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-center md:text-left text-secondary-200 flex items-center justify-center md:justify-start gap-2">
            <Trophy className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" /> Peringkat Sekolah
          </h2>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full divide-y divide-primary-100 min-w-[350px]">
              <thead className="bg-primary-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-bold text-secondary-200 uppercase tracking-wider">#</th>
                  <th className="px-4 py-2 text-left text-xs font-bold text-secondary-200 uppercase tracking-wider">Nama Sekolah</th>
                  <th className="px-4 py-2 text-left text-xs font-bold text-secondary-200 uppercase tracking-wider">Siswa</th>
                  <th className="px-4 py-2 text-left text-xs font-bold text-secondary-200 uppercase tracking-wider">Poin</th>
                  <th className="px-4 py-2 text-left text-xs font-bold text-secondary-200 uppercase tracking-wider">Team Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-100">
                {schools.map((school, i) => (
                  <tr key={school.id} className="hover:bg-gray-100 transition">
                    <td className="px-4 py-2 text-secondary-200 font-semibold">{i + 1}</td>
                    <td className="px-4 py-2 text-secondary-200">{school.name}</td>
                    <td className="px-4 py-2 text-secondary-200">{school.users_count}</td>
                    <td className="px-4 py-2 text-secondary-200 font-semibold">{school.points} poin</td>
                    <td className="px-4 py-2 text-secondary-200 truncate max-w-[120px]">{school.team_code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-3">
            {schools.map((school, i) => (
              <div key={school.id} className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md border border-primary-100 hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-secondary-200 text-base">#{i+1}</span>
                  <span className="font-semibold text-primary-100 text-sm">{school.points} poin</span>
                </div>
                <h3 className="text-base font-bold text-secondary-200 truncate">{school.name}</h3>
                <p className="text-xs text-secondary-200 mt-1 truncate">
                  Team Code: <span className="font-medium text-primary-100">{school.team_code}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
