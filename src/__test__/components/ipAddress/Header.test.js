import React from "react";
import { mount, shallow } from "enzyme";
import { IpAddressHeader } from "../../../Components/IpAddress/Header";
import { TextContext } from "../../../Context/StaticContext";
import { useFetch } from "../../../Hooks/useFetch";
import { renderHook, act } from "@testing-library/react-hooks";
import { getUrlApi } from "../../../helpers/getUrlApi";
import bgImage from "../../../Statics/images/pattern-bg.png";

describe("Probando componente <IpAddressHeader/>", () => {
  const initialState = { data: null, loading: true, error: null };
  test("debe mostrar el componente sin la data", () => {
    const { result } = renderHook(() => useFetch(getUrlApi("www.hdjesus.com")));
    const { data, loading, error } = result.current;
    console.log(getUrlApi("www.hdjesus.com"));
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("debe mostrar el componente con la data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(getUrlApi("8.8.8.8"))
    );
    await waitForNextUpdate();
    // {timeout:2000} se coloca para que el tiempo maximo para tener una respuesta de la API sea de 5000 ms

    const { data, loading, error } = result.current;

    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("debe mostrar el background imagen correcto", async () => {
    const { Provider } = TextContext;
    let loading = false;
    let data = null;
    const wrapper = mount(
      <Provider value={{ data, loading }}>
        <IpAddressHeader />
      </Provider>
    );

    expect(wrapper.find("header").prop("style").backgroundImage).toBe(
      `url(${bgImage})`
    );
    expect(wrapper).toMatchSnapshot();
  });
});
