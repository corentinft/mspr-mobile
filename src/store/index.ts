import { createStore } from 'vuex';
import axios from "axios";
import route from "../router";

export default createStore({
  state: {
    token: "",
    status: "",
    id: "",
    info: ""
  },
  mutations: {
  },
  actions: {
    login({ state }, form) {
      state.status = "";
      axios.post('login_check', {
        "email": form.email,
        "password": form.password
      }).then(response => {
        state.token = response.data.token;
        state.status = "200";
        localStorage["token"] = response.data.token;
        route.push('/auth/register');
      }).catch(
          error => {
            state.status = "401";
            if (error) throw error
          }
      );
    },
    register({ state }, form) {
      state.status=  "";
      axios.post('users', {
        "email": form.email,
        "firstname": form.firstname,
        "lastname": form.lastname,
        "password": form.password
      }).then(response => {
        state.id = response.data.id;
        state.status = "200";
        route.push('/auth/login');
      }).catch(
          error => {
            state.status = "401";
            if (error) throw error
          }
      );
    },
    getPromos({state}) {
      axios.get('promos', {headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTQ5NDk0MjAsImV4cCI6MTYxNTAzNTgyMCwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJlbWFpbCI6Imdyb3VwZUBlcHNpLmZyIiwidXNlcklkIjoiYmIyYWE3ZjEtOGU5OS00ZjlmLTlkZGUtMWMyM2QwMzMyZWFkIn0.hhiKc2vKemOKrlIGCeslpd_P9CFKHvWBhNox9pYaPsMcMatwQKIokbyQaRtso9ZJPE-vvXVbplnuL_7KRD_CJDt5e8xNIJIfy9H7LeMK_L52iw-PbEOD0XMbh37662NKHse1y86HCo2w1fZN--TyUSIt3wHV27AL0CXJFZcXXlNi4T_r-THJxNSzwpyc-rpCm_9KeR-jVn3Ow5VBaEvfEP1aG2vHK82VEL50uTYW37YDxMJSrwrUprC4SkJ0-OgaJWHbuOqd5cqpEve6Gg8klv42PnemoCJFsNHJNlK2We7QYOmuSmSs0FFmbuLxeUyZwRSo9wbHh6Mp37jvCybEXr1-UOSuFPwlaQ-XL8bvI3GabBfR1E-EMrdw-I7B1GLNlCG1dZNmUxuq2dVGiIueCTYbkA573ce4ApFulwNT-x2NGuhNCQUYbasoUs6593DNqRrQfI4XNUUo6BcZrqZA0ASv-jOuq2UMHXGBiGf4IopGuPo1CZMKzH-RWa6YBa3YVb42laM2_Ek_Ac-43mGKxfT9sddyOhajmVedNV_M63yWvYTZZiztmayO4douF0p2HMziXUJQU6lNoJH7BgJ7LR35qc--zfQCDrYi8WnjVPt5dqP1rkZ9OYH0VHNKg0Y3eZQ0o8c0GCXHq38w_JcKZoFMq5T1cQFPScHbNGhbobM"}}).then(response => {
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
