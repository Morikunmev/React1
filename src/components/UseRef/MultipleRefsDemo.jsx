import React, { useRef, useState } from "react";

const MultipleRefsDemo = () => {
  // 1. Referencias para diferentes elementos
  const inputRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const counterRef = useRef(0); // Para guardar un valor que persiste entre renders

  // Estado para forzar re-renders
  const [, setUpdate] = useState(0);

  // 2. Funciones que usan las referencias
  const focusInput = () => {
    inputRef.current.focus();
  };

  const cambiarTexto = () => {
    headingRef.current.textContent = "¡Texto Cambiado!";
  };

  const deshabilitarBoton = () => {
    buttonRef.current.disabled = true;
    buttonRef.current.textContent = "Botón Deshabilitado";
  };

  const contarClicks = () => {
    counterRef.current += 1;
    alert(`Has hecho click ${counterRef.current} veces`);
  };

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const resetTodo = () => {
    // Reiniciar todo al estado inicial
    inputRef.current.value = "";
    headingRef.current.textContent = "Título Original";
    buttonRef.current.disabled = false;
    buttonRef.current.textContent = "Botón Normal";
    videoRef.current.pause();
    counterRef.current = 0;
    // Forzar re-render
    setUpdate((n) => n + 1);
  };

  return (
    <div>
      <h1>Demo de Múltiples Referencias</h1>

      <h2 ref={headingRef}>Título Original</h2>

      <div>
        <input ref={inputRef} type="text" placeholder="Input con referencia" />
      </div>

      <div>
        <button onClick={focusInput}>Enfocar Input</button>

        <button onClick={cambiarTexto}>Cambiar Texto del Título</button>

        <button ref={buttonRef} onClick={contarClicks}>
          Botón Normal
        </button>

        <button onClick={deshabilitarBoton}>Deshabilitar Botón</button>
      </div>

      <div>
        <video
          ref={videoRef}
          width="320"
          height="240"
          src="/api/placeholder/320/240"
        />
        <button onClick={toggleVideo}>Toggle Video</button>
      </div>

      <button onClick={resetTodo}>Resetear Todo</button>
    </div>
  );
};

export default MultipleRefsDemo;
