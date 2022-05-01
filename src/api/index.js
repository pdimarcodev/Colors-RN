import axios from 'axios';
import ENDPOINTS from './endpoints';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAlbums = () =>
  apiInstance
    .request({
      url: ENDPOINTS.ALBUMS,
      method: 'GET',
      params: { timestamp: Date.now() },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });

export const getPhotos = (id, start, limit) =>
  apiInstance
    .request({
      url: ENDPOINTS.PHOTOS,
      method: 'GET',
      params: {
        albumId: id,
        _start: start,
        _limit: limit,
      },
    })
    .then(response => response.data)
    .catch(error => Promise.reject(error.message));
