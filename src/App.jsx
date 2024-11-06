// App.jsx
import { useState } from "react";
import { ExpensiveCalculation } from "./components/UseMemo/ExpensiveCalculation";
import { FilterList } from "./components/UseMemo/FilterList";

export function App() {
  return (
    <div>
      <h1>Mi Aplicacion</h1>
      <FilterList />
    </div>
  );
}

export default App;
