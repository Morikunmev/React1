import { useApp } from "./AppContext";

export const NotificationCenter = () => {
  const { notifications, addNotification } = useApp();

  return (
    <div>
      <h3>Notificaciones ({notifications.count})</h3>
      <ul>
        {notifications.messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <button onClick={() => addNotification("Nueva notificación")}>
        Añadir Notificación
      </button>
    </div>
  );
};
