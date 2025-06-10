import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const getAllUsers = async () => {
 const response = await axios.get(`${USERS_API}`);
 return response.data; };