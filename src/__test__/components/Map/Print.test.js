import React from "react";
import { mount } from "enzyme";
import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../../Hooks/useFetch";
import { MapPrint } from "../../../Components/Map/Print";
import { getUrlApi } from "../../../helpers/getUrlApi";
import { Map, TileLayer, Marker } from "react-leaflet";

import { TextContext } from "../../../Context/StaticContext";
describe("pruebas en <Print/>", () => {
  const setValueInput = jest.fn();
  const { Provider } = TextContext;
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch(getUrlApi("8.8.8.8"))
  );

  test("debe mostrarse correctamente", async () => {
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading, error } = result.current;
    const wrapper = mount(
      <Provider value={{ data, loading, setValueInput }}>
        <MapPrint />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Map").exists()).toBe(true);
    // const formSubmit = wrapper.find("form").prop("onSubmit");
  });
  test("debe mostrarse el marcador correctamente", async () => {
    const { data, loading, error } = result.current;

    const wrapper = mount(
      <Provider value={{ data, loading, setValueInput }}>
        <MapPrint />
      </Provider>
    );

    expect(wrapper.find("Marker").exists()).toBe(true);
    // const formSubmit = wrapper.find("form").prop("onSubmit");
  });
});
