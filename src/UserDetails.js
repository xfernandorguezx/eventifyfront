import React, { useState, useEffect } from "react";
import UserService from "./UserService";

const UserDetails = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (userId) {
            UserService.getUserById(userId)
                .then(response => setUser(response.data))
                .catch(error => console.error("Error fetching user:", error));
        }
    }, [userId]); // Solo vuelve a ejecutarse si el `userId` cambia

    if (!user) {
        return <p>Cargando usuario...</p>;
    }

    return (
        <div>
            <h2>Detalles del Usuario</h2>
            <p><strong>Nombre:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Rol:</strong> {user.role}</p>
        </div>
    );
};

export default UserDetails;
