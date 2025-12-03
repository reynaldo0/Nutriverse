import React, { useState } from "react";
import { User, Mail, MapPin, UploadCloud, CheckCircle2 } from "lucide-react";

const Form = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F0FCD7] p-6 lg:p-16">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
                style={{ backgroundImage: "url('/background/herohome.png')" }}
            ></div>

            {/* FORM WRAPPER */}
            <form
                onSubmit={handleSubmit}
                className="
                    relative flex flex-col-reverse lg:flex-row gap-10
                    bg-white/70 backdrop-blur-xl
                    rounded-3xl shadow-2xl
                    w-full max-w-[1100px]
                    p-8 lg:p-14
                    scale-[0.82] origin-top
                    md:scale-[0.9]
                    lg:scale-100
                "
            >

                {/* LEFT FORM CONTENT */}
                <div className="flex-1 flex flex-col gap-5">
                    <h1 className="text-[30px] font-bold text-[#3F3313]">
                        Dari kamu untuk{" "}
                        <span className="bg-[#3F3313] text-white px-3 py-1 rounded-lg">
                            Nutriverse
                        </span>
                    </h1>

                    {/* Nama */}
                    <div className="flex items-center bg-[#f3f3f3] py-3 px-5 rounded-full shadow-sm">
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            required
                            className="flex-grow bg-transparent outline-none"
                        />
                        <User className="text-gray-400 w-5" />
                    </div>

                    {/* Email + Daerah */}
                    <div className="flex gap-3 flex-wrap">
                        <div className="flex-1 flex items-center bg-[#f3f3f3] py-3 px-5 rounded-full shadow-sm min-w-[200px]">
                            <input
                                type="email"
                                placeholder="Email Aktif"
                                required
                                className="flex-grow bg-transparent outline-none"
                            />
                            <Mail className="text-gray-400 w-5" />
                        </div>

                        <div className="flex-1 flex items-center bg-[#f3f3f3] py-3 px-5 rounded-full shadow-sm min-w-[200px]">
                            <input
                                type="text"
                                placeholder="Asal Daerah"
                                required
                                className="flex-grow bg-transparent outline-none"
                            />
                            <MapPin className="text-gray-400 w-5" />
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <textarea
                        placeholder="Apa fitur yang ingin ditambahkan?"
                        rows="3"
                        className="w-full p-4 bg-[#f3f3f3] rounded-2xl shadow-sm outline-none resize-none"
                    ></textarea>

                    {/* Upload Section */}
                    <div className="flex gap-4 items-stretch">
                        {/* Preview */}
                        <div className="w-[150px] h-[150px] bg-[#fafafa] border border-gray-300 rounded-xl flex items-center justify-center overflow-hidden">
                            {previewImage ? (
                                <img src={previewImage} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-500">No file</span>
                            )}
                        </div>

                        {/* Upload box */}
                        <label
                            htmlFor="fileUpload"
                            className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-[#fafafa] rounded-2xl p-6 cursor-pointer text-center hover:bg-gray-100 transition"
                        >
                            <UploadCloud className="w-9 text-gray-400 mb-2" />
                            <p>
                                <span className="underline">Click to upload</span> or drag & drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                PNG, JPG, JPEG, PDF, DOC, MP4 supported
                            </p>
                            <input
                                id="fileUpload"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </label>
                    </div>

                    {/* Cerita */}
                    <textarea
                        placeholder="Ceritakan pengalamanmu..."
                        rows="4"
                        className="w-full p-4 bg-[#f3f3f3] rounded-2xl shadow-sm outline-none resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#90C444] hover:bg-[#7CB13B] text-white font-bold rounded-full transition"
                    >
                        Kirim
                    </button>
                </div>

                {/* RIGHT Illustration */}
                <div className="flex items-center justify-center">
                    <img
                        src="/illustrasi/form.png"
                        alt="Ilustrasi"
                        className="w-[260px] hover:scale-105 transition"
                    />
                </div>
            </form>

            {/* Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="bg-gradient-to-b from-[#E8F8D5] to-[#90C444] p-8 rounded-3xl text-center text-[#3F3313] w-[90%] max-w-[400px] shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CheckCircle2 className="w-12 mx-auto mb-3 animate-bounce" />
                        <h2 className="text-xl font-bold">Pesan Terkirim!</h2>
                        <p className="mt-2">Terima kasih sudah berbagi cerita dan ide!</p>

                        <button
                            className="mt-5 px-8 py-2 bg-[#3F3313] text-white rounded-xl"
                            onClick={() => setModalOpen(false)}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Form;
