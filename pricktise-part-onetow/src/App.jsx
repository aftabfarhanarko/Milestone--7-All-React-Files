import Mock from './component/Mock'
import './App.css'
import { Suspense } from 'react'
import Loding from './component/Loding'
import Producat from './component/Producat'
import State from './component/State'
import Hidden from './component/Hidden'
import City from './component/City'

function restApi () {
  const featach = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  return featach;
}



function App() {
   
  const userData = restApi();
   const products = [
    {id:1, category:"Fruits",price:"$1", stocked: true, name:"Apple"},
    {id:2, category:"Fruits",price:"$2", stocked: true, name:"Dreaghoat"},
    {id:3, category:"Fruits",price:"$3", stocked: false, name:"APassionfruitspple"},

    {id:4, category:"Vagetables",price:"$5", stocked: true, name:"Spinach"},
    {id:5, category:"Vagetables",price:"$6", stocked: false, name:"Pumpkin"},
    {id:6, category:"Vagetables",price:"$3", stocked: true, name:"Peas"},
   ];

  return (
    <>

      <Suspense fallback={<h2>Loding....</h2>}>
         <Mock></Mock>
           <Producat key={products.id} products={products}></Producat>
      </Suspense>
      <State></State>
      <Hidden></Hidden>
       <Suspense fallback={<h2>Loding User Data....</h2>}>
         <City userData={userData}></City></Suspense>      
    </>
  )
}

export default App
