<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Connection" href="/auth/login">
          <ion-icon :icon="personCircle" />
          <ion-label>Connexion</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Register" href="/auth/register">
          <ion-icon :icon="personAddOutline" />
          <ion-label>Inscription</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, personCircle, personAddOutline } from 'ionicons/icons';
export default {
  name: "TabAuth",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      personCircle,
      personAddOutline
    }
  }
}
</script>

<style scoped>
</style>
