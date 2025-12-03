import React from "react";
import { nutritreeItems } from "../../data/nutritree";
import HeroTree from "./HeroTree";
import RulesLeaderboard from "./RulesLeaderboard";
import GameTree from "./GameTree";
import { dummySchools } from "../../data/schoolLeaderboard";

const NutriTree = () => {
  return (
    <div>
       <HeroTree />
      <GameTree items={nutritreeItems} />
      <RulesLeaderboard schools={dummySchools} />
    </div>
  );
};

export default NutriTree;
