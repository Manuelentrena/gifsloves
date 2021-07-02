const DOMAIN = "localhost";
const PROTOCOL = "http";
const PORT = 3000;
const PATH = "login";

export default function getUserService({ token }) {
  const bearer = "Bearer " + token;

  return fetch(`${PROTOCOL}://${DOMAIN}:${PORT}/${PATH}`, {
    method: "GET",
    headers: {
      Authorization: bearer,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
