// One System
// export default function Books({name,rigthing,capter}){
// const myStyl = {
//     border: "2px",
//     border: "2px solid lightgreen",
//     marginTop: "20px",
//     borderRadius: "20px",
//     padding: "20px",
//   };
//   let itst ;
//     if(rigthing){
//         itst = <ul style={myStyl}>
//                 <li>I am lisening the Book : {name}</li>
//                 <li>Revetions This Capter : {capter}</li>
//             </ul>;
//     }
//     itst =   <li style={myStyl}>I am Not Lisening The Books : {name}</li>
//     return itst
    
// }
// TOw System
export default function Books({name,rigthing,capter}){
const myStyl = {
    border: "2px",
    border: "2px solid lightgreen",
    marginTop: "20px",
    borderRadius: "20px",
    padding: "20px",
  };


 return(
     rigthing ?
     <div style={myStyl}>
       <li>I am lisening the Book : {name}</li>
       <li>Revetions This Capter : {capter}</li>
    </div> : <li style={myStyl}>I am Not Lisening The Books : {name}</li>
 )

}