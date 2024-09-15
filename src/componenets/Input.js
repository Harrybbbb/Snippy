import React from "react";

export default function Input() {
  return (
    <>
      <div className="flex w-full justify-center items-center pt-6 sm:pt-8 md:pt-10">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
          <input
            type="text"
            className="w-full h-10 sm:h-12 rounded-md bg-lightblack border-solid border-0 border-white focus:outline-none pl-3 text-sm sm:text-base md:text-lg text-white font-basic"
            placeholder="Search here"
            style={{ border: ".5px solid grey" }}
          />
          <div className="absolute right-1.5 top-1.5 sm:right-2 sm:top-2">
            <button className="h-7 sm:h-8 w-16 sm:w-20 text-xs sm:text-sm rounded-md px-2 font-basic text-white bg-purple">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
