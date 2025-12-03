import React, { useState, useEffect } from "react";
import { Sprout } from "lucide-react";

export default function ProdukUnggul() {
    const products = [
        {
            icon: "/produk-unggul/kultur.png",
            alt: "Kultur",
            label: "Kultur Jaringan",
            desc: "Kultur jaringan adalah teknik bioteknologi untuk memperbanyak tanaman dengan mengambil bagian kecil dari tanaman (sel, jaringan, atau organ) dan menumbuhkannya di lingkungan laboratorium yang steril dan terkontrol (in vitro).",
        },
        {
            icon: "/produk-unggul/rekayasa.png",
            alt: "DNA",
            label: "Rekayasa Genetika",
            desc: "Rekayasa Genetika adalah proses memodifikasi DNA untuk menghasilkan sifat baru yang diinginkan, seperti ketahanan terhadap hama atau peningkatan nilai gizi. Proses ini melibatkan ekstraksi DNA, contohnya penggunaan bakteri Agrobacterium.",
        },
        {
            icon: "/produk-unggul/botol.png",
            alt: "Botol",
            label: "Bioteknologi",
            desc: "Bioteknologi adalah ilmu dan teknologi yang memanfaatkan sistem biologis, organisme hidup, atau bagian-bagiannya untuk mengembangkan atau menciptakan produk dan proses yang bermanfaat bagi manusia dan lingkungan.",
        },
        {
            icon: "/produk-unggul/seleksi.png",
            alt: "Seleksi",
            label: "Seleksi Masal",
            desc: "Seleksi massa adalah metode yang bertujuan meningkatkan populasi campuran dengan memilih individu berdasarkan penampilan fenotipik, kemudian benihnya dikumpulkan dan ditanam pada generasi berikutnya untuk meningkatkan frekuensi gen.",
        },
        {
            icon: "/produk-unggul/okulasi.png",
            alt: "Okulasi",
            label: "Okulasi Tanaman",
            desc: "Okulasi adalah teknik menggabungkan sifat unggul dari kedua bagian tanaman, seperti sistem perakaran yang kuat dari batang bawah dan kualitas buah atau bunga yang baik dari batang atas, untuk menghasilkan varietas tanaman yang lebih baik dan unggul.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // SIMULASI
    const [showSimulation, setShowSimulation] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("");
    const [simulationResult, setSimulationResult] = useState(null);
    const [progress, setProgress] = useState(0);

    const simulationData = {
        "Kultur Jaringan": {
            impact: "+45% hasil panen, +30% efisiensi bibit, ramah lingkungan.",
            desc: "Kultur jaringan mempercepat perbanyakan tanaman unggul dan mendorong ketahanan pangan dengan efisiensi tinggi.",
        },
        "Rekayasa Genetika": {
            impact: "+60% ketahanan terhadap hama, +25% nilai gizi.",
            desc: "Rekayasa genetika memungkinkan tanaman lebih tahan terhadap penyakit dan meningkatkan kandungan nutrisi.",
        },
        "Bioteknologi": {
            impact: "+40% produktivitas, +35% efisiensi sumber daya, -20% limbah pertanian.",
            desc: "Bioteknologi membantu menciptakan tanaman yang adaptif terhadap perubahan iklim dan mengurangi ketergantungan pada bahan kimia.",
        },
        "Seleksi Masal": {
            impact: "+30% kualitas hasil panen, +20% keragaman genetik.",
            desc: "Seleksi masal menjaga keberagaman genetik tanaman, menghasilkan varietas yang tahan terhadap kondisi ekstrem dan memperkuat ketahanan pangan.",
        },
        "Okulasi Tanaman": {
            impact: "+50% ketahanan tanaman, +40% kualitas buah.",
            desc: "Okulasi tanaman menggabungkan keunggulan dua varietas untuk menciptakan tanaman yang lebih produktif dan tahan lama.",
        },
    };

    useEffect(() => {
        setAnimate(true);
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowDetail(false);
            setSelectedProduct(null);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowDetail(false);
            setSelectedProduct(null);
        }
    };

    const startSimulation = () => {
        if (!selectedMethod) return;
        setProgress(0);
        setSimulationResult(null);

        let prog = 0;
        const interval = setInterval(() => {
            prog += 10;
            if (prog >= 100) {
                clearInterval(interval);
                setProgress(100);
                setSimulationResult(simulationData[selectedMethod]);
            } else {
                setProgress(prog);
            }
        }, 200);
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center w-full px-4 pt-16 pb-12 bg-[#FCFFEC] overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/background/heroartikel.png')] opacity-40 bg-no-repeat bg-cover bg-top"
                style={{ backgroundAttachment: "fixed", zIndex: 0 }}
            />

            <div className="relative z-10 flex flex-col items-center w-full">
                <h2 className="text-4xl md:text-4xl font-extrabold text-[#3B3B0E] mb-8 tracking-wide">
                    Produk Unggul
                </h2>

                {/* Indikator */}
                <div className="relative flex items-center justify-center w-full max-w-2xl mb-8">
                    <div className="absolute w-full h-1 bg-[#3B3B0E] rounded"></div>
                    <div className="flex w-full justify-between relative z-10 px-4">
                        {products.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    i === currentIndex
                                        ? "bg-[#88A825] scale-125 shadow-lg"
                                        : "bg-[#3B3B0E]"
                                }`}
                                onClick={() => {
                                    setCurrentIndex(i);
                                    setShowDetail(false);
                                    setSelectedProduct(null);
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative w-full max-w-3xl overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {products.map((p, i) => (
                            <div
                                key={i}
                                className="w-full flex justify-center items-center flex-shrink-0"
                            >
                                <div
                                    className={`flex flex-col items-center transition-all duration-700 ease-out ${
                                        animate
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 -translate-y-8"
                                    }`}
                                >
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-xl border-2 border-[#E0EBD2] flex items-center justify-center hover:scale-110 transition-transform duration-500 overflow-hidden">
                                        <img
                                            src={p.icon}
                                            alt={p.alt}
                                            className="max-w-[75%] max-h-[75%] object-contain"
                                        />
                                    </div>

                                    <p className="mt-4 text-xl md:text-2xl font-semibold text-[#3B3B0E]">
                                        {p.label}
                                    </p>

                                    <button
                                        onClick={() => {
                                            setSelectedProduct(p);
                                            setShowDetail(true);
                                            setShowSimulation(false);
                                        }}
                                        className="mt-4 px-6 py-3 rounded-full bg-[#88A825] text-white font-semibold shadow-md hover:bg-[#6e881f] transition"
                                    >
                                        Jelajahi
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigasi */}
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#88A825] bg-white text-[#3B3B0E] shadow-lg z-20 disabled:opacity-40 hover:bg-[#88A825] hover:text-white transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex === products.length - 1}
                        className="absolute top-1/2 right-1 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#88A825] bg-white text-[#3B3B0E] shadow-lg z-20 disabled:opacity-40 hover:bg-[#88A825] hover:text-white transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* DETAIL */}
                {showDetail && selectedProduct && (
                    <div className="mt-10 max-w-3xl w-full bg-[#F6FFE5] rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-[#3B3B0E] mb-3">
                                {selectedProduct.label}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed mb-4">
                                {selectedProduct.desc}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => setShowDetail(false)}
                                    className="px-5 py-2 bg-[#A6E272] text-[#224C14] font-semibold rounded-full shadow-md hover:bg-[#94D45E] transition"
                                >
                                    Kembali
                                </button>
                                <button
                                    onClick={() => {
                                        setShowSimulation(true);
                                        setShowDetail(false);
                                    }}
                                    className="px-5 py-2 bg-[#88A825] text-white font-semibold rounded-full shadow-md hover:bg-[#6e881f] transition"
                                >
                                    Simulasi Pangan
                                </button>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                src={selectedProduct.icon}
                                alt={selectedProduct.alt}
                                className="max-w-[120px] md:max-w-[140px] object-contain"
                            />
                        </div>
                    </div>
                )}

                {/* SIMULASI */}
                {showSimulation && (
                    <div className="mt-12 w-full max-w-2xl bg-[#F5FFE8] rounded-3xl shadow-xl p-8 text-center border border-[#BFE3A2]">
                        <h3 className="text-2xl font-bold text-[#3B3B0E] mb-4">
                            Simulasi Pangan Berkelanjutan
                        </h3>
                        <p className="text-gray-700 mb-6 text-sm md:text-base">
                            Pilih metode pertanian dan lihat kontribusinya.
                        </p>

                        {/* METODE */}
                        <div className="flex flex-wrap gap-3 justify-center mb-6">
                            {Object.keys(simulationData).map((method) => (
                                <button
                                    key={method}
                                    onClick={() => setSelectedMethod(method)}
                                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                                        selectedMethod === method
                                            ? "bg-[#88A825] text-white shadow-lg"
                                            : "bg-white border-2 border-[#88A825] text-[#3B3B0E] hover:bg-[#f3fbe3]"
                                    }`}
                                >
                                    {method}
                                </button>
                            ))}
                        </div>

                        {/* MULAI */}
                        <button
                            onClick={startSimulation}
                            disabled={!selectedMethod}
                            className="px-8 py-3 bg-[#A6E272] text-[#224C14] font-bold rounded-full shadow-md hover:bg-[#8FD04E] transition disabled:opacity-40 text-sm"
                        >
                            Mulai Simulasi
                        </button>

                        {/* PROGRESS */}
                        {progress > 0 && (
                            <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
                                <div
                                    className="h-4 bg-[#88A825] rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        )}

                        {/* HASIL */}
                        {simulationResult && (
                            <div className="mt-8 bg-white p-5 rounded-2xl shadow-inner text-left">
                                <h4 className="text-xl font-bold text-[#3B3B0E] mb-2">
                                    Dampak dari {selectedMethod}
                                </h4>
                                <p className="text-base text-gray-700 mb-2">
                                    {simulationResult.desc}
                                </p>
                                <div className="flex items-center gap-2 text-[#507A1C] font-semibold text-lg">
                                    <Sprout className="w-5 h-5 text-[#88A825]" />
                                    <span>{simulationResult.impact}</span>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={() => {
                                setShowSimulation(false);
                                setShowDetail(true);
                                setSelectedMethod("");
                                setSimulationResult(null);
                                setProgress(0);
                            }}
                            className="mt-6 px-6 py-2 bg-[#94D45E] text-[#224C14] font-semibold rounded-full shadow-md hover:bg-[#7AC84E] transition text-sm"
                        >
                            Kembali ke Produk
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
