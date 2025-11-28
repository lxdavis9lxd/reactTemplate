// API Base URL - Update this to your actual API endpoint
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Generic request handler
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      throw new Error(error.message || 'Request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

// CRUD Operations
export const apiService = {
  // GET - Read all
  getAll: (resource) => {
    return request(`/${resource}`);
  },

  // GET - Read one by ID
  getById: (resource, id) => {
    return request(`/${resource}/${id}`);
  },

  // POST - Create
  create: (resource, data) => {
    return request(`/${resource}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // PUT - Update
  update: (resource, id, data) => {
    return request(`/${resource}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // PATCH - Partial update
  patch: (resource, id, data) => {
    return request(`/${resource}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  // DELETE - Delete
  delete: (resource, id) => {
    return request(`/${resource}/${id}`, {
      method: 'DELETE',
    });
  },
};

// Example usage with specific resources
export const usersApi = {
  getAll: () => apiService.getAll('users'),
  getById: (id) => apiService.getById('users', id),
  create: (data) => apiService.create('users', data),
  update: (id, data) => apiService.update('users', id, data),
  delete: (id) => apiService.delete('users', id),
};

export const postsApi = {
  getAll: () => apiService.getAll('posts'),
  getById: (id) => apiService.getById('posts', id),
  create: (data) => apiService.create('posts', data),
  update: (id, data) => apiService.update('posts', id, data),
  delete: (id) => apiService.delete('posts', id),
};

export default apiService;
