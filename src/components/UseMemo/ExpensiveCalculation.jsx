import { useState, useMemo } from "react";

export const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  // Cálculo costoso: factorial
  const factorial = useMemo(() => {
    console.log("Calculando factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h3>1. Cálculo Factorial con useMemo</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Factorial: {factorial}</p>
      <button onClick={() => setCount((c) => c + 1)}>Contador: {count}</button>
    </div>
  );
};
