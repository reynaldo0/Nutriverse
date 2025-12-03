import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Seminar() {
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
  const animationRef = useRef(null);
  const currentXRef = useRef(0);

  /* ----------- PARALLAX GRASS (Diperkecil) ------------ */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const ratio = docHeight ? scrollTop / docHeight : 0;

      const isMobile = window.innerWidth < 768;
      const parallaxFactor = isMobile ? 80 : 150; // <<< DIPERKECIL LAGI

      const targetX = ratio * parallaxFactor;

      const animate = () => {
        currentXRef.current += (targetX - currentXRef.current) * 0.18;
        setOffsetX(currentXRef.current);

        if (Math.abs(targetX - currentXRef.current) > 0.3) {
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
      className="relative flex flex-col items-center px-3 pt-10 pb-14 min-h-[70vh]
      bg-gradient-to-b from-[#FCFFEC] via-[#C4E196] to-[#90C444]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/background/herokomunitas.png')] bg-cover bg-center blur-[1px]"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B3B0E] text-center mb-6 z-10">
        Seminar
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full z-10">
        {seminars.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.08)]
            bg-[#F7FFF0] border border-[#E0F0C2] transition-transform duration-300 hover:scale-[1.01]"
          >
            <div className="bg-[#3B3B0E] text-white font-semibold text-sm md:text-base px-4 py-2">
              {item.title}
            </div>

            <div className="p-4 text-gray-800 text-xs md:text-sm leading-relaxed space-y-1.5">
              <p>
                <span className="font-semibold text-[#3B3B0E]">Tanggal :</span> {item.date}
              </p>
              <p>
                <span className="font-semibold text-[#3B3B0E]">Lokasi :</span> {item.location}
              </p>
              <p className="text-justify">{item.description}</p>

              <button
                onClick={() => setSelectedEvent(item)}
                className="mt-2 px-4 py-1.5 rounded-full text-xs bg-[#A6E272] text-[#224C14] 
                font-semibold hover:bg-[#94D45E] transition-colors"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {/* Parallax Grass */}
      <div className="w-full pointer-events-none">
        <img
          src="/icon/rumput-kiri.png"
          className="absolute bottom-0 left-0 w-1/3 md:w-1/4 opacity-80"
          style={{ transform: `translateX(-${offsetX}px)` }}
        />
        <img
          src="/icon/rumput-kanan.png"
          className="absolute bottom-0 right-0 w-1/3 md:w-1/4 opacity-80"
          style={{ transform: `translateX(${offsetX}px)` }}
        />
      </div>
    </section>
  );
}

/* ================= MODAL ================= */
function Modal({ event, onClose }) {
  return createPortal(
    <div
      id="overlay"
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
      onClick={(e) => e.target.id === "overlay" && onClose()}
    >
      <div className="w-full max-w-sm rounded-xl bg-white shadow-xl overflow-hidden">
        <div className="bg-[#3B3B0E] text-white font-semibold text-base px-4 py-2 relative">
          Daftar — {event.title}
          <button
            onClick={onClose}
            className="absolute right-4 top-1 text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="bg-[#F7FFF0] p-4">
          <RegistrationForm onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ================= FORM ================= */
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
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-xs text-gray-700">
      <input
        type="text"
        placeholder="Nama Lengkap"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-lg border px-3 py-1.5 shadow-sm"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-lg border px-3 py-1.5 shadow-sm"
        required
      />

      <input
        type="tel"
        placeholder="Nomor Telepon"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full rounded-lg border px-3 py-1.5 shadow-sm"
        required
      />

      <textarea
        placeholder="Catatan (Opsional)"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        className="w-full rounded-lg border px-3 py-1.5 shadow-sm h-16 resize-none"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-[#A6E272] text-[#224C14] font-semibold py-2 text-xs
        hover:bg-[#94D45E] transition-all shadow"
      >
        {submitted ? "Mendaftar..." : "Daftar"}
      </button>
    </form>
  );
}
