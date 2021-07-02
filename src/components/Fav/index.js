import React, { useCallback, useEffect, useState } from "react";
import useUser from "hooks/useUser";
import ModalPortal from "components/Modal";
import Login from "components/Login";
import Logo from "components/Logo";
import "./styles.css";

const Fav = ({ id }) => {
  const { isLogin, addFav, favs, deleteFav } = useUser();
  const [isFaved, setIsFaved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsFaved(favs.some((favId) => favId === id));
  }, [favs, id]);

  const handleClick = () => {
    if (!isLogin) return setShowModal(true);
    isFaved ? deleteFav({ id }) : addFav({ id });
  };

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const handleLogin = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const [label, emoji] = isFaved ? ["Remove Gif", "💗"] : ["Add Gif", "🤍"];

  return (
    <>
      <button className="fav" onClick={handleClick}>
        <span className="fav__icon" role="img" aria-label={label}>
          {emoji}
        </span>
      </button>
      {showModal && (
        <ModalPortal onClose={handleClose}>
          <Logo />
          <Login onLogin={handleLogin} />
        </ModalPortal>
      )}
    </>
  );
};

export default Fav;
