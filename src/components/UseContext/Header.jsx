import { useApp } from './AppContext';

export const Header = () => {
  const { user, theme, notifications } = useApp();
  
  return (
    <header>
      <h1>Bienvenido, {user.name}</h1>
      <div>
        <span>Tema: {theme}</span>
        <span>Notificaciones: {notifications.count}</span>
      </div>
    </header>
  );
};