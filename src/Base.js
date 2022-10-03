export const API_BASE_URL = "http://127.0.0.1:8088"; //local
export const OAUTH2_REDIRECT_URI = 'http://127.0.0.1:3000/oauth2/redirect'

//social login url
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

const axios = require('axios');
const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_EXPIRE_TIME = 'user_expire_time';

//global axios config
axios.defaults.baseURL = API_BASE_URL;

export async function nonAuthorizedPOST(url, data) {
  return await axios({
    method: "POST",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(data)
  }).then(response => {
    return response
  }).catch(e => {
    if (e.response) {
      return e.response.data;
    }
  });
}

export async function authorizedGET(url) {
  let token = localStorage.getItem(TOKEN_KEY);
  return await axios({
    method: "GET",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-auth-token": token
    }
  }).then(response => {
    return response;
  }).catch(e => {
    if (e.response) {
      return e.response.data;
    }
  });
}

export async function saveTokenAuth(token, refreshToken) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function isLogout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function setTimeExpire(time) {
  localStorage.setItem(USER_EXPIRE_TIME, time);
}

export function getTimeExpire() {
  return localStorage.getItem(USER_EXPIRE_TIME);
}

export function accessTokenExpired() {
  localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
}

export const globalConfig = {
  i18n: {

  },
  userData: {
    isLoadData: true,
    email: '',
    avatarUrl: ''
  }
}

export async function callAPIRefreshToken() {
  let refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  let url = "/v1/auth/generate-token";
  return await axios({
    method: "POST",
    url: url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-refresh-token": refreshToken
    }
  }).then(response => {
    return response
  }).catch(e => {
    if (e.response) {
      return e.response.data;
    }
  });
}
