import './index.css'

export default function Applicitons({person}){
  console.log(person)
    return(
        <ul className='myList'>
             <li>{person.name}</li>
             <li>{person.job}</li>
        </ul>
    )
}