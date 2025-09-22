import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './test.css'


const Countrise = ({featchData}) => {

    const [country , setCountry] = useState([]);
    const preantHandelar = (data) => {
        const newarr = [...country,data];
        setCountry(newarr);
    }

    const promiseCountry = use(featchData);
    console.log(promiseCountry)
    const countrines = promiseCountry.countries;
    return (
        <div >
            <h2>Leangth : {country.length} </h2>
            <ol>
                 {
                    country.map(ele => <li>{ele.name.common}</li>)
                 }
            </ol>
           <div className="broder">
             {
                countrines.map(data => <Country
                 key={data.cca3.cca3}    data={data} preantHandelar={preantHandelar}></Country>)
            }
           </div>
        </div>
    );
};

export default Countrise;