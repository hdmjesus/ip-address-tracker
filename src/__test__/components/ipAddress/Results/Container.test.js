import React from "react";
import { mount } from "enzyme";
import { TextContext } from "../../../../Context/StaticContext";
import { IpAddressResultsContainer } from "../../../../Components/IpAddress/Results/Container";
import { IpAddressInput } from "../../../../Components/IpAddress/Input";
import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../../../Hooks/useFetch";
import { getUrlApi } from "../../../../helpers/getUrlApi";
describe("pruebas en <IpAddressResultsContainer/>", () => {
  const setValueInput = jest.fn();
  const { Provider } = TextContext;
  let loading = true;
  let data = null;
  const wrapper = mount(
    <Provider value={{ data, loading, setValueInput }}>
      <IpAddressResultsContainer />
    </Provider>
  );
  test("should show component when loading is true ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar la direccion ip correctamente", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(getUrlApi("8.8.8.8"))
    );

    await waitForNextUpdate({ timeout: 2000 });
    const { data, loading, error } = result.current;
    const wrapper = mount(
      <Provider value={{ data, loading, setValueInput }}>
        <IpAddressInput />
        <IpAddressResultsContainer />
      </Provider>
    );

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(
      wrapper.find("IpAddressResultsitemIp").find("p").text().trim()
    ).toEqual(data.ip);
  });

  test("debe mostrar la direccion geografica correctamente", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(getUrlApi("8.8.8.8"))
    );

    await waitForNextUpdate({ timeout: 2000 });
    const { data, loading, error } = result.current;
    const wrapper = mount(
      <Provider value={{ data, loading, setValueInput }}>
        <IpAddressInput />
        <IpAddressResultsContainer />
      </Provider>
    );

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(
      wrapper.find("IpAddressResultsitemLocation").find("p").text().trim()
    ).toBe(`${data.location.city}, ${data.location.postalCode}`);
  });

  test("debe mostrar el ISP", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(getUrlApi("8.8.8.8"))
    );

    await waitForNextUpdate({ timeout: 2000 });
    const { data, loading, error } = result.current;
    const wrapper = mount(
      <Provider value={{ data, loading, setValueInput }}>
        <IpAddressInput />
        <IpAddressResultsContainer />
      </Provider>
    );

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(
      wrapper.find("IpAddressResultsitemIsp").find("p").text().trim()
    ).toBe(data.isp);
  });
});
