import React from "react";
import HeroArticle from "./HeroArticle";
import ProdukUnggul from "./ProdukUnggul";
import BukuTerpadu from "./BukuTerpadu";
import Article from "./Artikel";

const Articles = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroArticle />
      <ProdukUnggul />
      <BukuTerpadu />
      <Article />
    </div>
  );
};

export default Articles;
