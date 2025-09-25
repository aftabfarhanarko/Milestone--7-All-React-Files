import React, { use } from 'react';
import Display from '../DisplayCard/Display';

const AbablePlayer = ({playerData,heandleButton,setBlance,blance}) => {
    const playerUse = use(playerData);
    console.log(playerUse)
    return (
        <div className='grid grid-cols-3 max-w-[1100px] mx-auto gap-10'>
            {
                playerUse.map(onePlayer => <Display 
                    player={onePlayer}
                     heandleButton={heandleButton}
                        setBlance={setBlance}
                        blance={blance}
                     ></Display>)
            }

        </div>
    );
};

export default AbablePlayer;