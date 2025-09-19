import React from 'react';

const Country = ({element}) => {
    // console.log(element)
    const nestead = element.currencies.currencies;
    const nasteadObj = Object.keys(nestead);
    // const values = Object.values(nestead)[0];
    // const keyeas = Object.keys(values);
    const keay = Object.values(nestead);
    console.log(keay[1]);
    // const sambol = Object.keys(keay);
    return (
        <div>
            <img src={element.flags.flags.png}></img>
            <p>Name : {element.name.common}</p>
             <p>Area : {element.area.area} {element.area.area > 400000 ? "Big Country" : "Smaller Country"}</p>
             <p>Population :  {element.population.population}   {element.population.population > 100000000 ?"Big Population" : "Small Population"  }</p>
             <h3>Currencies : {nasteadObj[0] ? nasteadObj[0] : "Not Currince"}</h3>
        </div>
    );
};
export default Country;