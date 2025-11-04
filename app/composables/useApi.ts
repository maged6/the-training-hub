import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backoffice.thetraining-hub.com/api/training-hub/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Optional: Add token interceptor (for login later)
api.interceptors.request.use((config) => {
  const user = localStorage.getItem('user')
  if (user) {
    const { token } = JSON.parse(user)
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
