import React from "react";
import { IpAddressHeader } from "../Components/IpAddress/Header";
import { MapPrint } from "../Components/Map/Print";
export const ScreenHome = () => {
  return (
    <div>
      <IpAddressHeader />

      <MapPrint />
    </div>
  );
};
