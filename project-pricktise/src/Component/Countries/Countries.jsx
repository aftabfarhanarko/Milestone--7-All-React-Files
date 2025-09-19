import Country from '../Country/Country';
import './in.css'
const Countries = ({countris}) => {
    const singleCountry = countris?.countries;
    return (
        <div>
            <h2>Total Country Vised : 0</h2>
           <div className='displayes'>
             {
            singleCountry?.map(element => <Country element={element}
            key={element.cca3.cca3}
            ></Country>)
           } 
            
           </div>
        </div>
    );
};

export default Countries;