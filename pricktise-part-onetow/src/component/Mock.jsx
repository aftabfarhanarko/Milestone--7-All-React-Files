import React from "react";

const Mock = () => {
  return (
    <div className="border w-sm mx-auto p-4 broder-b-0 bg-gray-400 text-white rounded-t-lg">
      <h1 className="text-xl mb-4">Mock</h1>

      <label className="flex items-center gap-2 border px-3 py-2 rounded-md w-[370px]">
        <svg
          className="h-5 w-5 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          type="search"
          required
          placeholder="Search"
          className="flex-1 outline-none"
        />
      </label>
      <div className="flex gap-3 mt-3 font-semibold">
        <input type="checkbox" defaultChecked className="checkbox" />
        <h1>Only Show Products in Show</h1>
      </div>
    </div>
  );
};

export default Mock;
