import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <button className="modal__close" onClick={onClose}>
          ❌
        </button>
        {children}
      </div>
    </div>
  );
};

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}
