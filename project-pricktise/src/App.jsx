import { Suspense, useEffect, useState } from "react";
import Countries from "./Component/Countries/Countries";
import "./App.css";

function App() {
  const [countris, setCountris] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/all")
      .then((res) => res.json())
      .then((data) => setCountris(data));
  }, []);
  return (
    <>
      <h1>React Api Data Pass</h1>
      <Suspense fallback={<h2>Loding Data...</h2>}>
        <Countries countris={countris}></Countries>
      </Suspense>
    </>
  );
}

export default App;
