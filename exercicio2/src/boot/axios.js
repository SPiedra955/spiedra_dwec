import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar' 

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: ' http://34.90.153.139/ejercicios/galeria' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (api.status === 200) {
      Notify.create({
        type: 'info',
        message: 'Sending request'
      })
    }
    return config
  },
  function (error) {
    // Do something with request error
    Notify.create({
      type: 'negative',
      message: 'Failed request'
    })
    return Promise.reject(error)
  }
)

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    Notify.create({
      type: 'negative',
      message: 'Failed request'
    });
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Notify.create({
      type: 'positive',
      message: 'Request successful'
    });
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Notify.create({
      type: 'negative',
      message: 'Failed request'
    });
    return Promise.reject(error);
  }
);
export { api, axios }

