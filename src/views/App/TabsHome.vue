<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Promotions" href="/App/Promotions">
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
name: "TabsHome",
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