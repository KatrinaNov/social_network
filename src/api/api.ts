import axios from "axios";

const instance= axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '860b2199-293d-4424-9b31-caa190db03c4'
  }
});

export const usersAPI = {
  getUsers (currentPage: number = 1, pageSize: number = 10)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  getUserProfile (userId: string) {
    return instance.get(`profile/` + userId).then(response => response.data)
  },
  authMe ()  {
    return instance.get(`auth/me`, ).then(response => response.data)
  },
  unFollow (id: number) {
    return  instance.delete(`follow/${id}`).then(response => response.data)
  },
  follow (id: number)  {
    return   instance.post(`follow/${id}`).then(response => response.data)
  }

}

// export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
//   return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
// }
//
// export const getUserProfile = (userId: string) => {
//   return instance.get(`profile/` + userId).then(response => response.data)
// }
//
// export const authMe = () => {
//   return instance.get(`auth/me`, ).then(response => response.data)
// }
//
// export const deleteFollow = (id: number) => {
//   return  instance.delete(`follow/${id}`).then(response => response.data)
// }
//
// export const getFollow = (id: number) => {
//   return   instance.post(`follow/${id}`).then(response => response.data)
// }