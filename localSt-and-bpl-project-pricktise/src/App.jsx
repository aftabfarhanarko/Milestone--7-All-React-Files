import React, { Suspense, useEffect, useState } from 'react';
import Navbar from './Componend/Navbar/Navbar';
import AbablePlayer from './Componend/AbablePlayer/AbablePlayer';
import SeclectPlayer from './Componend/SeclectPlayer/SeclectPlayer';
import { getLS, setLStor } from './LocalStors/Vanila';


const featchData = async () => {
 const fetchqs = await fetch('/player.json');
 const promis = await fetchqs.json();
 return promis;
}
const  playerData = featchData();
const App = () => {

   const [togal, setTogal]= useState(true)
   const [blance, setBlance] = useState(649999999)
   const [seclectp, setSeclectp] = useState([]);
 
   useEffect(() => {
     
   },[])

  const removedItems = (item) => {
    console.log("Removed Iceons",item);
  }

   const heandleButton = (seclet) => {
    const get = getLS();

    const addArray = [...get,seclet];
    setSeclectp(addArray);
    setLStor(seclet)
   }
  return (
    <>
      <Navbar blance={blance}></Navbar>
      <div className='flex justify-between max-w-[1100px] mx-auto mb-7 mt-5'>
        <h2>
        { togal? "Available Player" : `Secleat Player (${seclectp.length}/6)` }

        </h2>
        <div>
          <button onClick={()=> setTogal(true)}
           class={`btn  rounded-l-lg ${togal ?"bg-amber-600 text-white" : ""}`}>Available</button>

          <button onClick={()=> setTogal(false)} 
          class={`btn  rounded-l-lg ${togal===false ?"bg-amber-600 text-white" : ""}`}>Seclect({seclectp.length})</button>

        </div>
      </div>
     {togal ? 
      <Suspense fallback={<h1>Load Data</h1>}>
         <AbablePlayer
          playerData={playerData}
         heandleButton={heandleButton}
         setBlance={setBlance}
         blance={blance}
         ></AbablePlayer>
      </Suspense> : <SeclectPlayer seclectp={seclectp} removedItems={removedItems}></SeclectPlayer>
     }

      
      
    </>
  );
};

export default App;