import React, { useState } from 'react';

const Steat = () => {
    const [count, setCount] = useState(0);

    const ubdeat = () => {
     setCount(count + 1);
    }
    const dictriment = () => {
        setCount(count - 1);
    }
    const zeros = () => {
        setCount(0);
    }
    return (
        <div className='w-sm mx-auto bg-amber-200'>
            <h1 className='text-center pt-5'>Count : {count}</h1>

            <div className='flex justify-between px-10 pt-20 pb-6'>
                <button onClick={ubdeat} className='bg-red-300 px-5 text-xl font-semibold text-white rounded-md'>+</button>
                <button onClick={dictriment} className='bg-red-300 px-5 text-xl font-semibold text-white rounded-md'>-</button>
                <button onClick={zeros} className='bg-red-300 px-5  font-semibold text-white rounded-md'>Zero</button>
             
            </div>
        </div>
    );
};

export default Steat;