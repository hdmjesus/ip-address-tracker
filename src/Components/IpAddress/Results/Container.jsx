import React, { useEffect, useState, Suspense, useContext } from "react";
import { IpAddressResultsitemIp } from "./itemIp";
import { IpAddressResultsitemLocation } from "./itemLocation";
import { IpAddressResultsitemIsp } from "./itemIsp";
import { useGlobalData } from "../../../Hooks/useGlobalData";

export const IpAddressResultsContainer = () => {
  const { data, loading, error } = useGlobalData();
  const { ip, isp, location } = data || {};

  return (
    <section className="w-11/12 bg-white p-3 rounded-md mt-5 m-auto flex flex-col">
      <IpAddressResultsitemIp category={"IP Address"} ip={ip} />
      <IpAddressResultsitemLocation category={"Location"} location={location} />
      <IpAddressResultsitemIsp category={"ISP"} isp={isp} />

      {/* {!loading ? (
        <IpAddressResultsitemIp category={"IP Address"} ip={ip} />
      ) : (
        <IpAddressResultsitemLocation category={"Location"} ip={ip} />
      )} */}
    </section>
  );
};
