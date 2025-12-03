// ===== DATA ITEMS =====
export const nutritreeItems = [
  {
    id: 1,
    name: "Apel",
    img: "/gamesicon/apel.png",
    questions: [
      {
        question: "Apel kaya akan vitamin apa?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin C",
      },
      {
        question: "Berapa banyak serat dalam 1 buah apel?",
        options: ["1g", "3g", "5g", "7g"],
        answer: "3g",
      },
    ],
  },
  {
    id: 2,
    name: "Pisang",
    img: "/gamesicon/pisang.png",
    questions: [
      {
        question: "Pisang kaya akan mineral apa?",
        options: ["Kalsium", "Kalium", "Zinc", "Besi"],
        answer: "Kalium",
      },
      {
        question: "Manfaat pisang adalah?",
        options: ["Meningkatkan energi", "Membuat tidur gelisah", "Merusak gigi", "Menyebabkan dehidrasi"],
        answer: "Meningkatkan energi",
      },
    ],
  },
  {
    id: 3,
    name: "Wortel",
    img: "/gamesicon/wortel.png",
    questions: [
      {
        question: "Wortel baik untuk?",
        options: ["Mata", "Telinga", "Hati", "Kuku"],
        answer: "Mata",
      },
      {
        question: "Vitamin utama dalam wortel?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
        answer: "Vitamin A",
      },
    ],
  },
];

// ===== DUMMY LEADERBOARD =====
export const dummySchools = [
  { id: 1, name: "SMA Sehat Ceria", users_count: 25, points: 120, team_code: "SC123" },
  { id: 2, name: "SMP Nutriverse", users_count: 18, points: 95, team_code: "NV456" },
  { id: 3, name: "SD Maju Sehat", users_count: 30, points: 85, team_code: "MS789" },
];
