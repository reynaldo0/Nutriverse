import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    // Simulasi user login (frontend only)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = isLoggedIn
        ? {
            name: "User Demo",
            avatar_url: "https://ui-avatars.com/api/?name=User",
        }
        : null;

    const mainMenu = [
        { name: "Beranda", path: "/" },
        { name: "Tentang", path: "/about" },
        { name: "Artikel", path: "/article" },
        { name: "Komunitas", path: "/community" },
        {
            name: "Permainan",
            children: [
                { name: "NutriTree", path: "/nutritree" },
                { name: "NutriPlate", path: "/nutriplate" },
            ],
        },
    ];

    const authMenu = [
        { name: "Masuk", path: "/login" },
        { name: "Buat Akun", path: "/register" },
    ];

    return (
        <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[78%]">
            <div className="flex items-center justify-between 
                bg-white/40 backdrop-blur-lg border border-white/20 
                rounded-full shadow-lg px-4 py-2">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/icon/logo-t.png"
                        alt="Logo"
                        className="h-9 object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 items-center justify-center space-x-5 font-semibold text-lg">
                    {mainMenu.map((item) =>
                        !item.children ? (
                            <a
                                key={item.name}
                                href={item.path}
                                className="relative text-secondary-200 transition duration-300
                                after:content-[''] after:absolute after:left-0 after:-bottom-1
                                after:h-[2px] after:w-0 after:bg-secondary-200 after:transition-all
                                after:duration-300 hover:after:w-full hover:text-secondary-200"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <div key={item.name} className="relative group">
                                <button className="flex items-center space-x-1 text-secondary-200 font-semibold text-lg">
                                    <span>{item.name}</span>
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown */}
                                <div className="absolute top-full left-0 mt-1 w-36 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                                    {item.children.map((child) => (
                                        <a
                                            key={child.name}
                                            href={child.path}
                                            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                        >
                                            {child.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Desktop Auth / User */}
                <div className="hidden md:flex items-center space-x-3 text-base relative">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center space-x-2"
                            >
                                <span className="font-semibold text-gray-900 text-sm">
                                    {user.name}
                                </span>
                                <img
                                    src={user.avatar_url}
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full border border-black"
                                />
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 mt-1 w-40 bg-white shadow-lg rounded-xl py-2">
                                    <a
                                        href="/profile"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                    >
                                        Edit Profil
                                    </a>
                                    <button
                                        onClick={() => setIsLoggedIn(false)}
                                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 text-sm"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        authMenu.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className={`px-4 py-1.5 rounded-full text-sm ${
                                    item.name === "Masuk"
                                        ? "bg-secondary-200 text-white font-bold"
                                        : "border border-secondary-200 text-secondary-200 font-bold hover:bg-secondary-200 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))
                    )}
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-7 h-7"
                >
                    {isOpen ? (
                        <XMarkIcon className="h-7 w-7 text-primary-100" />
                    ) : (
                        <Bars3Icon className="h-7 w-7 text-primary-100" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-20 right-4 w-64 bg-white/95 shadow-lg rounded-xl px-5 py-5 space-y-4 transition-all ${
                    isOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                {/* User */}
                {user && (
                    <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
                        <img
                            src={user.avatar_url}
                            alt="Profile"
                            className="h-9 w-9 rounded-full"
                        />
                        <p className="font-semibold text-sm">{user.name}</p>
                    </div>
                )}

                {/* Main Menu */}
                {mainMenu.map((item) =>
                    !item.children ? (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-900 font-semibold text-sm hover:text-secondary-200"
                        >
                            {item.name}
                        </a>
                    ) : (
                        <div key={item.name} className="w-full space-y-1">
                            <span className="font-bold text-secondary-200 text-sm">
                                {item.name}
                            </span>
                            {item.children.map((child) => (
                                <a
                                    key={child.name}
                                    href={child.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block pl-4 text-gray-700 hover:text-secondary-200 text-sm"
                                >
                                    {child.name}
                                </a>
                            ))}
                        </div>
                    )
                )}

                {/* Auth */}
                {!user ? (
                    <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                        <a
                            href="/login"
                            className="text-center px-4 py-2 rounded-full bg-secondary-200 text-white font-bold text-sm"
                        >
                            Masuk
                        </a>
                        <a
                            href="/register"
                            className="text-center px-4 py-2 rounded-full border border-secondary-200 text-secondary-200 font-bold text-sm"
                        >
                            Buat Akun
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                        <a
                            href="/profile"
                            className="text-center px-4 py-2 rounded-full border text-sm"
                        >
                            Edit Profil
                        </a>
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                setIsOpen(false);
                            }}
                            className="text-center px-4 py-2 rounded-full border border-red-500 text-red-500 text-sm"
                        >
                            Keluar
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
