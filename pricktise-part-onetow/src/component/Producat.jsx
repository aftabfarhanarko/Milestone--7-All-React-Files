import React from "react";

const Producat = ({ products }) => {
  const fruits = products.filter((item) => item.category === "Fruits");
  const vegetables = products.filter((item) => item.category === "Vagetables");

  return (
    <div className="border w-sm mx-auto p-4 border-t-0">
      <div className="flex justify-between px-10 mb-2 broder">
        <h1 className="font-semibold text-xl">Name</h1>
        <h1 className="font-semibold text-xl">Price</h1>
      </div>

      <h2 className="text-center font-bold text-lg mt-2 mb-1">Fruits</h2>
      {fruits.map((element) => (
        <div key={element.id} className="flex justify-between px-10 border-b py-1">

          { element.stocked ? <p className="font-medium">{element.name}</p> : <p className="font-medium text-red-500">{element.name}</p>  }

           {
            element.stocked ?<p className="font-semibold">{element.price}</p> :
          <p className="font-semibold text-red-500">{element.price}</p>
           }
        </div>
      ))}
      <h2 className="text-center font-bold text-lg mt-4 mb-1">Vegetables</h2>
      {vegetables.map((element) => (
        <div key={element.id} className="flex justify-between px-10 border-b py-1">
          {element.stocked ? <p className="font-medium">{element.name}</p> : <p className="font-medium text-red-500">{element.name}</p>}
          
          {
            element.stocked ? <p className="font-semibold">{element.price}</p>:<p className="font-semibold text-red-500">{element.price}</p>
          }
        </div>
      ))}
    </div>
  );
};

export default Producat;
