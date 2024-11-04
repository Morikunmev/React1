import React, { useReducer, useState } from "react";

const initialState = {
  tasks: [],
  completedCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TASK":
      // Primero encontramos la tarea que queremos togglear
      const taskToToggle = state.tasks.find((t) => t.id === action.payload);

      // Calculamos el nuevo completedCount basado en el estado actual de la tarea
      const newCompletedCount =
        state.completedCount + (!taskToToggle.completed ? 1 : -1);

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
        completedCount: newCompletedCount,
      };
    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: "ADD_TASK", payload: input });
      setInput("");
    }
  };

  const handleToggle = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  return (
    <div className="App">
      <h1>Mis tareas</h1>
      <h2>Completadas: {state.completedCount}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)} // Mejor práctica
              onClick={(e) => e.stopPropagation()} // Evita que el click se propague al li
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
