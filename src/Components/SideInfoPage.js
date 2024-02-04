import React, { useContext } from "react";
import { QusAnsContext } from "../Context/QusAnsContext";

function SideInfoPage() {
  const { setSelectedIndex, qusAns } = useContext(QusAnsContext);

  return (
    <div className="flex flex-col items-center justify-between max-h-screen overflow-y-auto qus w-full ">
      <h1 className="text-center text-sm sm:text-lg my-11">Qus.</h1>
      {qusAns.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`bg-cyan-600 mb-3 sm:mb-5 w-8 h-8 sm:w-12 sm:h-12 p-1 sm:p-2 ${
            item.selectedAns === undefined
              ? "bg-cyan-300 text-stone-800 text-sm sm:text-base "
              : "bg-green-500 text-sm sm:text-base"
          } hover:bg-cyan-200 hover:text-stone-800 rounded-md`}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default SideInfoPage;
