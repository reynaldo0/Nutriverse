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
    <section className="relative min-h-screen flex items-center justify-center bg-[#F0FCD7] p-4 lg:p-8">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
        style={{ backgroundImage: "url('/background/herohome.png')" }}
      ></div>

      {/* FORM WRAPPER */}
      <form
        onSubmit={handleSubmit}
        className="
                    relative flex flex-col-reverse lg:flex-row gap-6
                    bg-white/70 backdrop-blur-xl
                    rounded-2xl shadow-lg
                    w-full max-w-[900px]
                    p-6 lg:p-10
                    scale-[0.85] md:scale-[0.9] lg:scale-100
                "
      >
        {/* LEFT FORM CONTENT */}
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-[24px] font-bold text-[#3F3313]">
            Dari kamu untuk{" "}
            <span className="bg-[#3F3313] text-white px-2 py-0.5 rounded-md">
              Nutriverse
            </span>
          </h1>

          {/* Nama */}
          <div className="flex items-center bg-[#f3f3f3] py-2 px-4 rounded-full shadow-sm">
            <input
              type="text"
              placeholder="Nama Lengkap"
              required
              className="flex-grow bg-transparent outline-none text-sm"
            />
            <User className="text-gray-400 w-4" />
          </div>

          {/* Email + Daerah */}
          <div className="flex gap-2 flex-wrap">
            <div className="flex-1 flex items-center bg-[#f3f3f3] py-2 px-4 rounded-full shadow-sm min-w-[150px]">
              <input
                type="email"
                placeholder="Email Aktif"
                required
                className="flex-grow bg-transparent outline-none text-sm"
              />
              <Mail className="text-gray-400 w-4" />
            </div>

            <div className="flex-1 flex items-center bg-[#f3f3f3] py-2 px-4 rounded-full shadow-sm min-w-[150px]">
              <input
                type="text"
                placeholder="Asal Daerah"
                required
                className="flex-grow bg-transparent outline-none text-sm"
              />
              <MapPin className="text-gray-400 w-4" />
            </div>
          </div>

          {/* Deskripsi */}
          <textarea
            placeholder="Apa fitur yang ingin ditambahkan?"
            rows="2"
            className="w-full p-3 bg-[#f3f3f3] rounded-xl shadow-sm outline-none resize-none text-sm"
          ></textarea>

          {/* Upload Section */}
          <div className="flex gap-3 items-stretch">
            {/* Preview */}
            <div className="w-[120px] h-[120px] bg-[#fafafa] border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden text-xs">
              {previewImage ? (
                <img
                  src={previewImage}
                  className="w-full h-full object-cover"
                />
              ) : (
                "No file"
              )}
            </div>

            {/* Upload box */}
            <label
              htmlFor="fileUpload"
              className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-[#fafafa] rounded-xl p-4 cursor-pointer text-center hover:bg-gray-100 transition text-xs"
            >
              <UploadCloud className="w-6 text-gray-400 mb-1" />
              <p>
                <span className="underline">Click to upload</span> or drag &
                drop
              </p>
              <p className="mt-1 text-gray-500 text-[10px]">
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
            rows="3"
            className="w-full p-3 bg-[#f3f3f3] rounded-xl shadow-sm outline-none resize-none text-sm"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-[#90C444] hover:bg-[#7CB13B] text-white font-bold rounded-full text-sm transition"
          >
            Kirim
          </button>
        </div>

        {/* RIGHT Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/illustrasi/form.png"
            alt="Ilustrasi"
            className="w-[220px] hover:scale-105 transition"
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
            className="bg-gradient-to-b from-[#E8F8D5] to-[#90C444] p-6 rounded-2xl text-center text-[#3F3313] w-[90%] max-w-[360px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle2 className="w-10 mx-auto mb-2 animate-bounce" />
            <h2 className="text-lg font-bold">Pesan Terkirim!</h2>
            <p className="mt-1 text-sm">
              Terima kasih sudah berbagi cerita dan ide!
            </p>

            <button
              className="mt-4 px-6 py-2 bg-[#3F3313] text-white rounded-lg text-sm"
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
