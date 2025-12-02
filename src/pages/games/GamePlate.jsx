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

  // SOAL DI-SHUFFLE MENGGUNAKAN useMemo → TIDAK PERLU setState DALAM EFFECT
  const questions = useMemo(() => {
    if (!plateItem) return [];
    return plateItem.questions.map((q) => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5),
    }));
  }, [plateItem]);

  const currentQuestion = questions[currentQuestionIndex] ?? null;

  // PILIH ITEM
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
    <section className="min-h-screen flex flex-col items-center justify-center w-full px-6 pt-20 pb-32 relative bg-gradient-to-b from-[#FCFFEC] via-[#C4E196] to-[#90C444] overflow-visible pb-60">
      <div className="absolute inset-0 blur bg-[url('/background/herohome.png')] bg-cover bg-center opacity-50" />

      <h1 className="text-6xl md:text-7xl font-extrabold text-[#3A2E17] text-center mb-6">
        Permainan NutriPlate
      </h1>

      <p className="text-center text-2xl md:text-3xl font-bold text-white mb-10 bg-[#3A2E17] py-3 px-10 rounded-full shadow-lg">
        Pilih Buah/Sayur, lalu jawab kuisnya
      </p>

      <div className="bg-[#F0FCD7] rounded-3xl shadow-2xl border-2 border-green-200 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full z-10">
        {/* Piring */}
        <div
          className="relative w-64 h-64 flex items-center justify-center z-10"
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
              <img src={plateItem.img} className="w-32 h-32 object-contain" />
              <div className="mt-3 text-xl font-bold text-green-900 text-center">
                {plateItem.name} ({currentQuestionIndex + 1}/{questions.length})
              </div>
            </div>
          ) : (
            <p className="absolute text-gray-600 text-center text-lg z-10 flex flex-col items-center gap-2">
              <Utensils className="text-3xl text-green-800" />
              Tarik buah/sayur ke sini
            </p>
          )}
        </div>

        {/* Soal */}
        <div className="flex-1 w-full z-10">
          {plateItem && currentQuestion ? (
            <div className="bg-white p-8 rounded-2xl shadow-md w-full">
              <p className="text-gray-900 mb-6 text-2xl font-semibold">
                {currentQuestion.question}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === currentQuestion.answer;

                  let btnClass =
                    "px-6 py-4 rounded-xl border font-semibold text-xl transition-all ";

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

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={handleClearPlate}
                  className="px-6 py-3 bg-yellow-300 text-gray-900 font-bold rounded-lg shadow hover:bg-yellow-400 text-lg flex items-center gap-2"
                >
                  <RotateCcw size={20} /> Ganti Tanaman
                </button>

                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 text-lg flex items-center gap-2"
                >
                  <ArrowRight size={20} /> Pertanyaan Berikut
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white/80 p-8 rounded-2xl shadow-md text-center text-gray-700 text-xl font-medium">
              Tarik buah/sayur dari daftar di bawah ke piring, lalu jawab
              pertanyaannya!
            </div>
          )}
        </div>
      </div>

      {/* List Buah/Sayur */}
      <div className="bg-[#F0FCD7] border-2 border-green-200 rounded-2xl shadow-lg mt-10 px-6 py-6 w-full z-10">
        <div className="flex gap-6 flex-wrap justify-center">
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              onClick={() => selectItem(item)}
              className="w-24 h-24 bg-white rounded-2xl shadow-md hover:scale-110 flex items-center justify-center cursor-pointer border border-green-200 transition-transform"
            >
              <img src={item.img} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Score */}
      <div className="bg-green-700 text-white px-8 py-4 rounded-2xl shadow-md font-extrabold text-2xl mt-10 flex items-center gap-3">
        <Star className="text-yellow-300" fill="yellow" /> Poin Kamu: {points}
      </div>
    </section>
  );
}
