import React from "react";
import iconArrrow from "../../Statics/images/icon-arrow.svg";
import { useForm } from "../../Hooks/useForm";
import { useGlobalData } from "../../Hooks/useGlobalData";

export const IpAddressInput = () => {
  const [inputValue, handleInputChange, reset] = useForm({ ipInput: "" });
  const { ipInput } = inputValue;

  const { data, setValueInput } = useGlobalData();

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();

    setValueInput(ipInput);
  };

  return (
    <form className="  m-auto flex w-full " onSubmit={handleSubmit}>
      <div className="flex min-w-200 justify-between bg-white rounded-lg  h-9 m-auto  w-full   ">
        <input
          className=" w-full p-2 text-xs bg-transparent outline-none "
          name="ipInput"
          type="text"
          placeholder="Search for Any IP Address or Domain"
          onChange={handleInputChange}
          value={ipInput}
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
