import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Up = ({ toUp }) => {
  return (
    <>
      <div className="Up" onClick={toUp}>
        <svg className="Up__icon" width="27.4" height="16" overflow="visible">
          <path
            d="M27.429 13.671c0 .2-.1.4-.3.6l-1.4 1.4c-.2.2-.4.3-.6.3s-.4-.1-.6-.3l-10.8-10.8-10.8 10.8c-.2.2-.4.3-.6.3-.2 0-.4-.1-.6-.3l-1.4-1.4c-.2-.2-.3-.4-.3-.6 0-.2.1-.4.3-.6l12.8-12.8c.2-.2.4-.3.6-.3.2 0 .4.1.6.3l12.8 12.8c.2.2.3.4.3.6z"
            fill="#fbfbfb"
          />
        </svg>
      </div>
    </>
  );
};

export default function UpButton() {
  const [onScroll, setOnScroll] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOnScroll(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    onScroll > 500 ? setShow(true) : setShow(false);
  }, [onScroll, setShow]);

  /* Funciona para arriba */
  const toUp = useCallback(
    () => window.scroll({ top: 0, behavior: "smooth" }),
    []
  );

  return show
    ? ReactDOM.createPortal(
        <Up toUp={toUp} />,
        document.getElementById("up-root")
      )
    : null;
}
