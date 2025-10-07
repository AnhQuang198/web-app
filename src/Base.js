export const API_BASE_URL = "http://localhost:8888"; //local
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

//social login url
export const GOOGLE_AUTH_URL = API_BASE_URL + '/v1/auth/login/oauth2/google';
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorization/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorization/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

const axios = require('axios');
const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export async function nonAuthorizedPOST(url, data) {
  return await axios({
    method: "POST",
    url: API_BASE_URL + url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(data)
  }).catch(e => {
    if (e.response) {
      return e.response.data;
    }
  });
}

export async function nonAuthorizedGET(url, data) {
  return await axios({
    method: "GET",
    url: API_BASE_URL + url,
    headers: {
      Accept: "*/*"
    },
    data: JSON.stringify(data)
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
    url: API_BASE_URL + url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-auth-token": token
    }
  }).catch(e => {
    if(e.response) {
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