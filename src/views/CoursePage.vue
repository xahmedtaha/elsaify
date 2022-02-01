<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
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
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
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
                v-for="video in data.filter((a) =>
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
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  //   IonIcon,
} from "@ionic/vue";
import { playCircle } from "ionicons/icons";
import axios from "axios";
export default {
  data: () => ({
    loading: true,
    data: null,
    error: false,
    playCircle,
    segment: "lessons",
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
    //   IonIcon,
  },
  mounted() {
    this.getData();
  },
  methods: {
    segmentChanged(ev) {
      console.log("Segment changed", ev);
      this.segment = ev.detail.value;

    },
    getData() {
      this.loading = true;
      axios
        .get(
          "https://elsaify.elameed.education/elsefy/api/desktop/getCourseFiles?cId=" +
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