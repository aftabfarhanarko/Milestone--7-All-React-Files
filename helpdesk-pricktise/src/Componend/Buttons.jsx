import React from 'react';

const Buttons = ({toggle,setToggle}) => {
    const btn = ["All", "Pending","Submitted","Reviewed" ]
    return (
         <div className='className=" max-w-[1340px] mx-auto mt-15  px-7 md:flex justify-end '>
             
            {btn.map((btns, ind) => {
          return (
            <button
              key={ind}
              onClick={() => setToggle(btns)}
              className={` ${ind == 0 && "rounded-l-lg"} ${
                ind == 3 && "rounded-r-lg"
              } px-3 py-1 ${toggle === btns && "bg-purple-500 !text-white"}`}
            >
              {btns}
            </button>
          );
        })}
         </div>
    );
};

export default Buttons;