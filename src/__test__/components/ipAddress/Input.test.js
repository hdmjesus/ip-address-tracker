import React from "react";
import { mount } from "enzyme";
import { IpAddressInput } from "../../../Components/IpAddress/Input";
import { TextContext } from "../../../Context/StaticContext";

describe("Pruebas en <IpAddressInput/>", () => {
  const setValueInput = jest.fn();

  const { Provider } = TextContext;
  let loading = false;
  let data = null;
  const wrapper = mount(
    <Provider value={{ data, loading, setValueInput }}>
      <IpAddressInput />
    </Provider>
  );

  test("should show good the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("dont should call handleSubmit", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    expect(setValueInput).toHaveBeenCalledTimes(0);
  });

  test("should call handleSubmit", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(setValueInput).toHaveBeenCalledTimes(1);
  });

  test("should call reset function input", () => {
    expect(wrapper.find("input").prop("value")).toBe("");
  });
  test("should cambiar el estado interno del input correctamente", () => {
    const value = "Google.com";

    let input = wrapper.find("input").simulate("change", {
      target: { value: value, name: "ipInput" },
    });
    expect(wrapper.find("input").prop("value")).toBe(value);
    // expect(wrapper.find('input').prop('value')).toBe('');
  });
});
