import React from "react";
import { QusAnsContext } from "../Context/QusAnsContext";
import { useContext } from "react";

function ResultPage({ setDisplayPage }) {
  const { score, setFinalSubmit } = useContext(QusAnsContext);

  function handleClick() {
    setDisplayPage("home");
    setFinalSubmit(false);
  }
  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col">
      <h1 className="text-stone-900 font-extrabold	text-3xl">Result!! 🫣</h1>
      <main className="border-2 p-12 flex flex-col items-start gap-7 bg-sky-700 text-stone-100 m-5 rounded-2xl">
        <p>Your score is {score} </p>
      </main>
      <button
        className="bg-sky-300 px-4 py-2 rounded-2xl"
        onClick={handleClick}>
        Restart
      </button>
    </div>
  );
}

export default ResultPage;
