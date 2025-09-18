import React from "react";

const Person = ({ element }) => {
  console.log(element);
  return (
    <div className="w-sm mx-auto bg-gray-200 mt-10 py-5 text-center rounded-lg">
      <p>Name : {element.address.geo.lng}</p>
    </div>
  );
};

export default Person;
