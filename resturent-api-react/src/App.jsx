
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Milels from './Componend/Milels';

function App() {
  
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(res => res.json())
    .then(data => setApi(data.meals))
  },[])
 console.log(api);
 
  return (
    <>
      <h1>React</h1>
      <Suspense>
         <Milels api={api}></Milels>
      </Suspense>
    </>
  )
}

export default App
