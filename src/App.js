import React, { useState, useEffect, useCallback, Suspense } from "react";
import { ScreenHome } from "./Screen/ScreenHome";
import { useFetch } from "./Hooks/useFetch";
import { apiKey } from "./config";
import { url } from "./config";

import { TextContext } from "./Context/StaticContext";
const { Provider } = TextContext;

export const App = () => {
  const [inputValue, setinputValue] = useState("www.hdjesus.com");
  let UrlApiIp;

  // Esta dondicion , devuelve el endpoint correspondiente a si es una direccion ip o un nombre de dominio
  if (
    inputValue.match(
      /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/
    )
  ) {
    UrlApiIp = `${url}?apiKey=${apiKey}&ipAddress=${inputValue}`;
  } else {
    UrlApiIp = `${url}?apiKey=${apiKey}&domain=${inputValue}`;
  }

  const { data, loading, error } = useFetch(UrlApiIp);

  const setValueInput = useCallback(
    (value) => {
      setinputValue(value);
    },
    [setinputValue]
  );

  return (
    <Suspense>
      <Provider value={{ data, loading, error, setValueInput }}>
        <ScreenHome />
      </Provider>
    </Suspense>
  );
};
