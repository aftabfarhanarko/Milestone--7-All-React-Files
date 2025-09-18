import React, { useState } from 'react';

const Counts = () => {
    const [count, setCount] = useState(0)

    const ub = () => {
        setCount(count + 1)
    }
    const dice = () => {
        setCount(count - 1)
    }
    const zero = () => {
        setCount(0)
    }
    return (
        <div className='w-sm mx-auto bg-gray-300 h-[200px] mt-10 rounded-lg'>
          <p className='text-center text-2xl pt-4'>Count : {count}</p>
            
            <div className='flex justify-between px-10 pt-27'>
                <button onClick={ub} className='bg-amber-500 px-5'>+</button>
                <button onClick={dice} className='bg-amber-500 px-5'>-</button>
                <button onClick={zero} className='bg-amber-500 px-5'>Zreo</button>
            </div>
        </div>
    );
};

export default Counts;