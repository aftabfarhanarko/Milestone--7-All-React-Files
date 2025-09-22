import React from 'react';

const Bottal = ({data,handlerButtons}) => {
    return (
       <div className=' broder'>
            <img className='w-[300px] mx-auto' src={data.img}></img>
            <p>Name : {data.name}</p>
            <p>Stock : {data.stock}</p>
            <p>Price : ${data.price}</p>
            <button className='bg-red-300 px-2 rounded-lg text-white text-[14px] py-1' onClick={() => handlerButtons(data)}>Add to Card</button>
        </div>
    );
};

export default Bottal;