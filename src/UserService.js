// En UserService.js
import axios from 'axios';

const API_URL = "http://localhost:8080/api/users";

const UserService = {
    getAllUsers: () => {
        console.log("Haciendo solicitud a la API"); // 🛠 Log para verificar la solicitud
        return axios.get(API_URL);
    },
    createUser: (user) => axios.post(API_URL, user)
};
//Comenttario para commit de prueba, eliminar
export default UserService;
