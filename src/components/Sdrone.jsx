import React from "react";

const Sdrone = () => {
  return (
    <div className=" bg-zinc-900 text-white w-1/5 h-1/2 ml-16 mt-52 rounded-3xl ">
      <div className="text-[30px] text-zinc-200 ml-6 mt-2 font-bold">
        Search Drones
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Drones.."
          className="bg-zinc-800 text-[14px] pl-2 ml-6 mt-8 w-10/12 h-8 rounded-md"
        />
      </div>
      <div className="ml-6">
        <p className="text-zinc-200 mt-6 text-[18px] font-bold">From</p>
        <div className="flex justify-between mt-4">
          <input
            type="date"
            className="text-zinc-200 bg-zinc-800 pl-2 my-1 rounded-md"
          />
          <input
            type="time"
            className="text-zinc-200 bg-zinc-800 w-1/3 pl-2 my-1 rounded-md mr-10"
          />
        </div>
      </div>
      <div className="ml-6 mt-4">
        <p className="text-zinc-200 text-[18px] font-bold">Till</p>
        <div className="flex justify-between mt-4">
          <input
            type="date"
            className="text-zinc-200 bg-zinc-800 pl-2 my-1 rounded-md"
          />
          <input
            type="time"
            className="text-zinc-200 bg-zinc-800 w-1/3 pl-2 my-1 rounded-md mr-10"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" bg-white w-1/4 h-7 pb-1 text-black mt-8 rounded-md text-[14px] font-semibold ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Sdrone;
