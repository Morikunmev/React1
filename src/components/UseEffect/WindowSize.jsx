import React, { useState, useEffect } from "react";

export const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const HandleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    //Agregar el event listener
    window.addEventListener("resize", HandleResize);
    //Quitar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", HandleResize);
    };
  }, []);

  return (
    <div>
      <h2>Tamaño de la ventana: </h2>
      <p>Ancho: {windowSize.width}</p>
      <p>Alto: {windowSize.height}</p>
    </div>
  );
};
