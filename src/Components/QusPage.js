import React, { useContext, useState } from "react";
import { QusAnsContext } from "../Context/QusAnsContext";

const buttonStyle =
  "px-3 sm:px-4 py-1 sm:py-2 bg-blue-700 text-stone-100 hover:bg-green-700 hover:text-stone-200 rounded-lg mb-2 sm:mb-0";

const optionStyle =
  "px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg mb-4 rounded-lg w-4/5";

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
    <div>
      <h2 className="sm:h-[100px] my-4 font-extrabold text-sm sm:text-xs md:text-base lg:text-lg xl:text-xl w-3/5 mt-10">
        <span className="text-red-400">Qus:{selectedIndex + 1}</span>{" "}
        <span dangerouslySetInnerHTML={{ __html: question }} />
      </h2>
      <div className="w-4/5">
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

      <div className="w-4/5 mt-12  flex items-center ">
        <div className="flex justify-between w-[80%]">
          <button onClick={handleSkip} className={buttonStyle}>
            Skip
          </button>
          <button onClick={handleSubmit} className={buttonStyle}>
            Submit
          </button>
        </div>
      </div>

      <div className="flex justify-start mt-10 items-center ">
        <button
          onClick={handleSubmitAll}
          className={`${buttonStyle} mt-10 bg-red-500 self-center`}>
          Submit All
        </button>
      </div>
    </div>
  );
}
export default QusPage;
