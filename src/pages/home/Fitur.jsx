import React from "react";

export default function FiturWebsite() {
    return (
        <section
            className="
                relative w-full min-h-screen flex items-center justify-center
                px-5 py-12 bg-[#FCFFEC] overflow-hidden
            "
        >
            {/* Background */}
            <div
                className="
                    absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat
                "
                style={{ backgroundImage: "url('/background/herohome.png')", backgroundAttachment: "fixed" }}
            />

            <div className="w-full relative z-10">
                {/* Title */}
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#3B3B0E] mb-8">
                    Fitur Website
                </h2>

                {/* Card */}
                <div
                    className="
                        relative bg-[#F0FCD7] rounded-xl shadow-xl mx-auto
                        px-6 py-8 md:px-10 md:py-10 max-w-[950px]
                    "
                >
                    {/* Divider Tengah */}
                    <div className="
                        hidden md:block absolute left-1/2 top-6 bottom-6
                        w-[2px] bg-[#b7df98]
                    "></div>

                    {/* Grid */}
                    <div className="
                        grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12
                        max-w-[720px] mx-auto
                    ">
                        {/* KIRI */}
                        <div className="flex flex-col gap-10 md:items-end items-center">
                            <div className="group flex flex-col items-center text-center">
                                <img
                                    src="/icon/nuti2.png"
                                    alt="Buku Terpadu"
                                    className="
                                        w-20 md:w-24 transition-all duration-500
                                        drop-shadow-md group-hover:scale-110 group-hover:rotate-3
                                        group-hover:animate-bounce
                                    "
                                />
                                <span className="mt-2 text-lg md:text-xl font-medium text-[#3B3B0E]">
                                    Buku Terpadu
                                </span>
                            </div>

                            <div className="group flex flex-col items-center text-center">
                                <img
                                    src="/icon/nuti3.png"
                                    alt="Produk Unggul"
                                    className="
                                        w-20 md:w-24 transition-all duration-500
                                        drop-shadow-md group-hover:scale-110 group-hover:rotate-3
                                        group-hover:animate-bounce
                                    "
                                />
                                <span className="mt-2 text-lg md:text-xl font-medium text-[#3B3B0E]">
                                    Produk Unggul
                                </span>
                            </div>
                        </div>

                        {/* KANAN */}
                        <div className="flex flex-col gap-10 md:items-start items-center">
                            <div className="group flex flex-col items-center text-center">
                                <img
                                    src="/icon/nuti1.png"
                                    alt="AI Interaktif"
                                    className="
                                        w-20 md:w-24 transition-all duration-500
                                        drop-shadow-md group-hover:scale-110 group-hover:rotate-3
                                        group-hover:animate-bounce
                                    "
                                />
                                <span className="mt-2 text-lg md:text-xl font-medium text-[#3B3B0E]">
                                    AI Interaktif
                                </span>
                            </div>

                            <div className="group flex flex-col items-center text-center">
                                <img
                                    src="/icon/nuti1.png"
                                    alt="Komunitas"
                                    className="
                                        w-20 md:w-24 transition-all duration-500
                                        drop-shadow-md group-hover:scale-110 group-hover:rotate-3
                                        group-hover:animate-bounce
                                    "
                                />
                                <span className="mt-2 text-lg md:text-xl font-medium text-[#3B3B0E]">
                                    Komunitas
                                </span>
                            </div>

                            <div className="group flex flex-col items-center text-center">
                                <img
                                    src="/icon/nuti4.png"
                                    alt="Games"
                                    className="
                                        w-20 md:w-24 transition-all duration-500
                                        drop-shadow-md group-hover:scale-110 group-hover:rotate-3
                                        group-hover:animate-bounce
                                    "
                                />
                                <span className="mt-2 text-lg md:text-xl font-medium text-[#3B3B0E]">
                                    Games
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
