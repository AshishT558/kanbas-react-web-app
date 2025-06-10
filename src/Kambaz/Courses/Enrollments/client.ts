import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollInCourse = async (courseId: string, userId: string) => {
 const response = await axios.post(`${ENROLLMENTS_API}/${userId}/${courseId}`);
 return response.data; };

export const unenrollFromCourse = async (enrollmentId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`)
    return response.data
}