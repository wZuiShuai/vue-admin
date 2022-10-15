import axios from "@/utils/axios";

namespace Login {
  // 用户登录表单
  export interface LoginReqForm {
    phone: string;
    password: string;
    username: string;
  }
}
// 用户登录
export const login = (params: Login.LoginReqForm) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<any>("/login", params);
};
//用户注册
export const register = (params: Login.LoginReqForm) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<any>("/register", params);
};