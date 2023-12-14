"use client";
import { useState } from "react";

const names: string[] = ["Ahmad", "Saad", "Hamza"];

type Props = {};

const DataDisp = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === names.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return names.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{names[currentIndex]}</h1>
      <div className="flex space-x-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-red-600 focus:outline-none mx-6"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-green-600 focus:outline-none mx-6"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataDisp;
