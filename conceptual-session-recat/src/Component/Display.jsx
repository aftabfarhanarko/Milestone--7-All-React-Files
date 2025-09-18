import React from 'react';

const Display = ({element}) => {
    return (
        <div className=' w-sm mx-auto mt-5'>
            <div className="bg-amber-200 px-2 py-6 rounded-lg ">
             
             {element.completed ? <p className='text-[17px] font-semibold'>User Id : {element.id}</p> : <p className='text-[17px] font-semibold text-red-600'>User Id : {element.id} false</p>

             }
                <p className='text-[17px] font-semibold'>Title : {element.title}</p>
            </div>
            
        </div>
    );
};

export default Display;   