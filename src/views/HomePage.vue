<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>-->
    <ion-content>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
        
      </ion-header>-->
      <main>
        <transition name="fade" mode="out-in">
          <div class="wrapper" v-if="loading">
            <ion-img class="logo" src="/assets/img/amr.png"></ion-img>
            <ion-spinner color="primary" name="crescent"></ion-spinner>
          </div>
          <div v-else-if="!error" class="courses-wrapper">
            <ion-img class="logo" src="/assets/img/amr.png"></ion-img>
            <ion-card>
              <ion-segment :value="segment" @ionChange="segmentChanged($event)">
                <ion-segment-button value="lectures">
                  <ion-label>المحاضرات</ion-label>
                </ion-segment-button>
                <ion-segment-button value="homeworks">
                  <ion-label>الواجبات</ion-label>
                </ion-segment-button>
              </ion-segment>
            </ion-card>
            <div>
              <div v-show="segment === 'lectures'">
                <!-- <course-tile
                  class="course"
                  v-for="course in lectures"
                  :course="course"
                  :key="course.id"
                  dense
                  isLecture
                ></course-tile>-->
                <ion-accordion-group expand="inset">
                  <ion-accordion
                    v-for="(lectures, title, index) in groupBy(this.lectures, 'parentName')"
                    :key="index"
                  >
                    <ion-item lines="none" slot="header">
                      <ion-label>{{ title }}</ion-label>
                      <ion-badge mode="ios" color="light" slot="end">
                        {{
                          lectures.length
                        }}
                      </ion-badge>
                    </ion-item>

                    <ion-list slot="content">
                      <ion-item
                        @click="goToLecture(lecture)"
                        v-for="lecture in lectures"
                        :key="lecture.id"
                        button
                        detail
                        :detail-icon="chevronBack"
                        lines="none"
                        class="lecture"
                      >
                        <ion-avatar slot="start">
                          <ion-img
                            :src="
                              'https://elsaify.elameed.education/elsefy/' +
                              lecture.img
                            "
                          />
                        </ion-avatar>
                        <ion-label>{{ lecture.title }}</ion-label>
                      </ion-item>
                    </ion-list>
                  </ion-accordion>
                </ion-accordion-group>
              </div>
              <div v-show="segment === 'homeworks'">
                <course-tile
                  class="course"
                  v-for="course in homeworks.sort(sortCourses)"
                  :course="course"
                  :key="course.id"
                ></course-tile>
              </div>
            </div>
          </div>
          <div class="error-wrapper" v-else>
            <ion-img src="/assets/img/amr.png"></ion-img>
            <ion-text color="danger">ممكن تكون فاصل نت أو موقع الصيفي مش متاح</ion-text>
            <ion-button
              size="small"
              style="margin-top: 15px; --box-shadow: none"
              @click="getCourses"
            >حاول تاني</ion-button>
          </div>
        </transition>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  // IonHeader,
  // IonToolbar,
  // IonTitle,
  IonSpinner,
  IonImg,
  IonText,
  IonButton,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonBadge,
  IonAvatar,
  IonList,
} from "@ionic/vue";
import { chevronBack } from "ionicons/icons";
import axios from "axios";
import CourseTile from "../components/CourseTile.vue";

const groupBy = require('lodash.groupby');

export default {
  mounted() {
    this.getCourses();
  },
  data: () => ({
    loading: true,
    homeworks: [],
    lectures: [],
    homeworksError: false,
    lecturesError: false,
    error: false,
    sortWords: [
      "الاول",
      "الأول",
      "الثاني",
      "الثانى",
      "الثالث",
      "الرابع",
      "الخامس",
    ],
    chevronBack,
    segment: "lectures",
  }),
  methods: {
    groupBy,
    segmentChanged(ev) {
      ev.preventDefault();
      this.segment = ev.detail.value;

    },
    sortCourses(a, b) {
      return (
        this.sortWords.findIndex((v) => a.text.includes(v)) -
        this.sortWords.findIndex((v) => b.text.includes(v))
      );
    },
    getCourses() {
      this.error = false;
      this.loading = true;
      Promise.all([
        axios.get(
          "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=5",
          { crossdomain: true }
        ),
        axios.get(
          "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=0",
          { crossdomain: true }
        ),
      ])
        .then((res) => {
          console.log(res);

          // Homeworks
          if (res[0].data.code == 200) this.homeworks = res[0].data.data;
          else this.homeworksError = true;

          // Lectures
          if (res[1].data.code == 200) this.lectures = res[1].data.data;
          else this.lecturesError = true;

          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
          this.loading = false;
        });
    },
    goToLecture(lecture) {
      this.$router.push({
        path: "/lecture",
        query: {
          id: lecture.id,
          title: lecture.title,
          type: lecture.type,
        },
      });
    },
  },
  components: {
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    IonContent,
    IonPage,
    CourseTile,
    IonSpinner,
    IonImg,
    IonText,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonBadge,
    IonAvatar,
    IonList,
  },
};
</script>

<style scoped>
ion-card {
  box-shadow: none;
  background: transparent;
}
.courses-wrapper {
  padding: 15px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error-wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
ion-img.logo {
  margin-right: auto;
  margin-left: auto;
  height: 150px;
  margin-bottom: 30px;
  margin-top: 40px;
}
.lecture {
  --background: transparent;
}
ion-accordion {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  margin-bottom: 15px;
}
</style>