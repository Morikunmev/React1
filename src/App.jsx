// App.jsx
import { useState } from "react";
import Exercise2 from "./components/UseCallback/Exercise2";
import { Ejercicio1 } from "./components/UseRef/Ejercicio1";
import { Ejercicio2 } from "./components/UseRef/Ejercicio2";
import MultipleRefsDemo from "./components/UseRef/MultipleRefsDemo";

export function App() {
  return (
    <div>
      <h1>Mi Aplicacion</h1>
      <MultipleRefsDemo />
    </div>
  );
}

export default App;
