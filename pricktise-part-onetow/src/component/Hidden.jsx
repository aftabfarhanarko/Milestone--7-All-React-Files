import { useState } from "react";

const Hidden = () => {
  const [remove, setRemove] = useState(false);

  const shows = () => {
    setRemove(true);
  };

  const hiddens = () => {
    setRemove(false);
  };

  return (
    <div className="w-[400px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 mx-auto mt-10 h-[200px] rounded-lg">
      <p className="text-center pt-6 text-xl font-semibold text-white">
        {remove ? "Hello React Learner " : ""}
      </p>

      <div className="flex justify-between px-10 pt-20">
        <button
          onClick={shows}className="bg-white px-5 text-[17px] font-semibold rounded-md hover:bg-orange-400 py-2 hover:text-white"> Show</button>
        <button
          onClick={hiddens}
          className="bg-white px-5 text-[17px] font-semibold rounded-md hover:bg-orange-400 py-2 hover:text-white"
        >
          Hidden
        </button>
      </div>
    </div>
  );
};

export default Hidden;
