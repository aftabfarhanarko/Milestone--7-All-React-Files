import React from 'react';
import './Styles.css'
const Bottel = ({bottl,handelBtnAddLS}) => {
    return (
        <div className=' broder'>
            <img className='w-[300px] mx-auto' src={bottl.img}></img>
            <p>Name : {bottl.name}</p>
            <p>Stock : {bottl.stock}</p>
            <p>Price : ${bottl.price}</p>
            <button className='bg-red-300 px-2 rounded-lg text-white text-[14px] py-1' onClick={() => handelBtnAddLS(bottl)}>Add to Card</button>
        </div>
    );
};

export default Bottel;