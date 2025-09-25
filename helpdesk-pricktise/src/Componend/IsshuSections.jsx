import React, { use, useState } from 'react';
import CountBox from './CountBox';
import Buttons from './Buttons';
import DisplayCard from './DisplayCard';

const IsshuSections = ({promiseData}) => {
 
  const [toggle, setToggle] =useState("All")
    const promiseUse = use(promiseData);
    const [data, setData] = useState(promiseUse);

    const filterDataPass = toggle == "All" ? data : data.filter(element => element.status == toggle);
    
    return (
        <>
        <CountBox data={data}></CountBox>
            <Buttons 
            toggle={toggle}
            setToggle={setToggle}
            ></Buttons>
           <div className='grid grid-cols-3 max-w-[1100px] mx-auto gap-5 mt-10'>
             {
                filterDataPass.map(datasa => <DisplayCard 
                    data={datasa} 
                    personData={data} 
                 setData={setData}
                ></DisplayCard>)
            }
           </div>
        </>
    );
};

export default IsshuSections;