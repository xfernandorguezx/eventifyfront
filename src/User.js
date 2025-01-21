import React, { useState, useEffect } from "react";
import UserService from "./UserService";  // Asegúrate de que la importación de UserService sea correcta

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Llamada al servicio para obtener los usuarios
        UserService.getAllUsers()
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error al obtener usuarios:", error));
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>
                            {user.username} - {user.email}
                        </li>
                    ))
                ) : (
                    <p>No hay usuarios disponibles</p>
                )}
            </ul>
        </div>
    );
};

export default User;
