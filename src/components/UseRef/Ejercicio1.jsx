import { useRef } from "react";

export const Ejercicio1 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>1. Focus automático en input</h2>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={focusInput}>Dar focus</button>
    </div>
  );
};
