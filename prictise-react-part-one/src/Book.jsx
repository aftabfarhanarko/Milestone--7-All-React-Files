import './index.css'
export default function Book({name1, name2, name3,name4}){
    return(
        <div className='sttt'>
            <h1>My Book List</h1>
            <p>On The List Of MY Book Selfe</p>
            <ul>
                 <li>{name1}</li>
                 <li>{name2}</li>
                 <li>{name3}</li>
                 <li>{name4}</li>
            </ul>
        </div>
    )
}