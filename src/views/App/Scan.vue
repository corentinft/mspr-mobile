<template>
  <ion-app>

    <ion-header>
      <ion-toolbar>
        <ion-title>Scan QR code</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>

    </ion-content>

  </ion-app>
</template>

<script>
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
const { Camera } = Plugins;

export default {
  name: "Scan",
  methods: {
    async takeProfilePicture() {
      // Take a picture or video, or load from the library
      const picture = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      const confirmed = await
          this.dialogs.confirm("Set as new picture?");
      if (confirmed) {
        // upload pic to the server
        return this.userService.uploadProfilePic(picture);
      }
    }
  }
}

</script>

<style scoped>

</style>
