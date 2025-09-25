import React from "react";

const DisplayCard = ({ data, personData, setData }) => {

  const handleStatusUpdate = () => {

    // সঠিক property নাম ব্যবহার করো (ticketId)
    const currentTicket = personData.find(
      (element) => element.ticketId === data.ticketId
    );

    // নতুন object বানিয়ে status update
    let updatedTicket = { ...currentTicket };
    if (updatedTicket.status === "Pending") {
      updatedTicket.status = "Submitted";
    } else if (updatedTicket.status === "Submitted") {
      updatedTicket.status = "Reviewed";
    }

    // matched item বাদ দিয়ে নতুন updated data বসানো
    const filteredData = personData.filter(
      (item) => item.ticketId !== data.ticketId
    );

    setData([updatedTicket, ...filteredData]);
  };

  return (
    <div
      onClick={handleStatusUpdate}
      className="bg-gray-200 rounded-xl shadow-md p-4 flex flex-col h-[220px] w-full cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          className="h-[70px] w-[70px] rounded-full object-cover"
          src={data.userImg}
          alt={data.requestedBy}
        />
        <p className="text-lg font-semibold">{data.requestedBy}</p>
      </div>

      <div className="flex justify-between items-center mb-3">
        <p className="font-bold text-xl">{data.subject}</p>
        <div className="flex gap-2">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-lg shadow 
            ${
              data.priority === "High"
                ? "bg-rose-100 text-red-500"
                : data.priority === "Medium"
                ? "bg-purple-50 text-yellow-500"
                : "bg-pink-100 text-pink-500"
            }`}
          >
            {data.priority}
          </span>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-lg shadow
            ${
              data.status === "Submitted"
                ? "bg-green-50 text-green-600"
                : data.status === "Pending"
                ? "bg-red-100 text-red-600"
                : " bg-[#eeeefc] text-purple-500"
            }
            `}
          >
            {data.status}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm overflow-hidden">
        {data.description}
      </p>
    </div>
  );
};

export default DisplayCard;
