import React, { useState } from "react";
import "../Countries/in.css";

const Country = ({ element, prentPassData, flagesDisplay }) => {
  const nestead = element.currencies.currencies;
  const nasteadObj = Object.keys(nestead);

  const [visied, setVisied] = useState(false);
  const heandlear = () => {
    {
      visied ? setVisied(false) : setVisied(true);
    }
    prentPassData(element);
  };

  const [flages, setFlages] = useState(false);
  const flagesHandle = () => {
    {
      flages ? setFlages(false) : setFlages(true);
    }
    flagesDisplay(element);
  };

  return (
    <div className="broders">
      <img className="myinagea" src={element.flags.flags.png}></img>
      {visied ? (
        <div className="textes">
          <p>Name : {element.name.common}</p>
          <p>
            Area : {element.area.area}{" "}
            {element.area.area > 400000 ? "Big Country" : "Smaller Country"}
          </p>
          <p>
            Population : {element.population.population}{" "}
            {element.population.population > 100000000
              ? "Big Population"
              : "Small Population"}
          </p>
          <h3>Currencies : {nasteadObj[0] ? nasteadObj[0] : "Not Currince"}</h3>
        </div>
      ) : (
        ""
      )}
      <div className="fleaxe">
        <button onClick={heandlear} className={visied && "btn"}>
          {visied ? "Vised" : "Not Visied"}
        </button>
        <button onClick={flagesHandle} className={flages && "counts"}>
          {flages ? "Flag Count" : "Not Count"}
        </button>
      </div>
    </div>
  );
};
export default Country;
