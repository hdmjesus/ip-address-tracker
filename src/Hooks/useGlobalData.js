import { useContext } from "react";
import { TextContext } from "../Context/StaticContext";

export function useGlobalData() {
  const data = useContext(TextContext);
  return data;
}
