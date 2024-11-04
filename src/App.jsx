import React, { useReducer } from "react";
import AdvancedCounter from "./components/UseReducer/AdvancedCounter";
import TodoList from "./components/UseReducer/TodoList";
import BookList from "./components/UseReducer/BookList";

export function App(props) {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;
