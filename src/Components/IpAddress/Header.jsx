import React from "react";
import { IpAddressInput } from "./Input";
import { IpAddressResultsContainer } from "./Results/Container";
import bgHeader from "../../Statics/images/pattern-bg.png";

export const IpAddressHeader = () => {
  return (
    <header
      className="w-full h-80 p-7  m-auto z-10"
      style={{
        backgroundImage: `url(${bgHeader})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="  font-rubik font-bold text-white text-xl text-center mb-4">
        IP Address Tracker
      </h1>
      <IpAddressInput />
      <IpAddressResultsContainer />
    </header>
  );
};
