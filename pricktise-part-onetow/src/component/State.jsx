import React, { use, useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
     setCount(count + 1);
  }
  const decrement = () => {
     setCount(count - 1);
  }
  const reset = () => {
     setCount(0);
  }
   
  return( <div className="bg-gray-300 w-sm mx-auto mt-10 h-[220px] rounded-lg">

       <h1 className="text-center py-5 text-xl font-semibold ">Count : {count}</h1>
        
        <div className="flex justify-around mt-20">
          <button onClick={increment} className="bg-blue-400 px-5 text-xl  rounded-lg pb-1 hover:bg-blue-600 text-white">+</button>
          <button onClick={decrement} className="bg-blue-400 px-5 text-xl  rounded-lg pb-1 hover:bg-blue-600 text-white">-</button>
          <button onClick={reset} className="bg-blue-400 px-5 text-xl  rounded-lg pb-1 hover:bg-blue-600 text-white">0</button>
          
        </div>
  </div>);
};

export default State;
