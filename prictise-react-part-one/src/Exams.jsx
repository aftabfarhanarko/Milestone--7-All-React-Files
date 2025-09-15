


export default function Exams({find}){
   return(
    find > 30 ? <div>
            <h2>My Exams Number  Subject</h2>
            <p className="myList2">{find}</p>
        </div> :<p className="myList2">Not Found</p>
   )
}