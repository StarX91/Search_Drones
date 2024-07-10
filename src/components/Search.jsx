import React from "react";
import Sdrone from "./Sdrone";
import Ddetail from "./Ddetail";

const Search = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black h-auto lg:h-screen">
      <Sdrone />
      <Ddetail />
    </div>
  );
};

export default Search;
