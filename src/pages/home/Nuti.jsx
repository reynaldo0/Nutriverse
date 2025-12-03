import React, { useEffect, useState } from "react";

export default function HeroHome() {
    const [offsetY, setOffsetY] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sunTranslate = offsetY * 0.5;

    const handleClick = () => {
        setClicked(true);
        const nutiSection = document.getElementById("nuti-section");
        if (nutiSection) {
            setTimeout(() => {
                nutiSection.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

    return (
        <>
            <div className="hero-container min-h-[80vh] flex flex-col bg-gradient-to-b from-[#90C444] to-[#FCFFEC]">
                
                {/* Background */}
                <div
                    className="absolute inset-0 bg-[url('/background/herohome.png')] bg-cover bg-center opacity-40"
                    style={{ backgroundAttachment: "fixed" }}
                />

                {/* Matahari */}
                <div className="absolute inset-0 flex justify-center -translate-y-32 z-0">
                    <img
                        src="/illustrasi/matahari.png"
                        alt="Sun"
                        className="w-32 h-32 md:w-[350px] md:h-[350px] object-contain sun-img"
                        style={{
                            transform: `translateY(${sunTranslate}px)`,
                        }}
                    />
                </div>

                {/* Isi Hero */}
                <div className="flex-1 flex flex-col justify-center items-center px-6 text-center relative mt-10">
                    
                    <h1 className="text-3xl md:text-6xl font-extrabold text-white z-20 font-nunito">
                        NUTRIVERS
                    </h1>

                    <p className="mt-3 text-white max-w-xl z-20 font-nunito font-bold text-lg md:text-3xl md:pb-4">
                        Tingkatkan literasi kamu dengan pemanfaatan tumbuhan
                    </p>

                    <button
                        onClick={handleClick}
                        className={`
                            mt-5 px-6 md:px-10 py-3 md:py-4 rounded-full shadow-md transition z-20 
                            text-xl md:text-3xl font-nunito font-extrabold
                            ${
                                clicked
                                    ? "bg-[#90C444] text-white"
                                    : "bg-[#EDFFCD] text-[#3F3313] hover:bg-[#90C444] hover:text-white"
                            }
                        `}
                    >
                        Mulai
                    </button>

                    {/* Ilustrasi bawah */}
                    <div className="absolute bottom-0">
                        <img
                            src="/illustrasi/herohome.png"
                            alt="ASN"
                            className="w-56 md:w-[60%] mx-auto opacity-60 -z-10"
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
