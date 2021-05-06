import React from "react";
import iconArrrow from "../../Statics/images/icon-arrow.svg";
export const IpAddressInput = () => {
  return (
    <form className="  m-auto flex w-full ">
      <div className="flex min-w-200 justify-between bg-white rounded-lg  h-9 m-auto  w-full   ">
        <input
          className=" w-full p-2 text-xs bg-transparent outline-none "
          type="text"
          placeholder="Search for Any IP Address or Domain"
        />
        <button type="submit" className="bg-black h-9 w-9 rounded-r-lg">
          <img src={iconArrrow} alt="iconArrow" className="w-3 m-auto" />
        </button>
      </div>

      {/* <button type="submit" className="bg-black h-9 w-9">
        <img src={iconArrrow} alt="iconArrow" className="w-3" />
      </button> */}
    </form>
  );
};
