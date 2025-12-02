import { useMemo } from "react";
import {
  User,
  Calendar,
  Landmark,
  ArrowLeft,
  Share2,
  ChevronRight,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";

export default function ArticleDetail() {
  const { slug } = useParams();

  // Cari artikel sesuai slug
  const artikel = useMemo(() => articles.find((a) => a.slug === slug), [slug]);
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

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: artikel.title,
        text: artikel.desc.substring(0, 100),
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link artikel disalin!");
    }
  };

  return (
    <div className="bg-[#FAFAF7] min-h-screen">
      {/* HEADER HERO */}
      <div className="relative w-full h-[380px] md:h-[480px] overflow-hidden rounded-b-[40px] shadow-xl">
        <img
          src={artikel.img}
          alt={artikel.title}
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10 md:p-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight">
            {artikel.title}
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* ARTICLE BODY */}
        <article className="lg:col-span-2 bg-white shadow-lg rounded-3xl p-10 md:p-12 border border-gray-100">
          {/* META INFO */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm md:text-base mb-10">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#7E8E65]" />
              {artikel.user.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#7E8E65]" />
              {new Date(artikel.created_at).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#7E8E65]" />
              {artikel.tag}
            </span>
          </div>

          {/* ARTICLE CONTENT */}
          <div className="prose prose-lg max-w-none leading-relaxed text-gray-800 font-serif">
            {artikel.desc
              .trim()
              .split("\n")
              .map((p, i) => (
                <p key={i} className="mb-6 text-[19px]">
                  {p}
                </p>
              ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-[#8DC26F] cursor-pointer hover:bg-[#7EB75F] text-white rounded-xl flex items-center gap-2 font-semibold shadow-md transition"
            >
              <Share2 className="w-5 h-5" />
              Bagikan Artikel
            </button>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-800 rounded-xl flex items-center gap-2 font-semibold transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </button>
          </div>
        </article>

        {/* SIDEBAR LAINNYA */}
        <aside className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-fit sticky top-20">
          <h3 className="text-2xl font-bold text-[#7CA45B] mb-6">
            Artikel Lainnya
          </h3>

          <div className="space-y-4">
            {otherArticles.map((a) => (
              <a
                key={a.id}
                href={`/article/${a.slug}`}
                className="group block border border-gray-100 hover:border-[#7CA45B] p-4 rounded-xl transition shadow-sm hover:shadow-md hover:bg-[#7CA45B] hover:text-white"
              >
                <p className="font-semibold text-lg group-hover:text-white mb-1">
                  {a.title}
                </p>
                <p className="text-sm text-gray-600 group-hover:text-green-50 flex items-center gap-1">
                  {a.user.name} • {new Date(a.created_at).toLocaleDateString()}
                </p>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
