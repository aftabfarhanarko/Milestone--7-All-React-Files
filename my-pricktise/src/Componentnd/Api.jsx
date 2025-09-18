import Person from './Person';
const Api = ({data}) => {
    console.log(data);
    
    return (
        <div>
            {
             data.map( element => <Person key={element.id} element={element}></Person>)
            }
        </div>
    );
};

export default Api;