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
      className="w-full bg-[#FCFFEC] relative py-20 px-6 md:px-12"
      id="article"
    >
      <div
        className="absolute inset-0 bg-[url('/background/heroartikel.png')] opacity-40 bg-no-repeat bg-cover bg-top"
        style={{ backgroundAttachment: "fixed" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#2E4600] mb-16 text-center">
          Artikel Berita
        </h2>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="rounded-3xl bg-[#F9FFE9] shadow-lg border border-green-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={getArticleImgPath(article.img)}
                  alt={article.title}
                  className="w-full h-full object-cover transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow">
                <div className="bg-[#C8F29D] py-3 px-6">
                  <h3 className="text-[#2E4600] text-xl font-bold">
                    {article.title}
                  </h3>
                </div>

                <div className="px-6 py-4 flex flex-col grow">
                  <p className="text-gray-800 mb-6">
                    {article.desc.substring(0, 150)}...
                  </p>

                  <button
                    onClick={() => {
                      window.location.href = `/article/${article.slug}`;
                    }}
                    className="mt-auto flex items-center cursor-pointer justify-center gap-2 px-5 py-3 rounded-full bg-[#4A3A1D] text-white font-semibold shadow-md"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
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
