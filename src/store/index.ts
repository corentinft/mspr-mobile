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
      axios.get('promos', {headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTUyMDk1OTYsImV4cCI6MTYxNTI5NTk5Niwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJlbWFpbCI6Imdyb3VwZUBlcHNpLmZyIiwidXNlcklkIjoiYmIyYWE3ZjEtOGU5OS00ZjlmLTlkZGUtMWMyM2QwMzMyZWFkIn0.RSigKVSEBAPtHRg5svwVC9qqX1Rft_hVF5FovseQrE7rfbpO0OlHw0OkjYV62i1NVdrXmGfmYMO6FQAILYkBiDI-LA3J1uDdui9xClb6zO7UHt2W1f7z7fBaNuSF_nE-fSpAHNpN9HkhbZGHSCvDB8XKWq9PD3ZXnr1h8XIuAzezz61CHkOOe6PilnhWau0SidX2BIrYk5mIj1pioc_ts2iUaXYcehd6BGG-2sWbPf6J6JAGB0QNweMmJv6o5NGcbY0Zpm9OtttQu3GK9Y5-32tz_cENAQrPTKSfU3Am0iuIYMyoLixSeWp7d7BGKF65jXLw0y3vB9arUWxBb5To6bHsmcX6qrrkJwcoAaTZt5j5cotmgZrERz8PllnjQKgoXQK-pt4LCNGobNRTlq1Wy6nlhbmqcpffdS7_doFkexjjCxAWXfCD6qu9ff9LJGKXq_Nvj73lTaTvn2noqStuR8PpdO_XY2H5aQaE4rHTR6GXK_1wLQ5Fjbtu2FOqkHYhcyHQuxEXZaBH_swbXnXr1Yq5JXgYlP8R_OcUTNm7uVq0rKMdBoSjqMomM7ATbEDJdnJ0JGGrqyjevbiU5k1PJJ2IYfUgLi7qj8fo1mCDV-NOmYpBwLSBv7Z2-CG2WmINQKXpKgG6evTr20mWL8zN65YIGRz7dyg05N1t3e60-i4"}}).then(response => {
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
