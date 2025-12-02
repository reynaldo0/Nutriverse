import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Seminar() {
  // ------- DUMMY DATA -------
  const [seminars] = useState([
    {
      id: 1,
      title: "Seminar Nutrisi Anak",
      date: "10 April 2025",
      location: "Jakarta Convention Center",
      description: "Belajar nutrisi seimbang untuk anak usia 5–12 tahun.",
    },
    {
      id: 2,
      title: "Workshop Parenting Modern",
      date: "25 April 2025",
      location: "Bandung",
      description: "Cara mengasuh anak modern dengan pendekatan psikologi.",
    },
    {
      id: 3,
      title: "Pelatihan Hidup Sehat",
      date: "5 Mei 2025",
      location: "Surabaya",
      description: "Bagaimana membangun pola makan sehat di keluarga.",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const currentXRef = useRef(0);

  // PARALLAX EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;

      const isMobile = window.innerWidth < 768;
      const parallaxFactor = isMobile ? 300 : 600;
      const targetX = ratio * parallaxFactor;

      const animate = () => {
        currentXRef.current += (targetX - currentXRef.current) * 0.25;
        setOffsetX(currentXRef.current);

        if (Math.abs(targetX - currentXRef.current) > 0.9) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-start px-6 pt-16 md:pt-24 pb-28 min-h-screen bg-gradient-to-b from-[#FCFFEC] via-[#C4E196] to-[#90C444] overflow-visible"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/background/herokomunitas.png')] bg-cover bg-center blur-sm"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      <h2 className="text-5xl md:text-6xl font-extrabold text-[#3B3B0E] text-center mb-14 z-10">
        Seminar
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full z-10">
        {seminars.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] bg-[#F7FFF0] border border-[#E0F0C2] transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="bg-[#3B3B0E] text-white font-semibold text-lg md:text-[17px] px-6 py-3 rounded-t-3xl">
              {item.title}
            </div>
            <div className="p-6 text-gray-800 text-[15px] leading-relaxed space-y-3">
              <p>
                <span className="font-semibold text-[#3B3B0E]">Tanggal :</span>{" "}
                {item.date}
              </p>
              <p>
                <span className="font-semibold text-[#3B3B0E]">Lokasi :</span>{" "}
                {item.location}
              </p>
              <p className="text-justify">{item.description}</p>
              <div className="flex justify-start">
                <button
                  onClick={() => setSelectedEvent(item)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#A6E272] text-[#224C14] font-semibold hover:bg-[#94D45E] transition-colors"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {/* Parallax Grass */}
      <div className="w-full overflow-visible pointer-events-none">
        <img
          src="/icon/rumput-kiri.png"
          alt="rumput kiri"
          className="absolute bottom-0 left-0 w-2/3 md:w-1/2 object-contain"
          style={{ transform: `translateX(-${offsetX}px)` }}
        />
        <img
          src="/icon/rumput-kanan.png"
          alt="rumput kanan"
          className="absolute bottom-0 right-0 w-2/3 md:w-1/2 object-contain"
          style={{ transform: `translateX(${offsetX}px)` }}
        />
      </div>
    </section>
  );
}

/* ========== MODAL ========== */
function Modal({ event, onClose }) {
  return createPortal(
    <div
      id="overlay"
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
      onClick={(e) => e.target.id === "overlay" && onClose()}
    >
      <div className="w-full max-w-2xl relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-[#3B3B0E] text-white font-semibold text-lg md:text-xl px-6 py-3 relative">
          Daftar untuk {event.title}
          <button
            onClick={onClose}
            className="absolute right-6 top-2 text-white text-3xl hover:text-gray-200 transition"
          >
            &times;
          </button>
        </div>

        <div className="bg-[#F7FFF0] p-8">
          <RegistrationForm event={event} onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ========== FORM PENDAFTARAN (DUMMY) ========== */
function RegistrationForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasi "success"
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose(); // tutup modal
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 text-gray-700 text-base md:text-lg font-medium"
    >
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Nama Lengkap"
        className="w-full rounded-xl border border-[#E0E0D1] px-5 py-3 shadow-sm"
        required
      />

      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
        className="w-full rounded-xl border border-[#E0E0D1] px-5 py-3 shadow-sm"
        required
      />

      <input
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        placeholder="Nomor Telepon"
        className="w-full rounded-xl border border-[#E0E0D1] px-5 py-3 shadow-sm"
        required
      />

      <textarea
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        placeholder="Catatan (Opsional)"
        className="w-full rounded-xl border border-[#E0E0D1] px-5 py-3 shadow-sm resize-none"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-[#A6E272] text-[#224C14] font-semibold py-3 hover:bg-[#94D45E] transition-all shadow-md"
      >
        {submitted ? "Mendaftar..." : "Daftar Sekarang"}
      </button>
    </form>
  );
}
