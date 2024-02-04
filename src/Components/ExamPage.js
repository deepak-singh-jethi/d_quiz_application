// ExamPage.jsx
import React, { useContext, useState } from "react";
import QusPage from "./QusPage";
import SideInfoPage from "./SideInfoPage";
import { QusAnsContext } from "../Context/QusAnsContext";
import ResultPage from "./ResultPage";
import ShowEvaluation from "./ShowEvaluation";

function ExamPage({ setDisplayPage }) {
  const { finalSubmit } = useContext(QusAnsContext);
  const [showEvaluation, setShowEvaluation] = useState();

  return (
    <>
      {!finalSubmit ? (
        <section className="flex gap-9">
          <aside className="sm:w-14 bg-sky-800 text-slate-100 h-screen mt-6 rounded-tr-xl text-center md:w-40 lg:w-40">
            <div className="flex flex-col justify-start items-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 h-full">
              <SideInfoPage />
            </div>
          </aside>

          <div className="flex  flex-grow flex-col justify-center items-center  quaPage overflow-x-hidden gap-8 ">
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
