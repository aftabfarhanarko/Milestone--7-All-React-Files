import React, { use, useEffect, useState } from 'react';
import Bottal from '../Bottal/Bottal';
import { getLocalStor, removedsAddLisets, setLocalStor } from '../VanilaJS/local-stored';
import AddList from '../DisplayAddList/AddList';

const Bottiles = ({fetchPromise}) => {
    const promisData = use(fetchPromise);
    const [card , setCard]  = useState([]);

//    Find Out Side Data In  useEffect 
    useEffect(() => {
      const getitms = getLocalStor()
      const mtArray = [];
      for (const id of getitms) {
        const filterPromise = promisData.find(neaw => neaw.id === id);
        if(filterPromise){
            mtArray.push(promisData);
        }
      }
      setCard(mtArray)
    }, [promisData])

   const removedItemsinAddList = (item) =>{
  console.log("Removed Buttons ", item);
  const allItems = card.filter((bottls => bottls.id !== item));
  setCard(allItems);
  removedsAddLisets(item);
   }

    const handlerButtons =(data) =>{
        console.log('Clicked Buttons',data);
        const newArray = [...card, data];
        setCard(newArray);
        setLocalStor(data.id)
    }
    return (
        <div>
            <h2>Total Item Add :{card.length} </h2>
            <AddList card={card} removedItemsinAddList={removedItemsinAddList}></AddList>
           <div className='grid grid-cols-3 gap-5 broder-2 border-rose-600'>
             {
                promisData.map(data => <Bottal
                 key={data.id}
                 data={data}
                 handlerButtons={handlerButtons}
                ></Bottal>)
            }
           </div>
            
        </div>
    );
};

export default Bottiles;