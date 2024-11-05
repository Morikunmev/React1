import React, { useState, useEffect } from 'react';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar usuarios');
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []); // Array vacío = solo se ejecuta al montar el componente

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
