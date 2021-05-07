import React, { useEffect, useState } from "react";
import { IpAddressResultsitem } from "./item";
import { useGlobalData } from "../../../Hooks/useGlobalData";

export const IpAddressResultsContainer = () => {
  const { data, setValueInput } = useGlobalData();
  const [IpAddress, setIpAddress] = useState(data);
  useEffect(() => {
    setIpAddress(data);
    console.log(data);
  }, [data]);

  return (
    <section className="w-11/12 bg-white p-3 rounded-md mt-5 m-auto flex flex-col">
      <IpAddressResultsitem category={"IP Address"} />
      <IpAddressResultsitem category={"Location"} />
      <IpAddressResultsitem category={"Timezone"} />
      <IpAddressResultsitem category={"ips`"} />
    </section>
  );
};
