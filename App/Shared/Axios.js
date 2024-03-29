import axios from 'axios'
import store from '../Stores/index';
import Config from '../Config';
const baseAPI = Config.API_BASE_URL;

export const Axios = axios.create({
  baseURL: baseAPI
})

export const APIRequest = {
  /**
   * 
   */
  async get(url, params) {
    let queryString = convertToQueryString(params);
    url = url + "?" + queryString;

    return Axios.get(url, config());
  },

  /**
   * 
   */
  async put(url, params) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.put(url, params)
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  },

  /**
  * 
  */
  async post(url, params) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.post(url, params, config())
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  },

  async postFormData(url, params) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.post(url, params, configFormData())
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  },

  /**
   * 
   */
  async delete(url) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.delete(url)
        return res(response);
      } catch (error) {
        rej(error)
      }
    });
  }

}

function config() {
  if (store.getState().user.token)
    return {
      headers: { Authorization: `${store.getState().user.token.access_token}` }
    };
  return {};
}

function configFormData() {
  if (store.getState().user.token)
    return {
      headers: {
        Authorization: `${store.getState().user.token.access_token}`,
        'Content-Type': 'multipart/form-data',
      }
    };
  return {};
}

function convertToQueryString(params) {
  if (typeof params == 'string') return params;
  let paramString = ""
  Object.keys(params).map(key => {
    if (params[key] !== "") {
      paramString += key + "=" + params[key] + "&";
    }
  });
  return paramString;
}