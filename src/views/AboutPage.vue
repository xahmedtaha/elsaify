<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>عن الابلكيشن</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">عن الابلكيشن</ion-title>
        </ion-toolbar>
      </ion-header> -->

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
              هنا مع مشغل فيديوهات اسرع و اسهل في الاستعمال
            </ion-card-content>
          </ion-card>
          <ion-card class="danger">
            <ion-card-header>
              <ion-card-title>الحاجات اللي مش شغالة حاليا</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              تقريبا كل حاجه تانية مش شغالة... تطوير الاجزاء التانية محتاج اكواد
              كيو ار شغالة اجرب عليها عشان اقدر اعرف الابلكيشن الاصلي شغال ازاي
              و اقلده و ده مش موجود حاليا
            </ion-card-content>
          </ion-card>
          <ion-card class="warning">
            <ion-card-header>
              <ion-card-title> اشطا ؟ </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              فمؤقتا أي حاجه غير انك تتفرج على فيديوهات الواجب (زي انك تشوف كيو
              ار او تستعمل الكيو ار بتاع الواجب نفسه في بداية الباب الجديد)
              اعملها في الابلكيشن الاصلي بعد كدا ارجع هتلاقي فيديوهاتك هنا شغالة
              عظمة
              <br />
              أي مشاكل تلاقيها دوس عالزرار اللي جواه اسمي و نطلي برايفت
            </ion-card-content>
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
              fill="outline"
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
  // IonHeader,
  // IonToolbar,
  // IonTitle,
  IonContent,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonCard,
} from "@ionic/vue";
import lottie from "vue-lottie";
import * as alertAnimation from "../../public/assets/animations/alert.json";
import { person } from "ionicons/icons";
import { useAuth } from "../stores/auth";

export default {
  data: () => ({
    animationOptions: { animationData: alertAnimation },
    person,
    user: useAuth().user,
  }),
  methods: {
    logout() {
      useAuth().logout();
      this.$router.push("/login");
    },
  },
  components: {
    // IonHeader,
    // IonToolbar,
    // IonTitle,
    IonContent,
    IonPage,
    IonCard,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    lottie,
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