import { useEffect, useState } from "react";
import UserService from "./UserService";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAllUsers()
            .then(response => {
                console.log("Usuarios recibidos:", response.data);  // 🛠 Verifica en la consola
                setUsers(response.data);
            })
            .catch(error => console.error("Error al obtener usuarios:", error));
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>{user.username} - {user.email}</li>
                    ))
                ) : (
                    <p>No hay usuarios disponibles</p>
                )}
            </ul>
        </div>
    );
}

export default UserList;
