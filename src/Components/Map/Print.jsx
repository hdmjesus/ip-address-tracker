import React, { useEffect } from "react";
import L from "leaflet";
import { useGlobalData } from "../../Hooks/useGlobalData";
// import { MapContainer } from "react-leaflet";
export const MapPrint = () => {
  const { data, loading, error } = useGlobalData();
  const { location } = data || {};

  useEffect(() => {
    const { lat, lng } = location || {};
    if (lat) {
      let mymap = L.map("mapid").setView([lat, lng], 13);
      var marker = L.marker([lat, lng]).addTo(mymap);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
        foo: "bar",
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mymap);
      return () => {
        if (lat) {
          L.remove(mymap);
        }
      };
    }
  }, [location]);

  return <div id="mapid" className="z-0"></div>;
};
