import React from "react";
import { nutriplateItems } from "../../data/nutriplate";
import GamePlate from "./GamePlate";
import RulesPlate from "./RulesPlate";
import { dummySchools } from "../../data/schoolLeaderboard";
import HeroPlate from "./HeroPlate";

const Nutriplate = () => {
  return (
    <div>
      <HeroPlate />
      <RulesPlate schools={dummySchools} />
      <GamePlate items={nutriplateItems} />
    </div>
  );
};

export default Nutriplate;
