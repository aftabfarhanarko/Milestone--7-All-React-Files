// oinditions Reandring - 1

// export default function ToDo ({name}){
//     return(
//         <ul>
//             <li>Name : {name} </li>
//             <li>Age : </li>
//             <li>Workes Ditels : </li>
//         </ul>
//     )
// }

// oinditions Reandring - 2

// export default function ToDo({name,clear}){
//   if(clear){
//     return <li>Your Name : {name}</li>
//   }
//     return <li>Not Your Name : {name}</li>
//   
// }
// oinditions Reandring - 3
export default function ToDo({name,clear}){
 return  clear ? <li>Your Name : {name}</li> : <li>Not Your Name : {name}</li>
}