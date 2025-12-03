import React, { useEffect, useState } from "react";

export default function HeroKomunitas() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sunTranslate = offsetY * 0.5;

    return (
        <div className="min-h-[80vh] flex flex-col bg-gradient-to-b from-[#90C444] to-[#FCFFEC]">

            {/* Background */}
            <div
                className="absolute inset-0 bg-[url('/background/herokomunitas.png')] bg-cover bg-center opacity-40"
                style={{ backgroundAttachment: "fixed" }}
            />

            {/* Matahari */}
            <div className="absolute inset-0 flex justify-center -translate-y-32 z-0">
                <img
                    src="/illustrasi/matahari.png"
                    alt="Sun"
                    className="w-32 h-32 md:w-[350px] md:h-[350px] object-contain"
                    style={{
                        transform: `translateY(${sunTranslate}px)`,
                        transition: "transform 0.1s linear",
                    }}
                />
            </div>

            {/* Hero Content */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 text-center relative mt-8">

                <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-snug z-20 font-nunito">
                    KOMUNITAS
                </h1>

                <p className="mt-3 max-w-xl z-20 font-nunito font-bold text-lg md:text-3xl text-white md:pb-4">
                    Mari bersama sama membuat maju sektor pertanian pada Era Digital ini
                </p>

                {/* Illustration bottom */}
                <div className="absolute bottom-0">
                    <img
                        src="/illustrasi/herokomunitas.png"
                        alt="Komunitas"
                        className="w-56 md:w-[55%] mx-auto opacity-60 -z-10"
                    />
                </div>
            </div>
        </div>
    );
}
