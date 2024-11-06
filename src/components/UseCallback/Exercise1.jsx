import React, { useState, useCallback } from "react";
const Exercise1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  console.log("Exercuise renderizado");

  return (
    <div>
      <h2>Ejercicio: Contador Simple</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};
