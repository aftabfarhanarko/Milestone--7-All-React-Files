import React, { Suspense } from 'react';
import './App.css'
import Bottiles from './Componend/Bottlise/Bottiles';
const App = () => {
  const fetchPromise = fetch('../public/bottal.json').then(res => res.json());
  return (
    <div>
      <h1>Hello React</h1>
      <Suspense fallback={<h1>Reload Data......</h1>}>
      <Bottiles 
       fetchPromise={fetchPromise}
      ></Bottiles>
                
      </Suspense>
    </div>
  );
};

export default App;