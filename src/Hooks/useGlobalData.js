import { useContext } from "react";
import { TextContext } from "../Context/StaticContext";

export function useGlobalData() {
  const { data, loading, error, setValueInput } = useContext(TextContext);
  return { data, loading, error, setValueInput };
}
