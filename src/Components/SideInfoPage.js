import React, { useContext } from "react";
import { QusAnsContext } from "../Context/QusAnsContext";

function SideInfoPage() {
  const { setSelectedIndex, qusAns } = useContext(QusAnsContext);
  console.log(qusAns);

  return (
    <div className="flex flex-col items-center max-h-screen overflow-y-auto mb-5 qus">
      <h1 className="text-center m-4 text-xl sm:text-xl">Qus Status</h1>
      {qusAns.map((item, index) => (
        //TODO handle bug
        <button
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`bg-cyan-600 mb-7 w-16 h-16 p-2 ${
            item.selectedAns === undefined
              ? " bg-cyan-300 text-stone-800 "
              : " bg-green-400"
          } hover:bg-cyan-600 hover:text-stone-50  rounded-md`}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default SideInfoPage;
