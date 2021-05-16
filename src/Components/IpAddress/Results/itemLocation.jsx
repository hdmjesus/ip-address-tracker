import React, { useEffect } from "react";

export const IpAddressResultsitemLocation = ({ category, location }) => {
  const { city, postalCode } = location || {};

  return (
    <article className="m-auto mb-4 uppercase font-rubik ">
      <h4 className="text-colorgray font-bold text-xs tracking-wider text-center">
        {category}
      </h4>
      <p className="font-medium text-xl text-blueBlack">
        {city}, {postalCode}
      </p>
    </article>
  );
};
