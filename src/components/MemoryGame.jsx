import React, { useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const handleSizeChange = (e) => {
    const size = parseInt(e.target.value);

    if (size >= 2 && size <= 10) {
      setGridSize(size);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#ECF0F9]">
      <div className="h-full w-[40%] flex flex-col items-center justify-center">
        <img className="w-[80%] mb-10" src="/gameAIlogo.JPG" alt="" />

        <div>
          <label className="mr-3 text-2xl font-semibold" htmlFor="gridSize">
            Grid Size:
          </label>

          <input
            className="bg-white px-2 py-2  rounded text-2xl"
            id="gridSize"
            type="number"
            value={gridSize}
            min="2"
            max="10"
            onChange={handleSizeChange}
          />
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-2xl py-2 px-10 rounded mt-10">
          Play
        </button>
      </div>

      <div className="bg-emerald-600 h-full w-[60%] rounded">Partition 2</div>
    </div>
  );
};

export default MemoryGame;
