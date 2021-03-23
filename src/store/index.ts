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
        route.push('/app/promotions');
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
      axios.get('promos')
          .then(response => {
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
