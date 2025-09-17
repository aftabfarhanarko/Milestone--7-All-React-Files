import { use } from "react";
import ListItem from "./ListItem";

const City = ({userData}) => {
 const usedata = use(userData)
      
    return (
        <div className=' w-sm mx-auto mt-10'>
             {
                usedata.map(element => <ListItem element={element}></ListItem>)
             }
        </div>
    );
};

export default City;     
