import React from "react";

const Ddetail = () => {
  return (
    <div className="bg-zinc-900 ml-20 my-8 mb-28 w-8/12  text-white rounded-3xl">
      <div className="mt-20">
        <div className="text-zinc-200 pl-20 text-[20px] font-semibold">
          Drones: 0
        </div>
        <div className="h-screen ml-20 mt-4  rounded-xl">
          <div className="flex justify-between bg-zinc-800 pt-4 w-11/12 h-20 font-semibold rounded-xl">
            <div className="pl-4">Drone ID</div>
            <div>Drone UIN</div>
            <div>Drone Name</div>
            <div>Drone ____ </div>
            <div className="pr-4">Status</div>
          </div>
          <div className="bg-zinc-600 w-11/12 h-1/2 rounded-2xl">
            <div className="flex justify-center ">
              <div className="bg-zinc-700 w-32 mt-44 pl-1 font-bold rounded-2xl">
                No Data Found
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ddetail;
