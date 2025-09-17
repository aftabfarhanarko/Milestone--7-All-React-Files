// import { useState } from 'react'
import Users from './Component/Users'
import './App.css'

function App() {
  const persons = {
    name:'Korim',
    age:90
  }
  const persons2 = {
    name:'Korim',
    age:90
  }

  return (
    <>
      <h1>React Conceptual Session </h1>
      
      <Users persons={persons} persons2={persons2}></Users>
    </>
  )
}

export default App
