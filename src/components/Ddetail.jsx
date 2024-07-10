import React from "react";

const Ddetail = () => {
  return (
    <div className="bg-zinc-900 mx-auto lg:ml-20 my-8 mb-28 w-11/12 lg:w-8/12 text-white rounded-3xl p-6 lg:p-0">
      <div className="mt-10 lg:mt-20">
        <div className="text-zinc-200 lg:pl-20 text-[20px] font-semibold">
          Drones: 0
        </div>
        <div className="h-auto lg:h-screen lg:ml-20 mt-4 rounded-xl">
          <div className="flex justify-between bg-zinc-800 pt-4 w-full lg:w-11/12 h-20 font-semibold rounded-xl px-4 lg:px-0">
            <div className="lg:pl-4">Drone ID</div>
            <div>Drone UIN</div>
            <div>Drone Name</div>
            <div>Drone ____</div>
            <div className="lg:pr-4">Status</div>
          </div>
          <div className="bg-zinc-600 w-full lg:w-11/12 h-auto lg:h-1/2 rounded-2xl mt-4 lg:mt-0 p-6 lg:p-0">
            <div className="flex justify-center items-center h-full">
              <div className="bg-zinc-700 w-32 text-center py-2 font-bold rounded-2xl">
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
