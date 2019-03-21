import localStorageService from './localStorage';

function headerRequestHandler(configObj) {
  const config = { ...configObj };
  const token = localStorageService.getToken();
  if (token) {
    config.headers['X-Mystq-Token'] = token;
  }
  return config;
}
export default headerRequestHandler;
