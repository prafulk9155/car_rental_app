
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/'; 

const api = axios.create({
    baseURL: API_URL,
});

// General GET request function
export const apiGet = async (route) => {
    try {
        const response = await api.get(route);
        return response.data;
    } catch (error) {
        console.error('Error while fetching data:', error);
        throw error; 
    }
};

// General POST request function
export const apiPost = async (route, data) => {
    try {
        const response = await api.post(route, data);
        return response.data;
    } catch (error) {
        console.error('Error while posting data:', error);
        throw error; // Allow handling the error in the calling function/component
    }
};
