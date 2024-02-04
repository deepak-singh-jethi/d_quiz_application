import React, { useContext } from "react";
import { QusAnsContext } from "../Context/QusAnsContext";

function ShowEvaluation() {
  const { qusAns } = useContext(QusAnsContext);
  console.log(qusAns);

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="min-h-screen max-w-fit mx-6 sm:mx-10 eval ">
      <div className="w-full overflow-x-auto " style={{ maxHeight: "500px" }}>
        <div className="relative">
          <table className="min-w-full bg-white border border-gray-300 ">
            <thead className="sticky top-0 bg-white z-100">
              <tr className="hidden sm:table-row">
                <th className="py-2 px-2 sm:px-4 border-2">No. </th>
                <th className="py-2 px-2 sm:px-4 border-2">Question</th>
                <th className="py-2 px-2 sm:px-4 border-2">Correct Answer</th>
                <th className="py-2 px-2 sm:px-4 border-2">Selected Answer</th>
                <th className="py-2 px-2 sm:px-4 border-2">Result</th>
              </tr>
            </thead>
            <tbody className="max-h-400 overflow-y-scroll text-stone-500">
              {qusAns.map((qusAns, index) => (
                <tr key={qusAns.question} className="hover:bg-gray-100">
                  <td className="sm:table-cell py-2 px-2 sm:px-4 border-2 text-stone-800 text-center">
                    {index + 1}
                  </td>
                  <td
                    className="sm:table-cell py-2 px-2 sm:px-4 border-2"
                    dangerouslySetInnerHTML={renderHTML(qusAns.question)}
                  />
                  <td
                    className="sm:table-cell py-2 px-2 sm:px-4 border-2"
                    dangerouslySetInnerHTML={renderHTML(qusAns.correct_answer)}
                  />
                  <td
                    className="sm:table-cell py-2 px-2 sm:px-4 border-2"
                    dangerouslySetInnerHTML={renderHTML(qusAns.selectedAns)}
                  />
                  <td
                    className={`sm:table-cell py-2 px-2 sm:px-4 border-2 text-center ${
                      qusAns.selectedAns === qusAns.correct_answer
                        ? "bg-green-300"
                        : "bg-red-300"
                    }`}>
                    {qusAns.selectedAns === qusAns.correct_answer ? (
                      <span className=" p-2 sm:p-3">1</span>
                    ) : (
                      <span className=" p-2 sm:p-3">0</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowEvaluation;
