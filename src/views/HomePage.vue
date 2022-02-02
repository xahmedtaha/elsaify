<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
        
      </ion-header> -->
      <main>
        <transition name="fade">
          <div class="wrapper" v-if="loading">
            <ion-img src="/assets/img/amr.png"></ion-img>
            <ion-spinner color="primary" name="crescent"></ion-spinner>
          </div>
          <div v-else-if="!error" class="courses-wrapper">
            <ion-img src="/assets/img/amr.png"></ion-img>
            <course-tile
              class="course"
              v-for="course in courses.sort(sortCourses)"
              :course="course"
              :key="course.id"
            ></course-tile>
          </div>
          <div class="error-wrapper" v-else>
            <ion-img src="/assets/img/amr.png"></ion-img>
            <ion-text color="danger"
              >ممكن تكون فاصل نت أو موقع الصيفي مش متاح</ion-text
            >
            <ion-button
              size="small"
              style="margin-top: 15px; --box-shadow: none"
              @click="getCourses"
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
  // IonHeader,
  // IonToolbar,
  // IonTitle,
  IonSpinner,
  IonImg,
  IonText,
  IonButton,
  IonContent,
} from "@ionic/vue";
import axios from "axios";
import CourseTile from "../components/CourseTile.vue";

export default {
  mounted() {
    this.getCourses();
  },
  data: () => ({
    loading: true,
    courses: [],
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
  }),
  methods: {
    sortCourses(a, b) {
      return (
        this.sortWords.findIndex((v) => a.text.includes(v)) -
        this.sortWords.findIndex((v) => b.text.includes(v))
      );
    },
    getCourses() {
      this.loading = true;
      axios
        .get(
          "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=5",
          { crossdomain: true }
        )
        .then((res) => {
          if (res.data.code == 200) this.courses = res.data.data;
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
  },
};
</script>

<style scoped>
.courses-wrapper {
  padding: 15px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper,
.error-wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
ion-img {
  margin-right: auto;
  margin-left: auto;
  height: 150px;
  margin-bottom: 30px;
}
</style>