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
        :src="'https://www.youtube-nocookie.com/embed/' + videoID + '?showinfo=0&rel=0&frameborder=0&allowfullscreen&modestbranding=0'"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        frameborder="0"
      ></iframe>
    </div>
  </ion-content>
</template>

<script>
// import Plyr from "plyr";
import { modalController } from "@ionic/vue";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons } from "@ionic/vue";
import { close } from "ionicons/icons";
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
    close,
    modalController
  }),
  mounted() {
    // this.player = new Plyr(this.$refs.video);
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