import "./App.css";
import Home from "./Components/Home";
import LetsStartPage from "./Components/LetsStartPage";
import FetchLoad from "./Components/FetchLoad";
import { useState, useContext } from "react";
import ExamPage from "./Components/ExamPage";

import QusAnsProvider from "./Context/QusAnsContext";

function App() {
  const [displayPage, setDisplayPage] = useState("home");
  return (
    <QusAnsProvider>
      {displayPage !== "testPage" && (
        <div className="App ">
          {displayPage !== "testPage" && (
            <h1 className="flex justify-center items-center text-center text-stone-600 font-mono font-bold text-4xl ">
              D-Quiz APP
            </h1>
          )}
          {displayPage === "home" ? (
            <Home onDisplayPage={setDisplayPage}></Home>
          ) : displayPage === "letsStart" ? (
            <LetsStartPage onDisplayPage={setDisplayPage}></LetsStartPage>
          ) : (
            displayPage === "fetchLoad" && (
              <FetchLoad onDisplayPage={setDisplayPage}></FetchLoad>
            )
          )}
        </div>
      )}
      {displayPage === "testPage" && (
        <ExamPage setDisplayPage={setDisplayPage}></ExamPage>
      )}
    </QusAnsProvider>
  );
}

export default App;
