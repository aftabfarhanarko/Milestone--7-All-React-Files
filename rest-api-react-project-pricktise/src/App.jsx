import { Suspense } from 'react';
import './App.css'
import Countrise from './Componend/Countries/Countrise'


function App() {
  const featchData = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());
  return (
    <>
     <h1>Hello react</h1>
     <Suspense fallback={<h1>Loding Data.....</h1>}>
           <Countrise featchData={featchData}></Countrise>
     </Suspense>
    </>
  )
}

export default App
