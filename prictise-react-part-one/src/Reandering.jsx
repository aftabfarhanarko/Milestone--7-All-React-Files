 export default function Reandering({name, areYouHeangry}){
   
    return areYouHeangry ? <p className="myList3">I AM Hungry : {name}</p> :<p className="myList3">Not Hungry {name}</p>
 }