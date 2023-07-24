import axiosClient from '../network/apiClient';

export function saveClicker(num: number) {
  axiosClient.post('/save-counter', num);
}

export function helloClick() {
  var response = axiosClient.get('/hello');
  return response;
}
