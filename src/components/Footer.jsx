import React from "react";
import {
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
    FaMapMarkerAlt,
    FaEnvelope,
} from "react-icons/fa";
import Cta from "./Cta";

export default function Footer() {
    return (
        <>
            <Cta />
            <footer className="relative text-white bg-[#66863E]">
                <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-10 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Hubungi Kami */}
                    <div className="flex flex-col space-y-1.5">
                        <img
                            src="/icon/logo-footer.png"
                            alt="NutriVerse"
                            className="w-20 mb-1"
                        />
                        <h3 className="text-sm font-semibold">Hubungi kami</h3>

                        <p className="flex items-center gap-1.5 text-xs">
                            <FaMapMarkerAlt className="text-sm text-white" />
                            <span>Universitas Negeri Jakarta (UNJ)</span>
                        </p>

                        <p className="flex items-center gap-1.5 text-xs">
                            <FaEnvelope className="text-sm text-white" />
                            <a
                                href="mailto:Nutinutriverse@gmail.com"
                                className="hover:text-gray-300 transition"
                            >
                                Nutinutriverse@gmail.com
                            </a>
                        </p>

                        <div className="flex space-x-1.5 mt-1.5">
                            {[
                                { icon: <FaTwitter />, href: "https://twitter.com/" },
                                { icon: <FaInstagram />, href: "https://instagram.com/" },
                                { icon: <FaLinkedinIn />, href: "https://linkedin.com/" },
                                { icon: <FaTiktok />, href: "https://tiktok.com/" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 bg-white text-[#4C7C18] rounded-full hover:bg-gray-300 transition transform hover:scale-105"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Akses Konten */}
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-sm font-semibold">Akses konten</h3>
                        {["Beranda", "Tentang", "Artikel", "Komunitas", "Games 1", "Games 2"].map((item, i) => (
                            <a
                                key={i}
                                href={`/${item.toLowerCase().replace(" ", "")}`}
                                className="text-xs hover:text-gray-300 transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Sumber Data */}
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-sm font-semibold">Sumber data</h3>
                        {[
                            { name: "Kemendikbud.go.id", href: "https://www.kemdikbud.go.id/" },
                            { name: "IPB University", href: "https://ipb.ac.id/" },
                            { name: "PG Pradjeka", href: "https://pgpradjeka.co.id/" },
                            { name: "Univ. Brawijaya", href: "https://ub.ac.id/" },
                            { name: "UGM", href: "https://ugm.ac.id/" },
                            { name: "BBC", href: "https://www.bbc.com/" },
                            { name: "CNBC Indonesia", href: "https://www.cnbcindonesia.com/research/20230127075927-128-408649/kudu-berbenah-tingkat-kelaparan-ri-masih-urutan-77-dunia" },
                            { name: "BPN", href: "https://badanpangan.go.id/blog/post/dukung-atasi-zero-hunger-badan-pangan-nasional-perkuat-ketersediaan-pangan-pokok-strategis" },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs hover:text-gray-300 transition"
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>

                    {/* Credit */}
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-sm font-semibold">Credit</h3>
                        <a
                            href="https://www.pinterest.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs hover:text-gray-300 transition"
                        >
                            Pinterest
                        </a>
                    </div>
                </div>

                {/* Footer Bawah */}
                <div className="relative z-10 text-center text-[10px] py-2 bg-[#2F4F12] -mt-2">
                    © 2025 NutriVerse. All rights reserved.
                </div>
            </footer>
        </>
    );
}
