// ExamPage.jsx

import React, { useContext, useState } from "react";
import QusPage from "./QusPage";
import SideInfoPage from "./SideInfoPage";
import { QusAnsContext } from "../Context/QusAnsContext";
import ResultPage from "./ResultPage";
import ShowEvaluation from "./ShowEvaluation";

function ExamPage({ setDisplayPage }) {
  const { finalSubmit } = useContext(QusAnsContext);
  const [showEvaluation, setShowEvaluation] = useState(true);

  return (
    <>
      {!finalSubmit ? (
        <section className="flex gap-2">
          <aside className="sm:w-16 bg-sky-800 text-slate-100  h-screen mt-6 rounded-tr-xl text-center md:w-40  lg:w-60 ">
            <SideInfoPage />
          </aside>

          <div className="w-full p-4 flex justify-center items-center quaPage">
            <QusPage />
          </div>
        </section>
      ) : (
        <div className="grid rid-rows-1 w-screen overflow-y-scroll place-items-center ">
          <ResultPage
            setDisplayPage={setDisplayPage}
            setShowEvaluation={setShowEvaluation}></ResultPage>
          {showEvaluation && <ShowEvaluation></ShowEvaluation>}
        </div>
      )}
    </>
  );
}

export default ExamPage;
