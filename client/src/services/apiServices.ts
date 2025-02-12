import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Создание объявления
export const createAd = async (data: object) => {
  const response = await axios.post(`${API_URL}/items`, data);
  return response.data;
};

// Получение всех объявлений
export const getAllAds = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

// Получение объявления по ID
export const getAdById = async (id: string) => {
  const response = await axios.get(`${API_URL}/items/${id}`);
  return response.data;
};

// Обновление объявления по ID
export const updateAd = async (id: string, data: object) => {
  const response = await axios.put(`${API_URL}/items/${id}`, data);
  return response.data;
};

// Удаление объявления по ID
export const deleteAd = async (id: string) => {
  const response = await axios.delete(`${API_URL}/items/${id}`);
  return response.status === 204; // Возвращаем true при успешном удалении
};
