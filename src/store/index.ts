import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    token: "",
    id: "",
    info: ""
  },
  mutations: {
  },
  actions: {
    login({ state }, form) {
      axios.post('login_check', {
        "email": form.email,
        "password": form.password
      }).then(response => {
        state.token = response.data.token;
      }).catch(
          error => {
            if (error) throw error
          }
      );
    },
    register({ state }, form) {
      axios.post('users', {
        "email": form.email,
        "firstname": form.firstname,
        "lastname": form.lastname,
        "password": form.password
      }).then(response => {
        state.id = response.data.id;
      }).catch(
          error => {
            if (error) throw error
          }
      );
    },
    getPromos({state}) {
      axios.get('promos', {headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTUzNjIxMDMsImV4cCI6MTYxNTQ0ODUwMywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJlbWFpbCI6Imdyb3VwZUBlcHNpLmZyIiwidXNlcklkIjoiODVjMWU5ZjgtZDcyMi00ZjY4LWIyODgtNmY4NTg3YTU4MWIzIn0.hXd7GtdixWOJMk-S9C-RD2o7LiG5HwZED95zBpk08BcAlWzsiqaGPCIXhO_JjzXecdhTKWXHe2JhHlTqiu9qeK1OAV1bm35uz7BNWCvrUmQ80vdNreb5xV8qO2076knJFXWY3umLha8C0KtDwoxj_yJ8ms3kS0nj7A2rkOVrQoeskGSk--mPC9MxAJuNmUYAT028eqq5bgeciDyuOqWuquSYvEo1_yz8U5sdjb7UyTZ3EpzlY1yy0V_shHtfXDwC8Jc6vsljJ9IjL2-kkvRVZFeiweob3RS4rAxNyVbMEGzi1HMi1-Zu6XsSQnN-cAUe2R8j5z88ON0k9poarbbf66rAQYr5RXyU-NHy1k7-LVGQYPrefRM2IGX2_xoFnJrj03twTb-MY119-nwyImc4da7AIXv8UrA94BxVQKSasElL4iLaTen6clhZ7ErlnRZNq_zIOW9AN14kJTwnBHq9kS04mCl8j020LikDs6zK3ysl3AGB6pRq024weZgrhduQxVYq7kIpcS5UCz_FKSdWh2HebVapSrvx_hIcnpFseeB7k8dCWpWf0Jj5U9ZB-abcp8u1e3ta5K49OuteFxdBL2qsSLtRxGT3AICHviLRgNqVxqiagDJeXrUKdM_MjxZmGv7NuDD6_tSNnbPbyeWdYsX9lbmIca7kWnvJ6f0AvrU"}}).then(response => {

        state.info = response.data

      }).catch(
          error => {
            if (error) throw error
          }
      );
    }
  },
  modules: {
  }
})
