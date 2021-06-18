import React from "react";
import { mount } from "enzyme";
import { IpAddressHeader } from "../../../Components/IpAddress/Header";

describe("Probando componente <IpAddressHeader/>", () => {
  test("debe mostrar el componente", () => {
    const wrapper = mount(<IpAddressHeader />);
  });
});
