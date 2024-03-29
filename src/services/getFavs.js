import { PROTOCOL, DOMAIN } from "./settings";
const PATH = "favs";

export default function getFavs({ token }) {
  /* Creamos el token con protocolo bearer */

  const bearer = "Bearer " + token;

  return fetch(`${PROTOCOL}://${DOMAIN}/${PATH}`, {
    method: "GET",
    headers: {
      Authorization: bearer,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
