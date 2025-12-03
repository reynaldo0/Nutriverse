import React from "react";
import HeroArticle from "./HeroArticle";
import ProdukUnggul from "./ProdukUnggul";
import BukuTerpadu from "./BukuTerpadu";
import Article from "./Artikel";
import Video from "./VideoPembelajaran";

const Articles = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroArticle />
      <ProdukUnggul />
      <BukuTerpadu />
      <Article />
      <Video/>
    </div>
  );
};

export default Articles;
