import { PROTOCOL, DOMAIN } from "./settings";
const PATH = "login";

export default function loginService({ email, password }) {
  return fetch(`${PROTOCOL}://${DOMAIN}/${PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
