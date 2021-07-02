import { PROTOCOL, DOMAIN } from "./settings";
const PATH = "favs";

export default function addFavService({ id, token }) {
  /* Creamos el token con protocolo bearer */
  const bearer = "Bearer " + token;

  return fetch(`${PROTOCOL}://${DOMAIN}/${PATH}/${id}`, {
    method: "POST",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
