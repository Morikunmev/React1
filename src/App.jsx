{
  /*App.jsx*/
}

import React, { useReducer } from "react";
import AdvancedCounter from "./components/UseReducer/AdvancedCounter";
import TodoList from "./components/UseReducer/TodoList";

export function App(props) {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
