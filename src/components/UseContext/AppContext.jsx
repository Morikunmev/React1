import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Usuario Demo",
    role: "user",
    email: "demo@example.com",
  });

  const [theme, setTheme] = useState("light");

  const [notifications, setNotifications] = useState({
    count: 3,
    messages: ["Notificación 1", "Notificación 2", "Notificación 3"],
  });

  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addNotification = (message) => {
    setNotifications((prev) => ({
      count: prev.count + 1,
      messages: [...prev.messages, message],
    }));
  };

  const value = {
    user,
    updateUser,
    theme,
    toggleTheme,
    notifications,
    addNotification,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook personalizado
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp debe usarse dentro de un AppProvider");
  }
  return context;
};
