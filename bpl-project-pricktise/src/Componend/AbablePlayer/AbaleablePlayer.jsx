import React, { use } from 'react';
import CardDisplay from '../DisplayCard/CardDisplay';

const AbaleablePlayer = ({playerDataFeatch,handelBtn,blance,setBlance}) => {
    const playerPromiseUse = use(playerDataFeatch);
    return (
        <div className='max-w-[1100px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
               playerPromiseUse.map(playerData => <CardDisplay
               playerData={playerData}
               handelBtn={handelBtn}
               blance={blance}
               setBlance={setBlance}
               ></CardDisplay>) 
            }
            </div>
            
        </div>
    );
};

export default AbaleablePlayer;