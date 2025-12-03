import React, { useEffect, useState } from "react";

export default function HeroAbout() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sunTranslate = offsetY * 0.4;

    return (
        <>
            <div className="min-h-[70vh] md:min-h-[80vh] flex flex-col bg-gradient-to-b from-[#90C444] to-[#FCFFEC] relative overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-[url('/background/heroabout.png')] bg-cover bg-center opacity-40 bg-fixed"
                />

                {/* Matahari */}
                <div className="absolute inset-0 flex justify-center top-0 -translate-y-20 md:-translate-y-36 z-0">
                    <img
                        src="/illustrasi/matahari.png"
                        alt="Sun"
                        className="
                            w-24 h-24 
                            md:w-[350px] md:h-[350px] 
                            object-contain 
                            transition-transform duration-[100ms] ease-linear
                        "
                        style={{
                            transform: `translateY(${sunTranslate}px)`,
                        }}
                    />
                </div>

                {/* Hero Content */}
                <div className="flex-1 flex flex-col justify-center items-center px-4 text-center relative pt-12 md:pt-24">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug z-20 font-nunito">
                        TENTANG
                    </h1>

                    <p className="mt-3 max-w-xl z-20 font-nunito font-bold text-lg md:text-2xl text-white">
                        Ingin tahu lebih dalam mengenai Nutriverse? Yuk simak halaman ini
                    </p>

                    {/* Ilustrasi bawah */}
                    <div className="mt-6 absolute bottom-0">
                        <img
                            src="/illustrasi/nutiabout.png"
                            alt="Nuti About"
                            className="w-52 md:w-[55%] mx-auto opacity-70 -z-10"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
