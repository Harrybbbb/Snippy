import React from "react";

export default function Welcome() {
  return (
    <div className="flex justify-center items-center text-center flex-col w-full pt-6 sm:pt-8 md:pt-10 gap-2 sm:gap-3 md:gap-4">
      <p className="text-2xl sm:text-3xl md:text-4xl font-basic text-white font-semibold text-center px-4 sm:px-6 md:px-8">
        🌟 Elevate your coding game with curated snippets 🚀
      </p>
      <p className="text-xs sm:text-sm md:text-base font-basic text-grey font-normal text-center px-4 sm:px-6 md:px-8">
        Discover, explore, and level up your coding skills with our curated
        collection.
      </p>
    </div>
  );
}
