import React, { useEffect } from "react";
import { useGlobalData } from "../../../Hooks/useGlobalData";

export const IpAddressResultsitemIp = ({ category, ip }) => {
  const { loading } = useGlobalData();
  return (
    <article className="m-auto mb-4 uppercase font-rubik ">
      <h4 className="text-colorgray font-bold text-xs tracking-wider text-center">
        {category}
      </h4>
      {!loading && <p className="font-medium text-xl text-blueBlack"> {ip}</p>}
    </article>
  );
};
