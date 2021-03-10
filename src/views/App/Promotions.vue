<template>
  <ion-app>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Promotions 💰</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          <h1 class="test">Promotions disponible</h1>
        </ion-list-header>

        <ion-item @click="SupressionAlert" v-for="item in $store.state.info" :key="item.id">

            <ion-avatar slot="start">
              <h1 class="h1Emoji">{{item.emoji}}</h1>
            </ion-avatar>
            <ion-label>
              <h1> {{item.title}} </h1>
              <h3>Description : {{item.description}}</h3>
              <h3>Réductions : {{item.discount}} %</h3>


              <p>jusqu'au : {{ new Date(item.valid_time).toLocaleDateString('fr', {year: 'numeric', month: 'long', day: 'numeric'}) }} </p>
            </ion-label>
          </ion-item>

      </ion-list>
    </ion-content>
  </ion-app>
</template>

<script>
import { alertController } from '@ionic/vue';
export default {
  name: "Promotions",

  beforeMount() {
    this.$store.dispatch('getPromos')
  },

  methods: {
    async SupressionAlert() {
      let item = "";
      const Foreach = this.$store.state.info.forEach(element => item = element)
      const alert = await alertController.create({
            header: 'Description',
            message: item.description,
            buttons: ['Ok'],
          });
      return alert.present();
    },
  }
  //Si bouton refresh
  //methods: {
    //getPromos() {
      //this.$store.dispatch('getPromos')
    //}
  //}
}
</script>

<style scoped>
.h1Emoji {
  text-align: justify;
  margin-top: 0;
  font-size: 27px;
}
</style>
