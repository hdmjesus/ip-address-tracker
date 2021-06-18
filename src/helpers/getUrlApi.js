import { apiKey, url } from "../config";

export const getUrlApi = (inputValue) => {
  let UrlApiIp;
  // Esta dondicion , devuelve el endpoint correspondiente a si es una direccion ip o un nombre de dominio
  if (
    inputValue.match(
      /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/
    )
  ) {
    UrlApiIp = `${url}?apiKey=${apiKey}&ipAddress=${inputValue}`;
    return UrlApiIp;
  } else {
    UrlApiIp = `${url}?apiKey=${apiKey}&domain=${inputValue}`;
    return UrlApiIp;
  }
};
