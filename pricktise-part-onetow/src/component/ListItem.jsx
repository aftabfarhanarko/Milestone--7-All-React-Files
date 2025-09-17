import React from 'react';

const ListItem = ({element}) => {
    console.log(element)
    return (
        <div className=' w-sm mx-auto mt-10'>
             <ul className='text-[17px] font-medium bg-red-100 px-4 py-6 rounded-lg broder-2 broder-red-700'>
                 <li>Name : {element.name}</li>
                 <li>Company Name : {element.address.city}</li>
                 <li>City Name : {element.company.name}</li>
             </ul>
            
        </div>
    );
};

export default ListItem;