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
        <transition name="fade" mode="out-in">
          <div class="wrapper" v-if="loading">
            <ion-spinner color="primary" name="crescent"></ion-spinner>
          </div>
          <div v-else-if="!error" class="courses-wrapper">
            <transition name="fade" mode="out-in">
              <div v-if="segment == 'exams'">
                <ion-accordion-group expand="inset">
                  <ion-accordion v-for="(section, index) in getVideoSections(exams)" :key="index">
                    <ion-item lines="none" slot="header">
                      <ion-label>{{ section.title }}</ion-label>
                      <ion-badge mode="ios" color="light" slot="end">
                        {{
                          section.data.length
                        }}
                      </ion-badge>
                    </ion-item>

                    <ion-list slot="content">
                      <ion-item
                        @click="
                          presentActionSheet({
                            title: video.title,
                            videoID: getVideoID(video.url),
                          })
                        "
                        v-for="video in section.data"
                        :key="video.id"
                        button
                        detail
                        lines="none"
                        :detail-icon="playCircle"
                        class="course"
                      >
                        <ion-avatar slot="start">
                          <ion-img
                            :src="
                              'https://elsaify.elameed.education/elsefy/' +
                              video.img
                            "
                          />
                        </ion-avatar>
                        <ion-label>{{ video.title }}</ion-label>
                      </ion-item>
                    </ion-list>
                  </ion-accordion>
                </ion-accordion-group>
              </div>
              <div v-else-if="segment == 'lessons'">
                <ion-accordion-group expand="inset">
                  <ion-accordion
                    v-for="(section, index) in getVideoSections(homeworks)"
                    :key="index"
                  >
                    <ion-item lines="none" slot="header">
                      <ion-label>{{ section.title }}</ion-label>
                      <ion-badge mode="ios" color="light" slot="end">
                        {{
                          section.data.length
                        }}
                      </ion-badge>
                    </ion-item>

                    <ion-list slot="content">
                      <ion-item
                        @click="
                          presentActionSheet({
                            title: video.title,
                            videoID: getVideoID(video.url),
                          })
                        "
                        v-for="video in section.data"
                        :key="video.id"
                        button
                        detail
                        lines="none"
                        :detail-icon="playCircle"
                        class="course"
                      >
                        <ion-avatar slot="start">
                          <ion-img
                            :src="
                              'https://elsaify.elameed.education/elsefy/' +
                              video.img
                            "
                          />
                        </ion-avatar>
                        <ion-label>{{ video.title }}</ion-label>
                      </ion-item>
                    </ion-list>
                  </ion-accordion>
                </ion-accordion-group>
              </div>
            </transition>
          </div>
          <div class="error-wrapper" v-else>
            <ion-fab-button
              color="danger"
              size="small"
              style="margin-top: 20px; --box-shadow: none"
              @click="getData"
            >
              <ion-icon :icon="refresh" />
            </ion-fab-button>
            <ion-text color="danger">ممكن تكون فاصل نت أو موقع الصيفي مش متاح</ion-text>
            <ion-text color="primary">(اتأكد انك مشترك في الباب)</ion-text>

            <ion-button @click="useQR" style="margin-top: 15px" size="small">استعمل ال QR</ion-button>
          </div>
        </transition>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  modalController,
  actionSheetController,
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
  IonAvatar,
  IonImg,
  IonButton,
  IonSpinner,
  IonAccordion,
  IonAccordionGroup,
  IonList,
  IonBadge,
  IonFabButton,
  IonIcon,
  alertController,
  loadingController,
} from "@ionic/vue";
import {
  playCircle,
  arrowForward,
  laptopOutline,
  logoYoutube,
  refresh,
} from "ionicons/icons";
import axios from "axios";
import CryptoJS from "crypto-js";
import VideoModal from "../components/VideoModal.vue";
import { useAuth } from '../stores/auth';

