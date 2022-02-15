import axiosInstance from './index'

// 请求接口封装
export const getMusic = () => axiosInstance.get('https://api.apiopen.top/todayVideo');