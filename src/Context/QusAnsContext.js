import React, { createContext, useState } from "react";

export const QusAnsContext = createContext();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default function QusAnsProvider({ children }) {
  const [qusAns, setQusAns] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [finalSubmit, setFinalSubmit] = useState(false);
  const [score, setScore] = useState(0);

  function addQusAns(qusAnsArray) {
    // Shuffle the array
    const shuffledArray = shuffleArray([...qusAnsArray]);

    // Map over the shuffled array and add options to each question

    const questionsWithOptions = shuffledArray.map((question) => {
      const options = shuffleArray([
        question.correct_answer,
        ...question.incorrect_answers,
      ]);

      return {
        ...question,
        options,
      };
    });

    setQusAns(questionsWithOptions);
    return;
  }

  function handleFinalSubmit() {
    // calculate score by iterating and checking
    // if the selected answer is correct or not
    let sccl = 0;
    let size = 0;

    qusAns.forEach((qus, index) => {
      //check if selectedAns not undefined
      if (qus.selectedAns) {
        size++;
        if (qus.selectedAns === qus.correct_answer) {
          sccl++;
        }
      }
    });

    if (sccl === 0) {
      setScore("0%");
    } else {
      const finalScore = (sccl / size) * 100;
      const roundedScore = finalScore.toFixed(2);
      setScore(`${roundedScore}%`);
    }

    setFinalSubmit(true);
  }

  const contextValue = {
    addQusAns,
    qusAns,
    selectedIndex,
    setSelectedIndex,
    setQusAns,
    handleFinalSubmit,
    finalSubmit,
    score,
    setFinalSubmit,
  };

  return (
    <QusAnsContext.Provider value={contextValue}>
      {children}
    </QusAnsContext.Provider>
  );
}
