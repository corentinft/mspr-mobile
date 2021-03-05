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
              <!--@click="() => router.push('/auth/promo') ;"-->
              <ion-button expand="block" @click.prevent="login(form)" >Connexion</ion-button>
            </ion-col>
          </ion-row>

        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, toastController} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';

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
      },
      token: ""
    }
  },
  methods: {
    login(form) {
      console.log(form)
      this.$store.dispatch('login', form)
    },
    async openToastOptions() {
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
    },
    storeToken(token) {
      const datas = localStorage.getItem("token");
      if (datas == "" || datas == null) {
        localStorage.setItem("token", JSON.stringify([]));
      }
      this.token = JSON.parse(localStorage.getItem("token"));
      this.token.push(token)
      localStorage.setItem("token", JSON.stringify(this.token));
    }
  },
  setup() {
    const router = useRouter();
    return { router };
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