<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="login-logo">
        <!--<img src="/assets/img/appicon.svg" alt="Ionic logo">-->
      </div>
      Todo...
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
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
  }
}
</script>

<style scoped>

</style>