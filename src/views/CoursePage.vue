<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="arrowForward" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ this.$route.query.title }}</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment :value="segment" @ionChange="segmentChanged($event)">
          <ion-segment-button value="lessons">
            <ion-label>الواجبات</ion-label>
          </ion-segment-button>
          <ion-segment-button value="exams">
            <ion-label>الامتحانات</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <main>
        <transition name="fade">
          <div class="wrapper" v-if="loading">
            <ion-spinner color="primary" name="crescent"></ion-spinner>
          </div>
          <div v-else-if="!error" class="courses-wrapper">
            <div v-show="segment == 'exams'">
              <ion-card
                v-for="video in data.filter((a) =>
                  ['امتحان', 'الامتحان', 'أمتحان', 'الأمتحان'].some((b) =>
                    a.title.includes(b)
                  )
                )"
                :key="video.id"
                button
                @click="
                  openVideo({
                    title: video.title,
                    videoID: getVideoID(video.url),
                  })
                "
              >
                <ion-item
                  detail
                  lines="none"
                  :detail-icon="playCircle"
                  class="course"
                >
                  <ion-avatar slot="start">
                    <ion-img
                      :src="
                        'https://elsaify.elameed.education/elsefy/' + video.img
                      "
                    />
                  </ion-avatar>
                  <ion-label>
                    {{ video.title }}
                  </ion-label>
                </ion-item>
              </ion-card>
            </div>
            <div v-show="segment == 'lessons'">
              <ion-card
                @click="
                  openVideo({
                    title: video.title,
                    videoID: getVideoID(video.url),
                  })
                "
                v-for="video in data.filter(
                  (a) =>
                    !['امتحان', 'الامتحان', 'أمتحان', 'الأمتحان'].some((b) =>
                      a.title.includes(b)
                    )
                )"
                :key="video.id"
                button
              >
                <ion-item
                  detail
                  lines="none"
                  :detail-icon="playCircle"
                  class="course"
                >
                  <ion-avatar slot="start">
                    <ion-img
                      :src="
                        'https://elsaify.elameed.education/elsefy/' + video.img
                      "
                    />
                  </ion-avatar>
                  <ion-label>
                    {{ video.title }}
                  </ion-label>
                </ion-item>
              </ion-card>
            </div>
          </div>
          <div class="error-wrapper" v-else>
            <ion-text color="danger"
              >ممكن تكون فاصل نت أو موقع الصيفي مش متاح</ion-text
            >
            <ion-button
              size="small"
              style="margin-top: 15px; --box-shadow: none"
              @click="getData"
              >حاول تاني</ion-button
            >
          </div>
        </transition>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  modalController,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonLabel,
  IonItem,
  IonCard,
  IonAvatar,
  IonImg,
  IonButton,
  IonSpinner,
  //   IonIcon,
} from "@ionic/vue";
import { playCircle, arrowForward, chevronForward } from "ionicons/icons";
import axios from "axios";
import CryptoJS from "crypto-js";
import VideoModal from "../components/VideoModal.vue";
export default {
  data: () => ({
    loading: true,
    data: [],
    error: false,
    playCircle,
    arrowForward,
    segment: "lessons",
    chevronForward
  }),
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonSegment,
    IonSegmentButton,
    IonText,
    IonLabel,
    IonItem,
    IonCard,
    IonAvatar,
    IonImg,
    IonButton,
    IonSpinner,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getVideoID(url) {
      const decrypted = CryptoJS.AES.decrypt(
        url,
        CryptoJS.enc.Utf8.parse("aplusencurlsaify"),
        {
          mode: CryptoJS.mode.CBC,
          iv: CryptoJS.enc.Utf8.parse("apluscode.comivs"),
          padding: CryptoJS.pad.Pkcs7,
        }
      ).toString(CryptoJS.enc.Utf8);

      return decrypted.substring(decrypted.lastIndexOf("/") + 1);
    },
    async openVideo(options) {
      const modal = await modalController.create({
        component: VideoModal,
        componentProps: options,
        cssClass: "video-modal",
        backdropDismiss: false,
        showBackdrop: true,
      });
      return modal.present();
    },
    segmentChanged(ev) {
      this.segment = ev.detail.value;
    },
    getData() {
      this.error = false
      this.loading = true;
      axios
        .get(
          "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getCourseFiles?cId=" +
            this.$route.query.id +
            "&package=0&type=0&sub=0",
          { crossdomain: true }
        )
        .then((res) => {
          if (res.data.code == 200) this.data = res.data.data;
          else this.error = true;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.courses-wrapper {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper,
.error-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.course {
  --background: transparent;
}
</style>