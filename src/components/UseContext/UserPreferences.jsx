import { useApp } from "./AppContext";

export const UserPreferences = () => {
  const { user, updateUser } = useApp();

  return (
    <div>
      <h3>Preferencias de Usuario</h3>
      <button onClick={() => updateUser({ role: "admin" })}>
        Cambiar a Admin
      </button>
    </div>
  );
};
