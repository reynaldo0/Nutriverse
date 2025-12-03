import React, { useEffect, useState } from "react";

export default function HeroAbout() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sunTranslate = offsetY * 0.5;

    return (
        <>
            <div className="hero-container min-h-screen flex flex-col bg-gradient-to-b from-[#90C444] to-[#FCFFEC] relative overflow-hidden">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-[url('/background/heroabout.png')] bg-cover bg-center opacity-50"
                    style={{ backgroundAttachment: "fixed" }}
                />

                {/* Matahari */}
                <div className="absolute inset-0 flex top-0 justify-center -translate-y-52 z-0">
                    <img
                        src="/illustrasi/matahari.png"
                        alt="Sun"
                        className="w-40 h-40 md:w-[600px] md:h-[600px] object-contain sun-img"
                        style={{
                            transform: `translateY(${sunTranslate}px)`,
                        }}
                    />
                </div>

                {/* Hero Content */}
                <div className="flex-1 flex flex-col justify-center md:pb-20 items-center px-6 text-center relative">
                    <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-snug z-20 font-nunito">
                        TENTANG
                    </h1>

                    <p className="mt-4 max-w-2xl z-20 font-nunito font-bold pt-2 md:pt-5 text-xl md:text-4xl text-white md:pb-10">
                        Ingin tahu lebih dalam mengenai Nutriverse? Yuk simak halaman ini
                    </p>

                    {/* Ilustrasi bawah */}
                    <div className="mt-10 absolute bottom-0">
                        <img
                            src="/illustrasi/nutiabout.png"
                            alt="Nuti About"
                            className="w-72 md:w-full mx-auto opacity-70 -z-10"
                        />
                    </div>
                </div>
            </div>

            <style>
                {`
                    .sun-img {
                        transition: transform 0.1s linear;
                    }
                `}
            </style>
        </>
    );
}
