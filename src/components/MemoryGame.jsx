import React, { useState } from 'react'


const MemoryGame = () => {

  const [gridSize, setGridSize] = useState(4)
  
  return (
    <div className='flex h-screen w-screen'>
        <div className='h-full w-[40%] flex flex-col items-center justify-center'>
            <h1 className='font-bold text-2xl'>Memory Game</h1>
            <img className='w-[50%]' src="/gameAIlogo.JPG" alt="" />

            <div>
              <label 
              className='mr-2'
              htmlFor="gridSize">Grid Size:</label>

              <input 
              className='bg-gray-100 pl-2 rounded'
              id="gridSize"
              type="number" 
              value={gridSize} 
              min="2" 
              max="10"/>
            </div>
            <button className='bg-emerald-500 text-white py-2 px-8 rounded mt-5'>Play</button>
        </div>

        <div className='bg-emerald-600 h-full w-[60%]'>
            Partition 2
        </div>
    </div>
  )
}

export default MemoryGame