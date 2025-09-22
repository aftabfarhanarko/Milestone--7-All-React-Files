import React from "react";

const DisAddCart = ({ carts,remopvedAddItems }) => {
  console.log(carts);
  return (
    <div className="flex gap-5  flex-wrap">
      {carts.map((addobj) => (
        <div>
          <img className="w-[100px]" src={addobj.img}></img>
          <p className="text-[10px]">Name : {addobj.name}</p>
          <p className="text-[10px]">Price : ${addobj.price}</p>
          <button onClick={() => remopvedAddItems(addobj.id)} className="bg-red-600 px-3 text-white text-xl rounded-md hover:bg-blue-700">x</button>
        </div>
      ))}
    </div>
  );
};

export default DisAddCart;
