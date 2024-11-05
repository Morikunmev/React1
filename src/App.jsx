import React, { useReducer } from "react";
import { DocumentTitle } from "./components/UseEffect/DocumentTitle";
import { UserList } from "./components/UseEffect/UserList";
import { WindowSize } from "./components/UseEffect/WindowSize";
export function App(props) {
  return (
    <div>
      <WindowSize />
    </div>
  );
}

export default App;
