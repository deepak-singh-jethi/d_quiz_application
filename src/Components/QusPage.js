import React, { useContext, useState } from "react";
import { QusAnsContext } from "../Context/QusAnsContext";

const buttonStyle =
  "px-8 py-3 bg-blue-700 text-stone-100 hover:bg-green-700 hover:text-stone-200 rounded-lg";

const optionStyle =
  "px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg mb-4 rounded-lg w-full";

function QusPage() {
  const {
    qusAns,
    selectedIndex,
    setSelectedIndex,
    setQusAns,
    handleFinalSubmit,
  } = useContext(QusAnsContext);

  const { question, options, selectedAns } = qusAns[selectedIndex];

  const [userSelection, setUserSelection] = useState(undefined);

  //TODO handleSkip

  function handleSkip() {
    const updatedQus = qusAns.map((qus, index) =>
      index === selectedIndex ? { ...qus, selectedAns: undefined } : qus
    );

    setQusAns(updatedQus);
    if (selectedIndex === qusAns.length - 1) {
      return;
    }
    setSelectedIndex(selectedIndex + 1);
  }

  //TODO handle Submit
  function handleSubmit() {
    const updatedQus = qusAns.map((qus, index) =>
      index === selectedIndex ? { ...qus, selectedAns: userSelection } : qus
    );

    setQusAns(updatedQus);

    if (selectedIndex === qusAns.length - 1) {
      return;
    }
    setSelectedIndex(selectedIndex + 1);
    setUserSelection(undefined);
  }

  // handle option select
  function handleOptionClick(value) {
    setUserSelection(value);
  }

  //handle submit all
  function handleSubmitAll() {
    handleFinalSubmit(true);
    setSelectedIndex(0);
    setUserSelection(undefined);
  }

  return (
    <div className="flex flex-col gap-10 w-screen h-screen sm:w-1/2 justify-center items-center">
      <h2 className="sm:h-[100px]  mt-4 font-extrabold text-base sm:text-xs md:text-xl lg:text-2xl">
        <span>Qus:{selectedIndex + 1}</span>{" "}
        <span dangerouslySetInnerHTML={{ __html: question }} />
      </h2>
      <div className="w-full">
        <p
          onClick={() => handleOptionClick(options[0])}
          className={`${optionStyle} ${
            selectedAns === options[0]
              ? "bg-blue-500 text-stone-200"
              : "bg-blue-200"
          } ${userSelection === options[0] ? "bg-green-600" : ""}`}
          dangerouslySetInnerHTML={{ __html: `1. ${options[0]}` }}
        />
        <p
          onClick={() => handleOptionClick(options[1])}
          className={`${optionStyle} ${
            selectedAns === options[1]
              ? "bg-blue-500 text-stone-200"
              : "bg-blue-200"
          } ${userSelection === options[1] ? "bg-green-600" : ""}`}
          dangerouslySetInnerHTML={{ __html: `2. ${options[1]}` }}
        />
        <p
          onClick={() => handleOptionClick(options[2])}
          className={`${optionStyle} ${
            selectedAns === options[2]
              ? "bg-blue-500 text-stone-200"
              : "bg-blue-200"
          } ${userSelection === options[2] ? "bg-green-600" : ""}`}
          dangerouslySetInnerHTML={{ __html: `3. ${options[2]}` }}
        />
        <p
          onClick={() => handleOptionClick(options[3])}
          className={`${optionStyle} ${
            selectedAns === options[3]
              ? "bg-blue-500 text-stone-200"
              : "bg-blue-200"
          } ${userSelection === options[3] ? "bg-green-600" : ""}`}
          dangerouslySetInnerHTML={{ __html: `4. ${options[3]}` }}
        />
      </div>

      <div className="w-full mt-4 flex items-start justify-around">
        <button onClick={handleSkip} className={buttonStyle}>
          Skip
        </button>
        <button onClick={handleSubmit} className={buttonStyle}>
          Submit
        </button>
      </div>
      <button
        onClick={handleSubmitAll}
        className={`${buttonStyle} mt-10 bg-red-500`}>
        Submit
      </button>
    </div>
  );
}
export default QusPage;
