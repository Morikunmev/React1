import { useApp } from './AppContext';

export const UserProfile = () => {
  const { user, updateUser } = useApp();
  
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Rol: {user.role}</p>
      <button onClick={() => updateUser({ name: 'Nuevo Nombre' })}>
        Actualizar Nombre
      </button>
    </div>
  );
};