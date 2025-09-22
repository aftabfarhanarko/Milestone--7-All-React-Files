import React, { Suspense } from "react";
import Bottlioses from "./Componend/Bottils/Bottlioses";

const App = () => {
  const apiPromises = fetch("../public/bottles.json").then((res) => res.json());
  return (
    <div>
      <h1 className="max-w-[800px] mx-auto">Hello Loacl Storages</h1>
      <Suspense fallback={<h2>Data Loade....</h2>}>
        <Bottlioses apiPromises={apiPromises}></Bottlioses>
      </Suspense>
    </div>
  );
};

export default App;
