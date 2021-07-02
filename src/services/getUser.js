import { PROTOCOL, DOMAIN } from "./settings";
const PATH = "login";

export default function getUserService({ token }) {
  const bearer = "Bearer " + token;

  return fetch(`${PROTOCOL}://${DOMAIN}/${PATH}`, {
    method: "GET",
    headers: {
      Authorization: bearer,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
