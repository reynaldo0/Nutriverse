import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { User, Calendar, Landmark, ArrowLeft, Share2 } from "lucide-react";

// Data Artikel
const articles = [
  {
    id: 1,
    title: "Nutrisi Penting Untuk Anak",
    desc: "Makanan sehat sangat penting untuk pertumbuhan anak. Pastikan mereka mendapatkan vitamin dan mineral yang cukup setiap hari.",
    slug: "nutrisi-penting-anak",
    img: "article1.png",
    user: { name: "Admin" },
    created_at: "2025-12-03T10:00:00Z",
    tag: "Kesehatan Anak",
  },
  {
    id: 2,
    title: "Tips Memilih Buah Segar",
    desc: "Buah segar adalah sumber vitamin alami. Pilih buah yang matang dan simpan dengan benar agar tetap fresh.",
    slug: "tips-buah-segar",
    img: "article2.png",
    user: { name: "Admin" },
    created_at: "2025-12-01T09:00:00Z",
    tag: "Gizi",
  },
  {
    id: 3,
    title: "Manfaat Sayuran Hijau",
    desc: "Sayuran hijau kaya akan vitamin, serat, dan antioksidan. Konsumsi secara rutin untuk menjaga kesehatan tubuh.",
    slug: "manfaat-sayuran-hijau",
    img: "article3.png",
    user: { name: "Admin" },
    created_at: "2025-11-30T12:00:00Z",
    tag: "Gizi",
  },
  {
    id: 4,
    title: "Makanan Sehat Untuk Otak",
    desc: "Beberapa jenis makanan dapat meningkatkan fungsi otak, seperti kacang-kacangan, ikan, dan sayuran hijau.",
    slug: "makanan-sehat-otak",
    img: "article4.png",
    user: { name: "Admin" },
    created_at: "2025-11-28T15:00:00Z",
    tag: "Kesehatan Otak",
  },
];

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const artikel = useMemo(
    () => articles.find((a) => a.slug === slug),
    [slug]
  );

  const otherArticles = useMemo(
    () => articles.filter((a) => a.slug !== slug),
    [slug]
  );

  if (!artikel) {
    return (
      <p className="text-center py-20 text-gray-500">
        Artikel tidak ditemukan.
      </p>
    );
  }

  function getArticleImgPath(img) {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return img.startsWith("/") ? img : `/article/${img}`;
  }

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: artikel.title,
          text: artikel.desc.substring(0, 100),
          url,
        });
      } catch (err) {
        console.error("Gagal membagikan:", err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link artikel disalin!");
    }
  };

  return (
    <div className="bg-[#FAFAF7] min-h-screen">
      {/* Header Gambar */}
      <div className="relative w-full h-[260px] md:h-[330px] overflow-hidden rounded-b-[28px] shadow-lg">
        <img
          src={getArticleImgPath(artikel.img)}
          alt={artikel.title}
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-xl">
            {artikel.title}
          </h1>
        </div>
      </div>

      {/* Konten Utama */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Artikel Utama */}
        <article className="lg:col-span-2 bg-white shadow-md rounded-2xl p-6 md:p-8 border border-gray-100">
          {/* Info Penulis */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-xs md:text-sm mb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#7E8E65]" />
              {artikel.user?.name || "Admin"}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#7E8E65]" />
              {artikel.created_at
                ? new Date(artikel.created_at).toLocaleDateString()
                : "–"}
            </span>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-[#7E8E65]" />
              {artikel.tag || "–"}
            </span>
          </div>

          {/* Deskripsi Artikel */}
          <div className="prose max-w-none leading-relaxed text-gray-800 font-serif">
            {artikel.desc.split("\n").map((p, i) => (
              <p key={i} className="mb-4 text-[15px] md:text-[17px]">
                {p}
              </p>
            ))}
          </div>

          {/* Tombol Aksi */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 bg-[#8DC26F] text-white rounded-lg flex items-center gap-1.5 text-sm shadow-md hover:bg-[#7EB75F]"
            >
              <Share2 className="w-4 h-4" /> Bagikan
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-lg flex items-center gap-1.5 text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali
            </button>
          </div>
        </article>

        {/* Sidebar Artikel Lainnya */}
        <aside className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 h-fit sticky top-20">
          <h3 className="text-xl font-bold text-[#7CA45B] mb-4">
            Artikel Lainnya
          </h3>
          <div className="space-y-3">
            {otherArticles.map((a) => (
              <Link
                key={a.id}
                to={`/article/${a.slug}`}
                className="group block border border-gray-100 hover:border-[#7CA45B] p-3 rounded-xl transition shadow-sm hover:bg-[#7CA45B] hover:text-white"
              >
                <p className="font-semibold text-base group-hover:text-white">
                  {a.title}
                </p>
                <p className="text-xs text-gray-600 group-hover:text-green-50 mt-0.5 flex items-center gap-1">
                  {a.user?.name || "Admin"} •{" "}
                  {a.created_at
                    ? new Date(a.created_at).toLocaleDateString()
                    : "–"}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
