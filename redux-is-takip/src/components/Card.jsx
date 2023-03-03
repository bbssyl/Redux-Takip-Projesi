import React from "react";
import cardBg from "../images/cardBackground.png";
const Card = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col relative rounded-lg h-full shadow-md shadow-gray-300">
        <img
          src={cardBg}
          alt={cardBg}
          className="rounded-lg absolute h-full w-full"
        />
        <div className="z-10 p-6">
          <h5 className="text-gray-500">{props.title}</h5>
          <div className="p-4 flex justify-end text-white gap-2">
            <p className="font-extrabold text-6xl">{props.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
