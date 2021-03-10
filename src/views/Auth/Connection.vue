<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="login-logo">
        <img src="public/assets/icon/icon.png" alt="Ionic logo">
      </div>

      <div>
        <form novalidate>
          <ion-list>
            <ion-item>
              <ion-label position="stacked" color="primary">Adresse e-mail</ion-label>
              <input v-model="form.email" name="email" type="text" spellcheck="false" autocapitalize="off" required/>
            </ion-item>
            <ion-item>
              <ion-label position="stacked" color="primary">Mot de passe</ion-label>
              <input v-model="form.password" name="password" type="password" required/>
            </ion-item>
          </ion-list>
          <ion-row responsive-sm>
            <ion-col>
              <ion-button expand="block" @click.prevent="login(form)">Connexion</ion-button>
            </ion-col>
          </ion-row>
        </form>
      </div>

      <div>
        <br><br><br><br>
        <p style="text-align: center">Pas encore de compte ?
<!--          <a href="route.push('auth/register')">Créer mon compte !</a>-->
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, toastController} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {useRouter} from 'vue-router';
import route from "../router";

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
  mounted() {
    this.$store.watch(() => this.$store.state.status, status => {
      if (status == "401") {
        this.openToastError();
      }
    });
  },
  methods: {
    login(form) {
      this.$store.dispatch('login', form)
    },
    async openToastError() {
      const toast = await toastController
          .create({
            header: 'Erreur lors de la connexion',
            position: 'top',
            buttons: [
              {
                text: 'OK',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          })
      return toast.present();
    }
  },
  setup() {
    const router = useRouter();
    return {router};
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
