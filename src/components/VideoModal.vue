<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="modalController.dismiss()">
          <ion-icon slot="icon-only" :icon="close" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div>
      <iframe
        ref="video"
        :src="
          'https://www.youtube-nocookie.com/embed/' +
          videoID +
          '?showinfo=0&rel=0&frameborder=0&allowfullscreen&modestbranding=1'
        "
        allowfullscreen
        allowtransparency
        allow="autoplay"
        frameborder="0"
      ></iframe>
    </div>
    <div style="width: 100%; display: flex;">
      <ion-button
        class="ion-margin-top youtube-btn"
        @click="downloadVideo"
        color="danger"
        :disabled="downloadLoading"
      >
        <ion-icon slot="start" class="ion-margin-right" :icon="cloudDownload" />
        <span>تحميل</span>
      </ion-button>
    </div>
  </ion-content>
</template>

<script>
// import Plyr from "plyr";
import { modalController } from "@ionic/vue";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonButtons,
  // IonSpinner,
} from "@ionic/vue";
import { close, cloudDownload } from "ionicons/icons";
import { useBackButton } from "@ionic/vue";
import axios from "axios";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonButton,
    IonButtons,
    // IonSpinner,
  },
  props: ["title", "videoID"],
  data: () => ({
    player: null,
    close,
    cloudDownload,
    modalController,
    downloadLoading: false,
  }),
  mounted() {
    useBackButton(1, async (processNextHandler) => {
      if (await modalController.getTop()) {
        this.modalController.dismiss();
      } else {
        processNextHandler();
      }
    });
  },
  methods: {
    downloadVideo() {
      this.downloadLoading = true
      axios.get('https://elsaify-proxy.ignitionsoftware.workers.dev/?https://maadhav-ytdl.herokuapp.com/video_info.php?url=https://www.youtube.com/watch?v=' + this.videoID).then(res => {
        this.downloadLoading = false
        window.open(res.data.links[0], '_system')
      }).catch(() => {
        this.downloadLoading = false
      })
    }
  }
};
</script>

<style scoped>
iframe {
  width: 100%;
  min-height: 360px;
  height: 100%;
}
.youtube-btn {
  margin-right: auto;
  margin-left: auto;
}
</style>