<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Promotions" href="/App/Promotions">
          <a class="iconSize">💰</a>
          <ion-label>Promos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Scan" href="/scan">
          <a class="iconSize">📸</a>
          <ion-label>Scan</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, personCircle, personAddOutline } from 'ionicons/icons';

export default {
name: "TabsHome",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
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

.iconSize {
  font-size: 25px;
}

</style>
