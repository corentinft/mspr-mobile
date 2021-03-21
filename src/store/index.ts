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
      axios.get('promos', {headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTYzMzM1MjcsImV4cCI6MTYxNjQxOTkyNywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJlbWFpbCI6Imdyb3VwZUBlcHNpLmZyIiwidXNlcklkIjoiODVjMWU5ZjgtZDcyMi00ZjY4LWIyODgtNmY4NTg3YTU4MWIzIn0.M57Qb7iRSe_cZsqYuZWhXjGfadWrVQ9wC9KXFEY_0opVcPw1XYs17eelKyKyw4Xv9BC5yop6jPGSzg7ZRF62csBR4zpPcDBvzAhX30lE-zY4oiT1GlafQC1YBdaeq4LM8I6XeZDbkxnqG0qTYgjsTz9BbzMzlAJZOSUVurb3wGCmMbiq5ZujTH0q3c_xqeo_WKpFri8YtJ7Cf0Ux0G9OgxvKXgKzNHQeuhucL76Hm6a69dkRJ4RoT-NJoePbaFOIHL7ujuzUEai1irG5T8KKWL7kuvQjfK6Sfnp6hjp5n7W4mYXTjc91EhueOX2xL_5053GTnJ9_R5evsAJqweJ-z69sYT4YLFSGl22CLbYyqlUQOT6Zei0rYUgwfLUS8HfZuFcZIP_WFF8cadq_zrpag5klRgJczbFPnHO122IKeVZ9lGYWIHu_NgsT-OG39mOJfub36f9ukMSUK-DZuiC4q6Jh4qVcQ-ySgBhYpWLKp8HdCZ2XfuAvmIBy3XGOE773E9KW99iQj-KqZW6VLyIOpKplgbB1UVu1ptRIk84Ky2RJk0IzRQ-05wzQe9ejMxk7stU6ecWe-ysXQvj_Ppq3k3u7vk9Dv3wIR84G02p3xQ0sjtV2H5dR94R_fbzntO1DKNYuHJKC9iMqWyr8dwrViRnLXxhI407O3si6OeSuAR4"}}).then(response => {
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
