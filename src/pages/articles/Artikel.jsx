import { ArrowRight } from "lucide-react";
import { articles } from "../../data/articles";

export default function Article() {
  function getArticleImgPath(img) {
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return img.startsWith("/") ? img : `/images/article/${img}`;
  }

  return (
    <section
      className="w-full bg-[#FCFFEC] relative py-10 px-3 md:px-6"
      id="article"
    >
      <div
        className="absolute inset-0 bg-[url('/background/heroartikel.png')] opacity-40 bg-no-repeat bg-cover bg-top"
        style={{ backgroundAttachment: "fixed" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E4600] mb-10 text-center">
          Artikel Berita
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="rounded-2xl bg-[#F9FFE9] shadow-md border border-green-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40 md:h-44 overflow-hidden">
                <img
                  src={getArticleImgPath(article.img)}
                  alt={article.title}
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow">
                <div className="bg-[#C8F29D] py-2 px-4">
                  <h3 className="text-[#2E4600] text-base md:text-lg font-bold">
                    {article.title}
                  </h3>
                </div>

                <div className="px-4 py-3 flex flex-col grow">
                  <p className="text-gray-800 text-xs md:text-sm mb-4 leading-relaxed">
                    {article.desc.substring(0, 110)}...
                  </p>

                  <button
                    onClick={() => {
                      window.location.href = `/article/${article.slug}`;
                    }}
                    className="mt-auto flex items-center cursor-pointer justify-center gap-2 px-3 py-2 rounded-full bg-[#4A3A1D] text-white text-xs md:text-sm font-semibold shadow-sm"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
