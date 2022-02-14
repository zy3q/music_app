import axiosInstance from './index'

// 请求接口封装
export const getMusic = (params) => axiosInstance.get('https://api.apiopen.top/musicRankingsDetails?type=1', params);