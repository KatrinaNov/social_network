import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '860b2199-293d-4424-9b31-caa190db03c4'
  }
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  getUserProfile(userId: string) {
    console.warn('Obsolete method. Please, profileAPI object')
    return profileAPI.getUserProfile(userId)
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },
  follow(id: number) {
    return instance.post(`follow/${id}`).then(response => response.data)
  }

}
export const profileAPI = {
  getUserProfile(userId: string) {
    return instance.get(`profile/` + userId).then(response => response.data)
  },
  getStatus(userId: string) {
    return instance.get(`/profile/status/` + userId).then(response => response.data)
  },
  updateStatus(status: string) {
    return instance.put(`/profile/status`, {status}).then(response => response.data)
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data)
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`).then(response => response.data)
  },
}

