import React, { useState } from 'react';

const Reander = () => {

    const [user , setUser] = useState(false);

    const shows = () =>{
        setUser(true)
    }
    const hide= () =>{
        setUser(false)
    }
    return (
        <div className='w-sm mx-auto bg-blue-300 h-[200px]'>
            <h1 className='text-center text-2xl pt-4 text-red-600'>{user ? "Hello React Lernear" : ""}</h1>

          <div className='flex justify-between px-10 pt-20'>
              <button onClick={shows} className='bg-white px-5 py-2 text-[17px] font-medium rounded-lg'>Show</button>
            <button onClick={hide} className='bg-white px-5 py-2 text-[17px] font-medium rounded-lg'>Heddin</button>
          </div>
            
        </div>
    );
};

export default Reander;