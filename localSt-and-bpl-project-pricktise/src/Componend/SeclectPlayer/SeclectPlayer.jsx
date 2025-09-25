import React from "react";

const SeclectPlayer = ({ seclectp,removedItems }) => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        {seclectp.map((mys, index) => (
          <div
            key={index}
            className="border border-gray-300 flex justify-between items-center mb-3 p-3 px-4 rounded-xl"
          >
            <div className="flex gap-4 items-center">
              <div>
                <img
                  className="w-[80px] h-[60px] rounded-lg"
                  src={mys["player-img"]}
                  alt={mys["player-name"]}
                />
              </div>
              <div>
                <p className="text-xl font-semibold">{mys["player-name"]}</p>
                <p className="text-[15px] text-gray-400">
                  {mys["batting-style"]}
                </p>
              </div>
            </div>
            <div onClick={() => {removedItems(mys)}}> 
              <img
                src="https://i.ibb.co.com/v6fNkN2P/Vector.png"
                alt="Remove"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeclectPlayer;
