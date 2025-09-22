import { useState } from "react";
import Country from "../Country/Country";
import "./in.css";

const Countries = ({ countris }) => {
  const [data, setData] = useState([]);
  const prentPassData = (element) => {
    const newArray = [...data, element];
    setData(newArray);
  };

  const [flag, setFlag] = useState([]);

  const flagesDisplay = (element) => {
    const newFlages = [...flag, element];
    setFlag(newFlages);
  };

  const singleCountry = countris?.countries;
  return (
    <div>
      <h2>Total Country Vised : {data.length}</h2>
      <div className="oders">
        {data.map((ele) => (
          <li>{ele.name.common}</li>
        ))}
      </div>

      <div className="gapease">
        {flag.map((oneFlag) => (
          <div>
            <img className="images" src={oneFlag.flags.flags.png}></img>
            <li>area: {oneFlag.area.area}</li>
          </div>
        ))}
      </div>
      <div className="displayes">
        {singleCountry?.map((element) => (
          <Country
            element={element}
            key={element.cca3.cca3}
            prentPassData={prentPassData}
            flagesDisplay={flagesDisplay}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
