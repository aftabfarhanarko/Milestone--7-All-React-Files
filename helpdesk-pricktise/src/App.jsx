import React, { Suspense } from 'react';
import IsshuSections from './Componend/IsshuSections';
const fetchdata = async () =>{
  const res = await fetch("/data.json");
  return res.json();
} 
const promiseData = fetchdata();
const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loding Data......</h2>}>
        <IsshuSections promiseData={promiseData}></IsshuSections>
      </Suspense>
    </>
  );
};

export default App;