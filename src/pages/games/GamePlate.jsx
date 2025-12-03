import React, { useState, useEffect, useRef, useMemo } from "react";
import { Utensils, RotateCcw, ArrowRight, Star } from "lucide-react";

export default function GamePlate({ items = [] }) {
  const [plateItem, setPlateItem] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionLocked, setQuestionLocked] = useState(false);

  // POINT DISIMPAN DI LOCALSTORAGE
  const [points, setPoints] = useState(() => {
    return parseInt(localStorage.getItem("nutriplate_points")) || 0;
  });

  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);

  useEffect(() => {
    correctSoundRef.current = new Audio("/sounds/benar.mp3");
    wrongSoundRef.current = new Audio("/sounds/salah.mp3");
  }, []);

  // Simpan poin
  useEffect(() => {
    localStorage.setItem("nutriplate_points", points);
  }, [points]);

  // SOAL SHUFFLE
  const questions = useMemo(() => {
    if (!plateItem) return [];
    return plateItem.questions.map((q) => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5),
    }));
  }, [plateItem]);

  const currentQuestion = questions[currentQuestionIndex] ?? null;

  const selectItem = (item) => {
    setPlateItem(item);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setQuestionLocked(false);
  };

  // DRAG & DROP
  const handleDragStart = (e, id) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain");
    const foundItem = items.find((i) => i.id.toString() === itemId);
    if (foundItem) selectItem(foundItem);
  };

  // JAWAB
  const handleAnswer = (opt) => {
    if (questionLocked) return;

    setSelectedAnswer(opt);
    setQuestionLocked(true);

    const isCorrect = opt === currentQuestion.answer;
    const pointsChange = isCorrect ? 5 : -2;

    if (isCorrect) {
      correctSoundRef.current.currentTime = 0;
      correctSoundRef.current.play();
    } else {
      wrongSoundRef.current.currentTime = 0;
      wrongSoundRef.current.play();
    }

    setPoints((prev) => prev + pointsChange);
  };

  // NEXT QUESTION
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setQuestionLocked(false);
    } else {
      handleClearPlate();
    }
  };

  // RESET
  const handleClearPlate = () => {
    setPlateItem(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setQuestionLocked(false);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center w-full px-4 pt-16 pb-20 relative bg-gradient-to-b from-[#FCFFEC] via-[#C4E196] to-[#90C444]">
      <div className="absolute inset-0 blur bg-[url('/background/herohome.png')] bg-cover bg-center opacity-40" />

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#3A2E17] text-center mb-4">
        Permainan NutriPlate
      </h1>

      <p className="text-center text-lg md:text-xl font-bold text-white mb-6 bg-[#3A2E17] py-2 px-6 rounded-full shadow-lg">
        Pilih Buah/Sayur, lalu jawab kuisnya
      </p>

      {/* MAIN CONTAINER */}
      <div className="bg-[#F0FCD7] rounded-2xl shadow-2xl border-2 border-green-200 p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full z-10">

        {/* Piring */}
        <div
          className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center z-10"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <img
            src="/gamesicon/piring.png"
            alt="Piring"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {plateItem ? (
            <div className="flex flex-col items-center z-10">
              <img src={plateItem.img} className="w-20 h-20 object-contain" />
              <div className="mt-2 text-lg font-bold text-green-900 text-center">
                {plateItem.name} ({currentQuestionIndex + 1}/{questions.length})
              </div>
            </div>
          ) : (
            <p className="absolute text-gray-600 text-center text-base z-10 flex flex-col items-center gap-1">
              <Utensils className="text-2xl text-green-800" />
              Tarik buah/sayur
            </p>
          )}
        </div>

        {/* Soal */}
        <div className="flex-1 w-full z-10">
          {plateItem && currentQuestion ? (
            <div className="bg-white p-6 rounded-2xl shadow-md w-full">
              <p className="text-gray-900 mb-4 text-lg font-semibold">
                {currentQuestion.question}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === currentQuestion.answer;

                  let btnClass =
                    "px-4 py-3 rounded-xl border font-semibold text-base transition-all ";

                  if (!questionLocked) {
                    btnClass += "bg-gray-100 border-gray-300 hover:bg-green-50";
                  } else {
                    if (isSelected) {
                      btnClass += isCorrect
                        ? "bg-green-200 border-green-500 text-green-800"
                        : "bg-red-200 border-red-500 text-red-700";
                    } else {
                      btnClass += isCorrect
                        ? "bg-green-100 border-green-300 text-green-800"
                        : "bg-gray-100 border-gray-300 text-gray-600 opacity-80";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      disabled={questionLocked}
                      className={btnClass}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={handleClearPlate}
                  className="px-4 py-2 bg-yellow-300 text-gray-900 font-bold rounded-lg shadow hover:bg-yellow-400 text-base flex items-center gap-2"
                >
                  <RotateCcw size={18} /> Ganti
                </button>

                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 text-base flex items-center gap-2"
                >
                  <ArrowRight size={18} /> Next
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white/80 p-6 rounded-2xl shadow-md text-center text-gray-700 text-base font-medium">
              Tarik buah/sayur dari daftar di bawah ke piring!
            </div>
          )}
        </div>
      </div>

      {/* List Item */}
      <div className="bg-[#F0FCD7] border-2 border-green-200 rounded-xl shadow-lg mt-8 px-4 py-4 w-full z-10">
        <div className="flex gap-4 flex-wrap justify-center">
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              onClick={() => selectItem(item)}
              className="w-20 h-20 bg-white rounded-xl shadow-md hover:scale-105 flex items-center justify-center cursor-pointer border border-green-200 transition-transform"
            >
              <img src={item.img} className="w-12 h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Score */}
      <div className="bg-green-700 text-white px-6 py-3 rounded-xl shadow-md font-extrabold text-xl mt-6 flex items-center gap-2">
        <Star className="text-yellow-300" fill="yellow" /> {points} Poin
      </div>
    </section>
  );
}
