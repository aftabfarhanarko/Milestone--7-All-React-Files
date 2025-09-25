import React from "react";

const SecleatPlyear = ({ seclet,removedSeclet,blance,setBlance,localStoreremoved}) => {
  console.log(seclet);
  return (
    <div className="max-w-[1100px] mx-auto  ">
      {seclet.map((mys) => (
        <div className="border border-gray-300 flex justify-between items-center mb-3 p-3 px-4 rounded-xl">
          <div className="flex gap-4 items-center">
            <div>
              <img
                className="w-[80px] h-[60px] rounded-lg"
                src={mys["player-img"]}
              ></img>
            </div>
            <div>
              <p className="text-xl font-semibold">{mys["player-name"]}</p>
              <p className="text-[15px] text-gray-400">
                {mys["batting-style"]}
              </p>
            </div>
          </div>
          <div onClick={()=> {
            removedSeclet(mys)
             setBlance(blance + parseInt(mys.price))
             localStoreremoved(mys)
            }}>
            <img src="https://i.ibb.co.com/v6fNkN2P/Vector.png"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecleatPlyear;
