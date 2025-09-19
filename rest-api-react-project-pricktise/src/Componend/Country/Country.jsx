import React, { useState } from 'react';
import '../Countries/test.css'

const Country = ({data,preantHandelar}) => {
    // console.log(preantHandelar)
    const firstnast = data.currencies.currencies;
    const secondNastet = Object.keys(firstnast);

    const [my, setMy] = useState(false);
    const handelar = () => {
     {
        my ? setMy(false) : setMy(true)
     }
       preantHandelar(data);
    }
    return (
        <div className={`mybroder ${my && 'colors'}`}>
            <img src={data.flags.flags.png}></img>
            <p>Name : {data.name.common}</p>
            <p>Area : {data.area.area}</p>
            <p>Population : {data.population.population} </p>
            <p>Languages : {data.languages.languages.eng}</p>
            <p>Region : {data.region.region}</p>
            <p>Currencies : {secondNastet[0] ? secondNastet[0] : "Currencies Not Fount"}</p>
            <button onClick={handelar}>
                {my ? "Visied" : "Not Visied"}
            </button>
        </div>
    );
};

export default Country;