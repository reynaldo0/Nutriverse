import { ArrowUp } from "lucide-react";

const Cta = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 md:-bottom-2 w-full">
          <img
            src="/background/footer.png"
            className="w-full h-full object-cover scale-125 md:scale-90"
            alt="Footer Background"
          />
        </div>
      </div>

      <section className="relative pt-6 bg-[#66863E]">
        <div className="-top-10 relative inset-0 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl h-auto mx-4 md:mx-16 flex flex-col sm:flex-row items-center justify-between px-4 py-3 md:py-5">
            
            {/* Teks kiri */}
            <div className="text-center sm:text-left">
              <h1
                className="text-gray-900 font-bold text-sm sm:text-base"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Ingin menjelajahi lebih detail?
              </h1>
              <p
                className="text-gray-500 text-xs sm:text-sm"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Kunjungi Games dan kumpulkan point untuk menjadikan sekolah anda
                menjadi yang terbaik!
              </p>
            </div>

            {/* Tombol kanan */}
            <a
              href="/games"
              className="bg-secondary-200 text-white font-semibold px-3 py-1.5 rounded-md hover:bg-secondary-300/90 transition mt-3 sm:mt-0 sm:ml-3 flex items-center text-xs"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Jelajahi Sekarang
              <ArrowUp className="ml-1 w-3 h-3" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
