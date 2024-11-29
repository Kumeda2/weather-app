import { useState } from "react";
import cl from "./Modal.module.css";

export default function Modal({ children, setvisibility }) {
  const handleClose = () => {
    setvisibility((prev) => !prev);
  };

  return (
    <div className={cl.bg} onClick={handleClose}>
      <div className={cl.modal} onClick={(e) => e.stopPropagation()}>
        <div className={cl.cross} onClick={handleClose}>
          <span className={cl.first}>
            <div></div>
          </span>
          <span className={cl.second}>
            <div></div>
          </span>
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
}
