export default function Food({foodName,hungry,times}){
    const Propety = {
        border:"2px",
        border:"2px solid  Yellow ",
        padding:"20px",
        borderRadius:'20px',
        marginTop:"20px",
    }

   return(
     hungry ?  <li style={Propety}>I am Eating Food : {foodName} Eating times {times >'50s' ? times : 100}</li> : <li style={Propety}>Not Eating This Food : {foodName}</li>
   )

}