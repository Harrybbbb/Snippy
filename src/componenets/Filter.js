import React from "react";
import { useEffect, useState } from "react";
import { content } from "./Cardcontent";
import { Link } from "react-router-dom";

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filtereditems, setFiltereditems] = useState(content);

  const handelFilterClick = (selectedCategory) => {
    if (selectedFilter.includes(selectedCategory)) {
      let filters = selectedFilter.filter((el) => el !== selectedCategory);
      setSelectedFilter(filters);
    } else {
      setSelectedFilter([...selectedFilter, selectedCategory]);
    }
  };

  useEffect(() => {
    filterContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  const filterContent = () => {
    if (selectedFilter.length > 0) {
      let tempItems = selectedFilter.map((selectedCategory) => {
        let temp = content.filter(
          (content) => content.category === selectedCategory
        );
        return temp;
      });
      setFiltereditems(tempItems.flat());
    } else {
      setFiltereditems([...content]);
    }
  };

  const handelAllClick = () => {
    setFiltereditems([...content]);
  };

  let filters = ["Python", "Javascript", "C++", "Java", "HTML", "CSS", "DSA"];

  return (
    <>
      <div className="flex flex-row sm:flex-row flex-wrap w-full p-4 justify-center items-center gap-4 sm:gap-6 md:gap-10 h-auto">
        <button
          onClick={() => handelAllClick()}
          className="px-3 py-1 sm:px-4 sm:py-2 text-lg sm:text-xl rounded-md border-solid text-white bg-black hover:bg-background transition-all font-basic"
          style={{ border: "2px solid #2c2c2c" }}
        >
          All
        </button>
        {filters.map((category, idx) => (
          <button
            onClick={() => handelFilterClick(category)}
            key={`filters-${idx}`}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-lg sm:text-xl rounded-md border-solid bg-black text-white hover:bg-background transition-all font-basic ${
              selectedFilter?.includes(category) ? "bg-background" : ""
            }`}
            style={{ border: "2px solid #2c2c2c" }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="py-6 sm:py-8 md:py-10">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 px-4 sm:px-6 md:px-10 ">
          {filtereditems.map((content, idx) => (
            <div
              key={`content-${idx}`}
              className="card flex flex-col card bg-black rounded-lg p-4 sm:px-5 sm:py-5 shadow-2xl shadow-[#3b82f6]/10 gap-3 h-fit"
              style={{ border: "1px solid grey" }}
            >
              <div className="date text-grey font-basic font-light">
                {content.date}
              </div>
              <div className="title text-white text-xl sm:text-2xl font-basic">
                <p>{content.title}</p>
              </div>
              <div className="language text-grey text-xs sm:text-sm font-basic">
                <p>{content.category}</p>
              </div>
              <div className="code-button flex flex-row justify-center">
                <Link to={`/code/${idx}`}>
                  <button className="h-7 sm:h-8 text-xs sm:text-sm rounded-md px-2 font-basic text-white bg-purple border-2 border-solid border-purple  transition ease-in-out delay-100 hover:scale-110 shadow-lg shadow-purple/50">
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
