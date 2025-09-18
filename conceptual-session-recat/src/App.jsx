import React, { Suspense } from 'react';
import UserApi from './Component/UserApi';
import Reander from './Component/Reander';
import Counts from './Component/Counts';

const userApi = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/todos")
  return api.json();
}

const App = () => {
  const user = userApi();
  return (
    <>
    <Reander></Reander>
    <Counts></Counts>
       <Suspense fallback={<h1 className='text-center text-2xl font-semibold'>Lodinges Data .....</h1>}>
         <UserApi user={user}></UserApi>
       </Suspense>


    </>
  );
};

export default App;