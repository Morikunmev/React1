{
  /*AdvancedCounter.jsx*/
}
import React, { useReducer } from "react";

const initialState = {
  count: 0,
  lastAction: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, lastAction: "incremento" };
    case "DECREMENT":
      return { count: state.count - 1, lastAction: "decremento" };
    case "MULTIPLY":
      return { count: state.count * 2, lastAction: "multiply" };
    case "DIVIDE":
      return { count: state.count / 2, lastAction: "divide" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const AdvancedCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Contador avanzado</h1>
      <h2>Numero actual {state.count}</h2>
      {state.lastAction && <p>Ultima accion: {state.lastAction}</p>}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "MULTIPLY" })}>X2</button>
      <button onClick={() => dispatch({ type: "DIVIDE" })}>/2</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default AdvancedCounter;
