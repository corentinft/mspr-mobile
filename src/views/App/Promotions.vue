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
          Promotions disponible
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            ✅
          </ion-avatar>
          <ion-label>
            <h1>Zalando</h1>
            <h3>20 % de réduction sur tout le site</h3>
            <p>Disponible jusqu'au 31/03/2021</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            ✅
          </ion-avatar>
          <ion-label>
            <h1>Asos</h1>
            <h3>10 % de réduction sur tout le site (étudiant)</h3>
            <p>Tout le temps</p>
          </ion-label>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: "Promotions"
}
</script>

<style scoped>
.test {
  color: red;
}
</style>