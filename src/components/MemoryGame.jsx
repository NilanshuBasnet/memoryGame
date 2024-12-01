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

  const initializeGame=()=>{
    const totalCards = gridSize * gridSize
    const pairCount = Math.floor(totalCards/2)

    const numbers = [...Array(pairCount).keys()].map((n)=>n+1)
    const shuffledCards = [...numbers,...numbers]

    //Insert Random number in the array when there is odd number of total cards
    if(shuffledCards.length < totalCards){
      const insertRandomNumber = Math.floor(Math.random() * (totalCards + 1))
      shuffledCards.push(insertRandomNumber)
    }

    //shuffle the number in the array
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]; // Swap elements
    }

  setCards(shuffledCards)
  setFlipped([])
  setSolved([])
  setWon(false)
  }

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
            max="6"
            onChange={handleSizeChange}
          />
        </div>
        <button onClick={initializeGame} className="bg-emerald-500 hover:bg-emerald-400 text-white text-2xl py-2 px-10 rounded mt-10">
          Play
        </button>
      </div>

      <div className="flex flex-col h-full w-[60%] rounded items-center justify-center">
        <div className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
        }}>
        {cards.map((card)=>{
          return <div 
          key={card.id} 
          className="m-2 text-white bg-slate-900 w-[70px] h-[70px] rounded flex items-center justify-center">
            {card}
          </div>
          })}
        </div>
        
        
      </div>
    </div>
  );
};

export default MemoryGame;
