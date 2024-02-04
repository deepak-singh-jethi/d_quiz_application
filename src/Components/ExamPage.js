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
        <section className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-9 xl:gap-10 2xl:gap-12 justify-between">
          <aside className=" xl:w-48 bg-sky-800 text-slate-100 h-screen mt-6 rounded-tr-xl text-center ">
            <div className="flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 h-full sm:mx-4 sm:w-24 md:w-32 lg:w-40 side">
              <SideInfoPage />
            </div>
          </aside>

          <div className="flex flex-grow flex-col justify-center items-start quaPage overflow-x-hidden gap-2 sm:mx-4 md:mx-12 lg:mx-16">
            <QusPage />
          </div>
        </section>
      ) : (
        <div className="grid rid-rows-1 overflow-y-scroll place-items-center ">
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
