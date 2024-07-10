import React from "react";

const Sdrone = () => {
  return (
    <div className="bg-zinc-900 text-white w-full lg:w-1/5 h-auto lg:h-1/2 lg:ml-16 mt-10 lg:mt-52 rounded-3xl p-6 lg:p-0">
      <div className="text-[30px] text-zinc-200 lg:ml-6 mt-2 font-bold">
        Search Drones
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Drones.."
          className="bg-zinc-800 text-[14px] pl-2 mt-8 lg:ml-6 w-full lg:w-10/12 h-8 rounded-md"
        />
      </div>
      <div className="mt-4 lg:ml-6">
        <p className="text-zinc-200 mt-6 text-[18px] font-bold">From</p>
        <div className="flex flex-col lg:flex-row justify-between mt-4">
          <input
            type="date"
            className="text-zinc-200 bg-zinc-800 pl-2 my-1 rounded-md w-full lg:w-auto"
          />
          <input
            type="time"
            className="text-zinc-200 bg-zinc-800 w-full lg:w-1/3 pl-2 my-1 rounded-md lg:mr-10"
          />
        </div>
      </div>
      <div className="mt-4 lg:ml-6">
        <p className="text-zinc-200 text-[18px] font-bold">Till</p>
        <div className="flex flex-col lg:flex-row justify-between mt-4">
          <input
            type="date"
            className="text-zinc-200 bg-zinc-800 pl-2 my-1 rounded-md w-full lg:w-auto"
          />
          <input
            type="time"
            className="text-zinc-200 bg-zinc-800 w-full lg:w-1/3 pl-2 my-1 rounded-md lg:mr-10"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-white w-full lg:w-1/4 h-10 pb-1 text-black mt-8 rounded-md text-[14px] font-semibold">
          Search
        </button>
      </div>
    </div>
  );
};

export default Sdrone;
