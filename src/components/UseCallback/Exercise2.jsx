import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onAdd }) => {
  console.log("ChildComponent renderizado");
  return <button onClick={onAdd}>Añadir Elemento</button>;
});

const Exercise2 = () => {
  const [items, setItems] = useState([]);
  const addItem = useCallback(() => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  }, []);
  console.log("Exercise2 renderizado");
  return (
    <div>
      <h2>Ejercicio 2: Lista con Componente Hijo</h2>
      <ChildComponent onAdd={addItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Exercise2