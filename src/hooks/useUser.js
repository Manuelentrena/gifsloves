import { useContext, useCallback, useState } from "react";
import UserContext from "Provider/UserContext";
import registerService from "services/register";
import loginService from "services/login";
import addFavService from "services/addFavService";
import deleteFavService from "services/deleteFav";
import getUserService from "services/getUser";

const useUser = () => {
  /* Provider User */
  const { token, setToken, setFavs, favs } = useContext(UserContext);
  /* Estado del useUser */
  const [state, setState] = useState({
    loading: false,
    error: false,
  });

  const login = useCallback(
    async ({ email, password }) => {
      setState({ loading: true, error: false });
      const { error, data } = await loginService({ email, password });
      if (error) {
        setState({ loading: false, error: true });
        setFavs([]);
        window.sessionStorage.removeItem("token");
      } else {
        setState({ loading: false, error: false });
        const newtoken = data.token;
        window.sessionStorage.setItem("token", newtoken);
        setToken(newtoken);
      }
    },
    [setToken, setFavs]
  );

  const getUser = useCallback(async () => {
    const { error, data } = await getUserService({ token });
    if (error) {
      return error;
    } else {
      return data;
    }
  }, [token]);

  const register = useCallback(
    async ({ username, email, password }) => {
      setState({ loading: true, error: false });
      const { error, data } = await registerService({
        username,
        email,
        password,
      });
      if (error) {
        setState({ loading: false, error: true });
        window.sessionStorage.removeItem("token");
      } else {
        setState({ loading: false, error: false });
        const newtoken = data.token;
        window.sessionStorage.setItem("token", newtoken);
        setToken(newtoken);
      }
    },
    [setToken]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    setToken(null);
    setFavs([]);
  }, [setToken, setFavs]);

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, token })
        .then((listFavs) => {
          setFavs(listFavs.data);
        })
        .catch((error) => console.log(error));
    },
    [token, setFavs]
  );

  const deleteFav = useCallback(
    ({ id }) => {
      deleteFavService({ id, token })
        .then((listFavs) => {
          setFavs(listFavs.data.favs);
        })
        .catch((error) => console.log(error));
    },
    [token, setFavs]
  );

  return {
    isLogin: !!token,
    isLoading: state.loading,
    errorLogin: state.error,
    login,
    register,
    logout,
    addFav,
    deleteFav,
    favs,
    getUser,
  };
};

export default useUser;
