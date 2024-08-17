// src/services/api.service.ts
import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API base URL

const api = axios.create({
    baseURL: API_URL,
});

export const fetchCars = async () => {
    return await api.get('/cars');
};

export const bookCar = async (bookingData: any) => {
    return await api.post('/book', bookingData);
};

// Other API calls can be added here...
