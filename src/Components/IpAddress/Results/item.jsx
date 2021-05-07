import React from "react";

export const IpAddressResultsitem = ({ category }) => {
  return (
    <article className="m-auto mb-4 uppercase font-rubik ">
      <h4 className="text-colorgray font-bold text-xs tracking-wider text-center">
        {category}
      </h4>
      <p className="font-medium text-xl text-blueBlack"> 192.189.98</p>
    </article>
  );
};
