const DOMAIN = "localhost";
const PROTOCOL = "http";
const PORT = 3000;
const PATH = "favs";

export default function addFavService({ id, token }) {
  /* Creamos el token con protocolo bearer */
  const bearer = "Bearer " + token;

  return fetch(`${PROTOCOL}://${DOMAIN}:${PORT}/${PATH}/${id}`, {
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
