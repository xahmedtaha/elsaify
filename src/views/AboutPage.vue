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
          <ion-card class="warning">
            <ion-card-header>
              <ion-card-title>تمام ؟</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              فمؤقتا أي حاجه غير انك تتفرج على فيديوهات الواجب (زي انك تشوف كيو
              ار او تستعمل الكيو ار بتاع الواجب نفسه في بداية الباب الجديد)
              اعملها في الابلكيشن الاصلي بعد كدا ارجع هتلاقي فيديوهاتك هنا شغالة
              عظمة
              <br />أي مشاكل تلاقيها دوس عاللينك اللي جواه اسمي و ابعتلي برايفت او
              اعملي منشن في الجروب
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-item lines="none">
              <ion-icon slot="start" :icon="contrast" />
              <ion-label>الثيم</ion-label>
              <!-- <ion-toggle
                :checked="darkMode"
                ref="themeToggle"
                @ionChange="toggleDarkMode"
                slot="end"
                color="primary"
              ></ion-toggle>-->
              <ion-select @ionChange="changeTheme" interface="popover" v-model="theme">
                <ion-select-option value="auto">وضع النظام</ion-select-option>
                <ion-select-option value="dark">دارك</ion-select-option>
                <ion-select-option value="light">لايت</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item lines="none">
              <ion-icon slot="start" :icon="person" />
              <ion-label>
                <h3>{{ user.name }}</h3>
                <p>#{{ user.id }}</p>
              </ion-label>
              <ion-button
                fill="clear"
                strong
                slot="end"
                size="small"
                color="danger"
                @click="logout"
              >تسجيل الخروج</ion-button>
            </ion-item>
          </ion-card>
          <div class="credits">
            <ion-text style="font-size: 14px">Built By</ion-text>
            <ion-button
              target="_system"
              size="small"
              fill="clear"
              href="https://www.facebook.com/profile.php?id=100053102670919"
            >أحطه</ion-button>
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
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/vue";
import lottie from "../components/LottiePlayer.vue";
import * as alertAnimation from "../../public/assets/animations/alert.json";
import { person, contrast } from "ionicons/icons";
import { useAuth } from "../stores/auth";

export default {
  data: () => ({
    animationOptions: { animationData: alertAnimation },
    person,
    user: useAuth().user,
    contrast,
    theme: localStorage.getItem('theme'),
  }),
  methods: {
    changeTheme(ev) {
      localStorage.setItem("theme", ev.detail.value);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      if (ev.detail.value !== 'auto') document.body.classList.toggle("dark", ev.detail.value === 'dark');
      else document.body.classList.toggle("dark", prefersDark.matches);
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
    IonSelect,
    IonSelectOption,
    IonText,
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
ion-card {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
}
</style>