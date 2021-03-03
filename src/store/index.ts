import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    token: ""
  },
  mutations: {
  },
  actions: {
    login({ state }, form) {
      axios.post('login_check', {
        "email": form.email,
        "password": form.password
      }).then(response => {
        console.log(response)
        state.token = response.data.token;
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
