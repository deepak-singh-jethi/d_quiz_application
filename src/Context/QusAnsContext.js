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
    //calculate score
    const scorecalc = qusAns.reduce((acc, question, index) => {
      if (question.selectedAns === question.correct_answer) {
        return acc + 1;
      }
      return acc;
    });
    setScore(scorecalc);
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
  };

  return (
    <QusAnsContext.Provider value={contextValue}>
      {children}
    </QusAnsContext.Provider>
  );
}
