import React from "react";

function LetsStartPage({ onDisplayPage }) {
  const handleClick = () => {
    onDisplayPage("testPage");
  };

  return (
    <div className="loading-page from-home p-5 sm:p-24 pb-18  rounded-lg bg-sky-800 text-stone-300 w-full sm:w-2/5 md:w-1/2 mx-auto max-w-screen-sm">
      <div className="text-center w-full pb-12">
        <h1 className="pt-2 text-2xl font-extrabold">Welcome to the Quiz!</h1>
      </div>

      <p>1. Each question has multiple-choice options.</p>
      <p>2. Choose the correct answer and see how well you do!</p>
      <p>3. Click the "Start Quiz" button to begin.</p>

      <p className="w-full text-center mt-5">
        <button
          onClick={handleClick}
          className="btn btn-outline  px-5 mt-3 bg-sky-600 text-stone-50 hover:bg-green-600 hover:border-2 hover:border-white cursor-pointer">
          Start
        </button>
      </p>
    </div>
  );
}

export default LetsStartPage;
