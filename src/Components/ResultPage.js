import React from "react";
import { QusAnsContext } from "../Context/QusAnsContext";
import { useContext } from "react";

function ResultPage({ setDisplayPage, setShowEvaluation }) {
  const { score, setFinalSubmit } = useContext(QusAnsContext);

  function handleClick() {
    setDisplayPage("home");
    setFinalSubmit(false);
    setShowEvaluation(false);
  }

  function handleEvaluationPage() {
    console.log("test");
    setShowEvaluation((prev) => {
      return !prev;
    });
  }
  return (
    <>
      <main className="border-2 p-12 flex flex-col w-[300px] items-center  gap-8 bg-sky-700 text-stone-100 m-3 mt-10 rounded-2xl">
        <h1 className="text-stone-50 font-extrabold	text-3xl">Result!! 🫣</h1>
        <p>Your score is {score} </p>
      </main>
      <div className="flex gap-4 m-10">
        <button
          className="bg-sky-300 px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-stone-50"
          onClick={handleClick}>
          Restart
        </button>
        <button
          className="bg-sky-300 px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-stone-50"
          onClick={handleEvaluationPage}>
          Evaluation
        </button>
      </div>
    </>
  );
}

export default ResultPage;
