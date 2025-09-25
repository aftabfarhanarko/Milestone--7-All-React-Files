import React, { useState } from 'react';
import Navbar from './Componend/Navbar/Navbar';
import { Suspense } from 'react';
import AbaleablePlayer from './Componend/AbablePlayer/AbaleablePlayer';
import SecleatPlyear from './Componend/SecleatPlayer/SecleatPlyear';
import { removed, setLocalSt } from './VanilaJs/VanilaJs';


const playerDataFeatch = fetch("/players.json").then(res => res.json());

const App = () => {
  const [togl, setTogl] = useState(true);
  const [blance, setBlance]  = useState(9000000000);

  const [seclet, setSeclet] = useState([])
  const handelBtn = (p) => {
    const nrecopy = [...seclet,p];
    setSeclet(nrecopy);
    setLocalSt(p.id);
  }

  const localStoreremoved = (player) => {
    console.log('Removbed Elements ',player);
    const fil = seclet.filter(my => my.id !== player);
    setSeclet(fil)
    removed(fil);
  }


  const removedSeclet = (playr) => {
    console.log("Removed",playr);
    const filters = seclet.filter(element => element.id !== playr.id);
    setSeclet(filters);
  }
  return (
     <>
      <Navbar blance={blance}></Navbar>
      
      <div className='max-w-[1100px] mx-auto flex justify-between mb-5 px-2 md:px-0'>
        <h1 className='text-xl font-semibold'>{togl ? "Available Players" : `Selected Player (${seclet.length}/9)`}</h1>
       <div>
         <button onClick={()=> setTogl(true)}  className={`btn rounded-l-lg ${togl? "bg-[#E7FE29]  hover:bg-[#d8ed19]" : ""}`}>Available</button>
        <button onClick={() => setTogl(false)} className={`btn rounded-r-lg ${togl === false ?"bg-[#E7FE29]  hover:bg-[#d8ed19]" : ""}`}>Selected ({seclet.length})</button>
       </div>
      </div>
    {
      togl ?   <Suspense fallback={<h1>Loaded Data...</h1>}>
        <AbaleablePlayer
         playerDataFeatch={playerDataFeatch}
         handelBtn={handelBtn}
         blance={blance}
         setBlance={setBlance}
         ></AbaleablePlayer>
      </Suspense> : <SecleatPlyear 
      seclet={seclet}
       removedSeclet={removedSeclet} 
       blance={blance}
       setBlance={setBlance}
       localStoreremoved={localStoreremoved}
       ></SecleatPlyear>
     
    }

     </>
  );
};

export default App;