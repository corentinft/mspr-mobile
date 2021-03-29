<template>
  <ion-app>

    <ion-header>
      <ion-toolbar>
        <ion-title>Coupons de réduction</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="stacked" color="primary">Code promotion : </ion-label>
          <input v-model="code.promo" name="promo" type="text" spellcheck="false" autocapitalize="off" placeholder="Saisir un code promo" required/>
        </ion-item>
      </ion-list>
      <ion-row responsive-sm>
        <ion-col>
          <ion-button expand="block" @click.prevent="checkCode(code.promo)">Valider</ion-button>
        </ion-col>
      </ion-row>
    </ion-content>

  </ion-app>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, toastController} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
export default {
  name: "Coupon",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    // eslint-disable-next-line vue/no-unused-components
    IonPage
  },
  data() {
    return {
      code: {
        promo: ''
      },
      headerToast: '',
      colorToast: ''
    }
  },
  beforeMount() {
    this.$store.watch(() => this.$store.state.promo, status => {
      if (status == "400") {
        this.headerToast = 'Code promo invalide !';
        this.colorToast = 'danger';
        this.openToast();
      } else {
        this.headerToast = 'Code promo validé !';
        this.colorToast = 'primary';
        this.openToast();
      }
    });
  },
  methods: {
    checkCode(code) {
      this.$store.dispatch('checkCode', code);
    },
    async openToast() {
      const toast = await toastController
          .create({
            header: this.headerToast,
            position: 'top',
            duration: 3000,
            color: this.colorToast,
            buttons: [
              {
                text: 'OK',
                role: 'cancel'
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
