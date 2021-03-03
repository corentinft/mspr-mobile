<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="login-logo">
        <!--<img src="/assets/img/appicon.svg" alt="Ionic logo">-->
      </div>

      <form novalidate>
        <ion-list>
          <ion-item>
            <ion-label position="stacked" color="primary">Adresse e-mail</ion-label>
            <ion-input
                v-model="form.email"
                name="email"
                type="text"
                spellcheck="false"
                autocapitalize="off"
                required
            ></ion-input>
          </ion-item>
<!--          <ion-text color="danger">-->
<!--            <p v-show="!usernameValid || submitted == true" padding-left>Username is required</p>-->
<!--          </ion-text>-->
          <ion-item>
            <ion-label position="stacked" color="primary">Mot de passe</ion-label>
            <ion-input
                v-model="form.password"
                name="password"
                type="password"
                required
            ></ion-input>
          </ion-item>
<!--          <ion-text color="danger">-->
<!--            <p v-show="!passwordValid || submitted == true" padding-left>Password is required</p>-->
<!--          </ion-text>-->
        </ion-list>

        <ion-row responsive-sm>
          <ion-col>
            <ion-button expand="block" @click.prevent="login(form)">Connexion</ion-button>
            <pre>{{$store.state.token}}</pre>
          </ion-col>
        </ion-row>

      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: "Connection",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  },
  data() {
    return {
      form: {
         email: "",
         password: ""
      }
    }
  },
  methods: {
    login(form) {
      console.log(form)
      this.$store.dispatch('login', form)
    }
  }
}

</script>

<style scoped>
.login-logo {
  padding: 20px 0;
  min-height: 200px;
  text-align: center;
}
.login-logo img {
  max-width: 150px;
}
.list {
  margin-bottom: 0;
}
</style>