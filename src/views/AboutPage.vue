<template>
  <ion-page>
    <ion-content>
      <main>
        <div class="wrapper">
          <div>
            <lottie :options="animationOptions" :height="180" />
          </div>
          <ion-card class="primary">
            <ion-card-header>
              <ion-card-title>الحاجات اللي شغالة حاليا</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              فيديوهات الواجب بتاعت كل باب اللي موجودة عندك في الابلكيشن الاصلي
              هنا تقدر تشوفها في السايت او يوتيوب بشكل اسرع و اسهل من أي جهاز +
              دارك موود منعا لعمى الالوان اللي بيجيلنا من الاضائة العالية
            </ion-card-content>
          </ion-card>
          <!-- <ion-card class="danger">
            <ion-card-header>
              <ion-card-title>الحاجات اللي مش شغالة حاليا</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              تقريبا كل حاجه تانية مش شغالة... تطوير الاجزاء التانية محتاج اكواد
              كيو ار شغالة اجرب عليها و ده مش موجود حاليا
            </ion-card-content>
          </ion-card> -->
          <ion-card class="warning">
            <ion-card-header>
              <ion-card-title> تمام ؟ </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              فمؤقتا أي حاجه غير انك تتفرج على فيديوهات الواجب (زي انك تشوف كيو
              ار او تستعمل الكيو ار بتاع الواجب نفسه في بداية الباب الجديد)
              اعملها في الابلكيشن الاصلي بعد كدا ارجع هتلاقي فيديوهاتك هنا شغالة
              عظمة
              <br />
              أي مشاكل تلاقيها دوس عاللينك اللي جواه اسمي و ابعتلي برايفت
              او اعملي منشن في الجروب
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-icon slot="start" :icon="moon" />
              <ion-label> دارك مود </ion-label>
              <ion-toggle
                :checked="darkmodeEnabled"
                ref="themeToggle"
                @ionChange="toggleDarkMode"
                slot="end"
                color="primary"
              ></ion-toggle>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-icon slot="start" :icon="person" />
              <ion-label>
                <h3>{{ user.name }}</h3>
                <p>#{{ user.id }}</p>
              </ion-label>
              <ion-button slot="end" color="danger" @click="logout"
                >تسجيل الخروج</ion-button
              >
            </ion-item>
          </ion-card>
          <div class="credits">
            Built By
            <ion-button
              target="_system"
              size="small"
              fill="clear"
              href="https://www.facebook.com/profile.php?id=100053102670919"
              >Ahmed Taha</ion-button
            >
          </div>
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonCard,
  IonIcon,
  IonLabel,
  IonItem,
  IonToggle,
} from "@ionic/vue";
import lottie from "../components/LottiePlayer.vue";
import * as alertAnimation from "../../public/assets/animations/alert.json";
import { person, moon } from "ionicons/icons";
import { useAuth } from "../stores/auth";

export default {
  data: () => ({
    animationOptions: { animationData: alertAnimation },
    person,
    user: useAuth().user,
    moon,
  }),
  methods: {
    toggleDarkMode(ev) {
      document.body.classList.toggle("dark", ev.detail.checked);
    },
    logout() {
      useAuth().logout();
      this.$router.push("/login");
    },
  },
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonLabel,
    IonItem,
    lottie,
    IonToggle,
  },
  computed: {
    darkmodeEnabled() {
      return document.body.classList.contains("dark");
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.credits {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
</style>