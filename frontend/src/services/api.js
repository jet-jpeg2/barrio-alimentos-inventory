// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const materialService = {
  // Get all materials
  getAll: () => api.get('/materials'),
  
  // Get single material
  getById: (id) => api.get(`/materials/${id}`),
  
  // Create material
  create: (data) => api.post('/materials', data),
  
  // Update material
  update: (id, data) => api.put(`/materials/${id}`, data),
  
  // Delete material
  delete: (id) => api.delete(`/materials/${id}`)
};

export default api;
