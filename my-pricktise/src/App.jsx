import React, { Suspense, useEffect, useState } from 'react';
import Steat from './Componentnd/Steat';
import Api from './Componentnd/Api';



const App = () => {
 
  const [data, setData] = useState([]);
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => setData(user))
   }, []);

  return (
    <>
     <Steat></Steat>
     <Suspense fallback={<h1>Loding Data.....</h1>}>
      <Api data={data}></Api>
     </Suspense>
      
    </>
  );
};

export default App;