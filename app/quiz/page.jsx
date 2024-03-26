"use client";
import React, { useState } from "react";
import { quiz } from "../data";

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [counter, setCounter] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onSelectedAnswer = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setCounter((prev) => (selectedAnswer ? prev + 1 : prev));
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-300 rounded-lg">
      <div className="">
        <h1 className="text-black text-2xl text-center">Quiz Page</h1>
        <span className="block w-full border-b border-gray-400 mb-4"></span>
      </div>
      <div>
        {!showResult ? (
          <div>
            <h2 className="mb-2 italic">
              Question: {activeQuestion + 1}/<span>{questions.length}</span>
            </h2>
            <h3 className="mb-2">{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onSelectedAnswer(answer, idx)}
                className={`list-none rounded hover:bg-gray-200 mb-1 pl-1 border border-gray-400 ${
                  selectedAnswerIndex === idx ? "bg-gray-200" : "bg-gray-300"
                }`}
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded hover:bg-blue-700"
                onClick={nextQuestion}
              >
                Next
              </button>
            ) : (
              <button
                disabled
                className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded"
              >
                Next
              </button>
            )}
          </div>
        ) : (
          <div>
            <h3 className="text-black text-2xl text-center ">Results</h3>
            <h3 className="italic mb-2">
              You answered "Yes" {counter}/{questions.length} times
            </h3>
            {counter < 5
              ? "You are not dyslexic"
              : counter >= 5 && counter <= 10
              ? "The possibility exists that you are dyslexic"
              : "You are most likely dyslexic, You should consult a professional reading specialist or physician to get a diagnosis"}
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
