import React, { Suspense, use, useEffect, useState } from "react";
import Bottel from "../Bottel/Bottel";
import {
  findLSValue,
  removedIteminAddCard,
  setLocalStore,
} from "../../VanilaJS/localStorages";
import DisAddCart from "../DisplayAddCart/DisAddCart";

const Bottlioses = ({ apiPromises }) => {
  const bottlesPromise = use(apiPromises);
  const [carts, setCarts] = useState([]);

  //   useEffect
  useEffect(() => {
    const getTheLs = findLSValue();
    const setArray = [];

    for (const id of getTheLs) {
      const matchBotal = bottlesPromise.find((bot) => bot.id === id);
      if (matchBotal) {
        setArray.push(matchBotal);
      }
    }
    setCarts(setArray);
  }, [bottlesPromise]);

  // Removed Item
  const remopvedAddItems = (id) => {
    console.log("removed functions Clicked", id);
    const allFilters = carts.filter((bottleCler) => bottleCler.id !== id);
    setCarts(allFilters);
    removedIteminAddCard(id);
  };

  // Add Items
  const handelBtnAddLS = (bottal) => {
    const mySetArr = [...carts, bottal];
    setCarts(mySetArr);
    setLocalStore(bottal.id);
  };
  return (
    <div>
      <div className="max-w-[800px] mx-auto">
        <h1>Total Buttole : {bottlesPromise.length}</h1>
        <h1>Add To Card : {carts.length}</h1>
        <Suspense>
          <DisAddCart
            remopvedAddItems={remopvedAddItems}
            key={carts.id}
            carts={carts}
          ></DisAddCart>
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-[800px] mx-auto mt-10">
        {bottlesPromise.map((bottl) => (
          <Bottel
            bottl={bottl}
            key={bottl.id}
            handelBtnAddLS={handelBtnAddLS}
          ></Bottel>
        ))}
      </div>
    </div>
  );
};

export default Bottlioses;
