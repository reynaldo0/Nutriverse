import React from "react";
import HeroKomunitas from "./Hero";
import KomuIntro from "./Komunitas";
import Seminar from "./Seminar";
import ForumKomunitas from "./ForumKomunitas";

const Community = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroKomunitas />
      <KomuIntro />
      <Seminar />
      <ForumKomunitas/>
    </div>
  );
};

export default Community;
