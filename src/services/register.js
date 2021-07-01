const DOMAIN = "localhost";
const PROTOCOL = "http";
const PORT = 3000;
const PATH = "register";

export default function registerService({ username, email, password }) {
  return fetch(`${PROTOCOL}://${DOMAIN}:${PORT}/${PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
}
