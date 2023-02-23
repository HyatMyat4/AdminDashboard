import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchComponent() {
  return (
    <div className=" flexRowCenter bg-gray-200 dark:bg-[#21295c] shadow-lg rounded ml-[15px] mb-[10px] 360:mb-0 ">
      <input
        type="text"
        placeholder="Search by name..."
        className=" outline-none px-[10px] py-[9px] rounded bg-transparent"
      />
      <div className="p-[5px] pr-[12px]">
        <FaSearch className="text-[17px] hover:scale-110 trasition cursor-pointer " />
      </div>
    </div>
  );
}

export default SearchComponent;
