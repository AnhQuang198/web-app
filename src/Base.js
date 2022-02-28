export const API_BASE_URL = "http://localhost:8088"; //local
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

//social login url
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;

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

export async function authorizedGET(url) {
  let token = localStorage.getItem(TOKEN_KEY);
  return await axios({
    method: "GET",
    url: API_BASE_URL + url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-user-id": 6,
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