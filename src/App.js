import React, { useState, useEffect, useCallback } from "react";
import { ScreenHome } from "./Screen/ScreenHome";
import { useFetch } from "./Hooks/useFetch";
import { apiKey } from "./config";
import { url } from "./config";

import { TextContext } from "./Context/StaticContext";
import { divIcon } from "leaflet";
import { getUrlApi } from "./helpers/getUrlApi";
const { Provider } = TextContext;

export const App = () => {
  const [inputValue, setinputValue] = useState("www.hdjesus.com");

  const { data, loading, error } = useFetch(getUrlApi(inputValue));

  const setValueInput = useCallback(
    (value) => {
      setinputValue(value);
    },
    [setinputValue]
  );

  return (
    <Provider value={{ data, loading, error, setValueInput }}>
      <ScreenHome />
    </Provider>
  );
};
