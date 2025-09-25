import React from "react";

const CountBox = ({ data }) => {
  const panding = data.filter((paind) => paind.status == "Pending");
  const submit = data.filter((paind) => paind.status == "Submitted");
  const rewew = data.filter((paind) => paind.status == "Reviewed");

  return (
    <div className="max-w-[1100px] mx-auto mt-10 grid grid-cols-3 gap-5 text-white font-semibold text-xl">
      <div className="bg-red-500 h-[200px] flex justify-center items-center text-center">
        <div>
          <h1>Pending</h1>
          <p>{panding.length}</p>
        </div>
      </div>
      <div className="bg-blue-500 h-[200px] flex justify-center items-center text-center">
        <div>
          <h1>Submitted</h1>
          <p>{submit.length}</p>
        </div>
      </div>
      <div className="bg-green-500 h-[200px] flex justify-center items-center text-center">
        <div>
          <h1>Reviewed</h1>
          <p>{rewew.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CountBox;