export default {
  data: () => ({
    loading: true,
    data: [],
    error: false,
    playCircle,
    arrowForward,
    refresh,
    segment: "lessons",
    sortWords: [
      "الاول",
      "الأول",
      "الأولى",
      "الثاني",
      "الثانى",
      "التاني",
      "التانى",
      "الثانية",
      "الثالث",
      "التالت",
      "الثالثة",
      "الرابع",
      "الرابعة",
      "الخامس",
      "الخامسة",
      "السادس",
      "السادسة",
      "السابع",
      "السابعة",
      "الثامن",
      "الثامنة",
      "التاسع",
      "التاسعة",
      "العاشر",
      "العاشرة",
      "الحادي عشر",
      "الحادية عشر",
      "الثاني عشر",
      "الثانية عشر",
      "الثالث عشر",
      "الثالثة عشر",
      "شاملة",
    ],
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
    IonAvatar,
    IonImg,
    IonButton,
    IonSpinner,
    IonAccordion,
    IonAccordionGroup,
    IonList,
    IonBadge,
    IonFabButton,
    IonIcon,
  },
  mounted() {
    this.getData();
  },
  methods: {
    async useQR() {
      const alert = await alertController.create({
        header: "QR",
        message: 'اعمل اسكان للكيو ار بتليفونك و دخل الكود اللي طلع هنا',
        inputs: [
          {
            name: 'code',
            placeholder: 'كود الكيو ار',
            type: 'text',
          },
        ],
        buttons: [
          { text: "الغاء", role: "cancel", cssClass: 'secondary', },
          {
            text: "تأكيد",
            handler: async (data) => {
              const loading = await loadingController
                .create({
                  message: 'استنى نفعل الكود',
                });
              await loading.present();
              const uninterceptedAxios = axios.create({
                headers: {
                  "Authentication": "Bearer " + useAuth().token,
                },
              });
              uninterceptedAxios
                .get(
                  "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseCode?courseId=" +
                  this.$route.query.id +
                  "&code=" + data.code,
                  { crossdomain: true }
                )
                .then((res) => {
                  if (res.data.code == 200) this.getData();
                  else alertController.create({ header: "مشكلة !", message: 'الكود مش صح', buttons: ["تمام"], mode: 'ios', }).then(alert => alert.present());
                  loading.dismiss()
                })
                .catch((err) => {
                  console.error(err);
                  alertController.create({ header: "مشكلة !", message: 'الكود مش صح', buttons: ["تمام"], mode: 'ios', }).then(alert => alert.present());
                  loading.dismiss()
                });
            },
          }
        ],
        mode: "ios",
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    getVideoSections(videos) {
      let filtered = videos;
      let sections = [];
      this.sortWords.forEach((word, index) => {
        const matches = filtered.filter(
          (a) =>
            this.sortWords.findIndex(
              (searchWord) =>
                searchWord ===
                a.title.split(" ").find((b) => this.sortWords.includes(b))
            ) === index
        );
        if (matches.length) {
          sections.push({
            title: word,
            data: matches,
          });
          filtered = filtered.filter(
            (a) =>
              this.sortWords.findIndex(
                (searchWord) =>
                  searchWord ===
                  a.title.split(" ").find((b) => this.sortWords.includes(b))
              ) !== index
          );
        }
      });
      if (filtered.length) {
        sections.push({
          title: "أخرى",
          data: filtered,
        });
      }
      return sections;
    },
    sortVideos(a, b) {
      return (
        this.sortWords.findIndex((v) => a.title.includes(v)) -
        this.sortWords.findIndex((v) => b.title.includes(v))
      );
    },
    async presentActionSheet(options) {
      const actionSheet = await actionSheetController.create({
        subHeader: "اختار طريقة المشاهدة",
        header: options.title,
        buttons: [
          {
            text: "هنا جوا الأبلكيشن",
            icon: laptopOutline,
            handler: () => {
              this.openVideo(options);
            },
          },
          {
            text: "على أبلكيشن يوتيوب",
            icon: logoYoutube,
            handler: () => {
              window.open("https://youtu.be/" + options.videoID, "_system");
            },
          },
        ],
      });
      await actionSheet.present();
    },
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
      this.error = false;
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
  computed: {
    homeworks() {
      return this.data.filter(
        (a) =>
          ![
            "امتحان",
            "الامتحان",
            "أمتحان",
            "الأمتحان",
            "اختبار",
            "الاختبار",
          ].some((b) => a.title.includes(b))
      );
    },
    exams() {
      return this.data.filter((a) =>
        ["امتحان", "الامتحان", "أمتحان", "الأمتحان", "اختبار", "الاختبار"].some(
          (b) => a.title.includes(b)
        )
      );
    },
  },
};
</script>

<style scoped>
.courses-wrapper {
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
ion-accordion {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>