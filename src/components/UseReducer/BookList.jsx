import React, { useReducer, useState } from "react";
const initialState = {
  books: [],
  readCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: Date.now(),
            title: action.payload,
            read: false,
            startDate: null,
            finishDate: null,
          },
        ],
      };
    case "TOGGLE_BOOK":
      const bookToToggle = state.books.find((b) => b.id === action.payload);
      if (!bookToToggle) return state;
      const currentDate = new Date().toLocaleDateString();
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? {
                ...book,
                read: !book.read,
                startDate:
                  !book.read && !book.startDate ? currentDate : book.startDate,
                finishDate: !book.read ? currentDate : null,
              }
            : book
        ),
        readCount: state.readCount + (!bookToToggle.read ? 1 : -1),
      };
    case "DELETE_BOOK":
      const bookToDelete = state.books.find((b) => b.id === action.payload);
      if (!bookToDelete) return state;

      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
        readCount: state.readCount - (bookToDelete.read ? 1 : 0),
      };

    case "EDIT_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? { ...book, title: action.payload.title }
            : book
        ),
      };

    default:
      return state;
  }
};
const BookList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: "ADD_BOOK", payload: input });
      setInput("");
    }
  };
  const handleToggle = (bookId) => {
    dispatch({ type: "TOGGLE_BOOK", payload: bookId });
  };
  const handleDelete = (bookId) => {
    if (window.confirm("Estas seguro que quierer eliminar?"))
      dispatch({ type: "DELETE_BOOK", payload: bookId });
  };
  const handleEditStart = (book) => {
    setEditingId(book.id);
    setEditInput(book.title);
  };
  const handleEditSubmit = (e, bookId) => {
    e.preventDefault();
    if (editInput.trim()) {
      dispatch({
        type: "EDIT_BOOK",
        payload: { id: bookId, title: editInput },
      });
      setEditingId(null);
      setEditInput("");
    }
  };
  return (
    <div className="App">
      <h1>Mi Biblioteca</h1>
      <h2>Libros Leidos: {state.readCount}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Añadir nuevo libro"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {state.books.map((book) => (
          <li key={book.id}>
            {editingId === book.id ? (
              // Formulario de edición
              <form onSubmit={(e) => handleEditSubmit(e, book.id)}>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  autoFocus
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => setEditingId(null)}>
                  Cancelar
                </button>
              </form>
            ) : (
              // Vista normal
              <>
                <input
                  type="checkbox"
                  checked={book.read}
                  onChange={() => handleToggle(book.id)}
                />
                <span
                  style={{
                    textDecoration: book.read ? "line-through" : "none",
                  }}
                >
                  {book.title}
                </span>
                {book.startDate && (
                  <span className="date">Iniciado: {book.startDate}</span>
                )}
                {book.finishDate && (
                  <span className="date">Terminado: {book.finishDate}</span>
                )}
                <button onClick={() => handleEditStart(book)}>Editar</button>
                <button onClick={() => handleDelete(book.id)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookList;
