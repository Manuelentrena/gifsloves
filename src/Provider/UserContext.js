import React, { useState, useEffect } from "react";
import getFavs from "services/getFavs";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
  /* Creamos estado para los favs */
  const [favs, setFavs] = useState([]);

  /* Leemos el token del session si existe */
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("token")
  );

  /* Hacer peticion getfavs */
  useEffect(() => {
    if (!token) return setFavs([]);
    getFavs({ token }).then((response) => setFavs(response.data));
  }, [token]);

  /* Proveemos el token con el provider */
  return (
    <UserContext.Provider value={{ token, setToken, favs, setFavs }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
