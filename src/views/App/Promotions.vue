<template>
  <ion-app>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="disconnect">Déconnexion</ion-button>
        </ion-buttons>
        <ion-title>Promotions 💰</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          <h1 class="test">Promotions disponible</h1>
        </ion-list-header>

        <ion-item @click="SupressionAlert(item.description)" v-for="item in $store.state.info" :key="item.id">

          <ion-avatar slot="start">
            <h1 class="h1Emoji">{{ item.emoji }}</h1>
          </ion-avatar>
          <ion-label>
            <h1> {{ item.title }} </h1>

            <h3>Description : {{ item.description }}</h3>
            <h3>Réductions : {{ item.discount }} %</h3>
            <h3>Code : {{ item.code_promo }}</h3>

            <p>jusqu'au : {{ new Date(item.valid_time).toLocaleDateString('fr', {year: 'numeric', month: 'long', day: 'numeric'}) }} </p>
          </ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-app>
</template>

<script>
import {alertController, toastController} from '@ionic/vue';
import router from "@/router";
export default {
  name: "Promotions",
  beforeMount() {
    this.$store.dispatch('getPromos')
  },
  methods: {
    async SupressionAlert(description) {
      const alert = await alertController.create({
        header: 'Description',
        message: description,
        buttons: ['Ok'],
      });
      return alert.present();
    },
    disconnect() {
      router.push('/auth/login');
      localStorage.clear();
      this.openToastDisconnect();
    },
    async openToastDisconnect() {
      const toast = await toastController
          .create({
            header: 'Vous avez été déconnecté',
            position: 'top',
            duration: 5000
          })
      return toast.present();
    }
  }
}
</script>

<style scoped>
.h1Emoji {
  text-align: justify;
  margin-top: 0;
  font-size: 27px;
}
</style>
