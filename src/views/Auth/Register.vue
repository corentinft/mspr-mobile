<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div>
        <form novalidate>

          <ion-list>
            <ion-item>
              <ion-label position="stacked" color="primary">Adresse e-mail</ion-label>
              <input v-model="form.email" name="email" type="text" spellcheck="false" autocapitalize="off" required/>
            </ion-item>
            <ion-item>
              <ion-label position="stacked" color="primary">Nom</ion-label>
              <input v-model="form.firstname" name="firstname" type="text"/>
            </ion-item>
            <ion-item>
              <ion-label position="stacked" color="primary">Prénom</ion-label>
              <input v-model="form.lastname" name="lastname" type="text"/>
            </ion-item>
            <ion-item>
              <ion-label position="stacked" color="primary">Mot de passe</ion-label>
              <input v-model="form.password" name="password" type="password" required/>
            </ion-item>
          </ion-list>

          <ion-row responsive-sm>
            <ion-col>
              <ion-button expand="block" @click.prevent="register(form)">S'inscrire</ion-button>
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

export default {
  name: "Register",
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
        firstname: "",
        lastname: "",
        password: ""
      }
    }
  },
  methods: {
    register(form) {
      this.$store.dispatch('register', form)
    },
    async openToastOptions() {
      const toast = await toastController
          .create({
            header: 'Erreur lors de l\'inscription',
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
  }
}

</script>

<style scoped>

</style>