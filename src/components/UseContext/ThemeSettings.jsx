import { useApp } from "./AppContext";

export const ThemeSettings = () => {
  const { theme, toggleTheme } = useApp();

  return (
    <div>
      <h3>Configuración de Tema</h3>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>
        Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
      </button>
    </div>
  );
};
