<template>
  <ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-button @click="modalController.dismiss()">
                <ion-icon slot="icon-only" :icon="close" />
            </ion-button>
        </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div>
      <iframe
        ref="video"
        :src="'https://www.youtube-nocookie.com/embed/' + videoID + '?showinfo=0&rel=0&frameborder=0&allowfullscreen&modestbranding=1'"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        frameborder="0"
      ></iframe>
    </div>
    <ion-button expand="block" class="ion-margin-top" :href="'https://youtu.be/' + videoID" target="_system" color="danger">
      <ion-icon slot="start" :icon="logoYoutube" />
      اتفرج على اليوتيوب
    </ion-button>
  </ion-content>
</template>

<script>
// import Plyr from "plyr";
import { modalController } from "@ionic/vue";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons } from "@ionic/vue";
import { close, logoYoutube } from "ionicons/icons";
import { useBackButton } from '@ionic/vue';
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonButton, IonButtons,
  },
  props: ["title", "videoID"],
  data: () => ({
    player: null,
    close, logoYoutube,
    modalController
  }),
  mounted() {
    useBackButton(1, async (processNextHandler) => {
      if(await modalController.getTop()) {
        this.modalController.dismiss();
      } else {
        processNextHandler();
      }
    });
  },
};
</script>

<style scoped>
iframe {
    width: 100%;
    min-height: 360px;
    height: 100%;
}
</style>