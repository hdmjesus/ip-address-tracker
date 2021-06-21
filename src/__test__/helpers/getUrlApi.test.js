import { apiKey, url } from "../../config";
import { getUrlApi } from "../../helpers/getUrlApi";

describe("Pruebas en getUrlApi", () => {
  test("debe devolver una URL con el endpoint domain si el valor del input es un nombre de dominio", () => {
    const inputValue = "hdjesus.com";

    const UrlApiIpDomain = `${url}?apiKey=${apiKey}&domain=${inputValue}`;
    const apiUrl = getUrlApi(inputValue);

    expect(UrlApiIpDomain).toBe(apiUrl);
  });

  test("debe devolver una URL con el endpoint IP si el valor del input es una direccion IP", () => {
    const inputValue = "8.8.8.8";

    const IpUrl = `${url}?apiKey=${apiKey}&ipAddress=${inputValue}`;
    const apiUrl = getUrlApi(inputValue);

    expect(IpUrl).toBe(apiUrl);
  });
});
