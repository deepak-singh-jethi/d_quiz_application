import React, { useState, useContext } from "react";
import { categories } from "../Data/categories";
import axios from "axios";
import { QusAnsContext } from "../Context/QusAnsContext";

const divClass = "flex justify-between w-full flex-col gap-2 pb-5";
const selectClass =
  "text-stone-600 focus:border-blue-900 px-4 py-3 rounded-md focus:outline-none";

function Home({ onDisplayPage }) {
  const [inputs, setInputs] = useState({
    difficulty: "",
    amount: "5",
    category: "",
  });

  const { addQusAns } = useContext(QusAnsContext);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { amount, difficulty, category } = inputs;

    setInputs((prev) => {
      return {
        ...prev,
        amount: "5",
        difficulty: "",
        category: "",
      };
    });

    try {
      onDisplayPage("fetchLoad");
      const response = await axios.get(
        "https://opentdb.com/api.php?type=multiple",
        {
          params: {
            amount,
            ...(difficulty !== null && { difficulty }),
            ...(category !== null && { category }),
            type: "multiple",
          },
        }
      );
      addQusAns(response.data.results);
      setInputs((prev) => {
        return {
          ...prev,
          amount: "5",
          difficulty: "",
          category: "",
        };
      });
    } catch (err) {
      console.error(err);
    } finally {
      onDisplayPage("letsStart");
    }
  };

  return (
    <form
      className="from-home p-5 sm:p-24 pb-18  rounded-lg bg-sky-800 text-stone-300 w-full sm:w-2/5 md:w-1/2 mx-auto max-w-screen-sm"
      onSubmit={handleSubmit}>
      <div className={divClass} onChange={handleChange}>
        <label>Categories</label>
        <select className={selectClass} name="category">
          <option value={null}>Any</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={divClass}>
        <label>difficulty</label>
        <select
          className={selectClass}
          onChange={handleChange}
          name="difficulty">
          <option value={null}>Mix</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>

      <div className={divClass}>
        <label>Number of Question: </label>
        <select className={selectClass} onChange={handleChange} name="amount">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={39}>30</option>
          <option value={39}>35</option>
          <option value={39}>40</option>
        </select>
      </div>

      <button className="bg-blue-500 px-3 py-2 rounded-md w-full text-stone-100 mt-8 mx-auto hover:bg-blue-400 hover:text-stone-100 h-12">
        Start
      </button>
    </form>
  );
}

export default Home;
