import React from "react";
import HeroTree from "./HeroTree";
import RulesLeaderboard from "./Leaderboard";
import GameTree from "./PageGames";

// Dummy data langsung di sini
export const dummySchools = [
  { id: 1, name: "SD ABC", users_count: 25, points: 100, team_code: "ABC123" },
  { id: 2, name: "SMP XYZ", users_count: 30, points: 80, team_code: "XYZ789" },
  { id: 3, name: "SMA DEF", users_count: 20, points: 90, team_code: "DEF456" },
];

export const nutritreeItems = [
  {
    id: 1,
    name: "Apel",
    img: "/gamesicon/apel.png",
    questions: [
      { question: "Apel berwarna apa?", options: ["Merah", "Hijau", "Kuning"], answer: "Merah" },
      { question: "Apel berasal dari?", options: ["Pohon", "Laut", "Gunung"], answer: "Pohon" },
    ],
  },
  {
    id: 2,
    name: "Wortel",
    img: "/gamesicon/wortel.png",
    questions: [
      { question: "Wortel berwarna?", options: ["Oranye", "Ungu", "Hitam"], answer: "Oranye" },
      { question: "Wortel kaya akan?", options: ["Vitamin A", "Vitamin C", "Protein"], answer: "Vitamin A" },
    ],
  },
];

export default function NutriTree() {
  return (
    <div>
      <HeroTree />
      <GameTree items={nutritreeItems} />
      <RulesLeaderboard schools={dummySchools} />
      <GameTree items={nutritreeItems} />
    </div>
  );
}
