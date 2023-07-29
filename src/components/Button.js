import React from "react";
const list = [
  "All",
  "Games",
  "JavaScript",
  "Cricket",
  "Music",
  "Movie",
  "Cooking",
  "Dance",
];
const Button = () => {
  return (
    <div className="flex justify-between">
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">All</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Games</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">
        JavaScript
      </button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Cricket</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Music</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Movie</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Cooking</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Dance</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Dance</button>
      <button className="bg-gray-300 px-5 py-2 rounded-lg mx-3">Dance</button>
    </div>
  );
};

export default Button;
