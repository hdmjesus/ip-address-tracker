import React, { useState, useEffect, useCallback } from "react";
import { ScreenHome } from "./Screen/ScreenHome";
import { useFetch } from "./Hooks/useFetch";
import { apiKey } from "./config";
import { url } from "./config";

import { TextContext } from "./Context/StaticContext";
const { Provider } = TextContext;

export const App = () => {
  const [inputValue, setinputValue] = useState("www.hdjesus.com");

  const { data, loading, error } = useFetch(
    `${url}?apiKey=${apiKey}&domain=${inputValue}`
  );

  const setValueInput = useCallback(
    (value) => {
      setinputValue(value);
    },
    [setinputValue]
  );

  // useEffect(() => {}, [setValueInput]);

  return (
    <Provider value={{ data, setValueInput }}>
      <ScreenHome />
    </Provider>
  );
};
