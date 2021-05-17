import React, { useEffect, useState } from "react";
import L from "leaflet";
import { useGlobalData } from "../../Hooks/useGlobalData";
import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/src/core/Class";

export const MapPrint = () => {
  const { data, loading, error } = useGlobalData();
  const { location } = data || {};
  const { lat, lng } = location || {};

  // useEffect(() => {
  //   const { lat, lng } = location || {};
  //   if (lat) {
  //     let mymap = L.map("mapid").setView([lat, lng], 13);
  //     var marker = L.marker([lat, lng]).addTo(mymap);
  //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
  //       foo: "bar",
  //       attribution:
  //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //     }).addTo(mymap);
  //     return () => {
  //       if (lat) {
  //         L.remove(mymap);
  //       }
  //     };
  //   }
  // }, [location]);
  // center={(`${lat}`, `${lng}`)}
  // return <div id="mapid" className="z-0"></div>;

  return (
    <div>
      {location && (
        <Map center={[lat, lng]} zoom={13} id="mapid">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]}></Marker>
        </Map>
      )}
    </div>
  );
};
