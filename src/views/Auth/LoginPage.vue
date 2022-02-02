<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div class="wrapper">
          <ion-title>تسجيل الدخول</ion-title>
          <form @submit.prevent="login">
            <ion-item color="light" fill="fill">
              <ion-label position="floating">رقم التليفون</ion-label>
              <ion-input
                :disabled="loading"
                required
                v-model="phone"
                type="number"
                inputmode="numeric"
                value=""
                placeholder="01XXXXXXXXX"
              ></ion-input>
              <ion-icon color="primary" :icon="call" slot="end"></ion-icon>
            </ion-item>
            <ion-item color="light" fill="fill">
              <ion-label position="floating">كلمة السر</ion-label>
              <ion-input
                :disabled="loading"
                required
                v-model="password"
                type="password"
                value=""
                placeholder="أدخل كلمة السر"
              ></ion-input>
              <ion-icon
                color="primary"
                :icon="lockClosed"
                slot="end"
              ></ion-icon>
            </ion-item>
            <ion-button
              :disabled="loading"
              expand="block"
              type="submit"
              class="submit-btn"
            >
              <span v-show="!loading">تسجيل الدخول</span>
              <ion-spinner name="crescent" v-show="loading"></ion-spinner>
            </ion-button>
            <div style="display: flex; flex-direction: column; justify-items: center">
              <ion-note style="text-align: center; margin: 20px auto; max-width: 300px">لو معندكش أكونت اعمل واحد من الأبلكيشن الأصلي</ion-note>
            </div>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  useIonRouter,
  IonSpinner,
  alertController,
  IonNote,
} from "@ionic/vue";
import { call, lockClosed } from "ionicons/icons";
import { useAuth } from "../../stores/auth";
import { ref } from "vue";
export default {
  components: {
    IonTitle,
    IonContent,
    IonPage,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    IonNote,
  },
  setup() {
    const router = useIonRouter();
    const auth = useAuth();
    const phone = ref("");
    const password = ref("");
    const loading = ref(false);
    const login = () => {
      if (loading.value) return;
      loading.value = true;
      let user = {
        phone: phone.value,
        password: password.value,
      };
      auth
        .login(user)
        .then(async () => {
          loading.value = false;
          router.push("/tabs/about");
        })
        .catch(async (err) => {
          loading.value = false;
          console.error(err);
          const alert = await alertController.create({
            header: "مشكلة !",
            message: err.message,
            buttons: ["تمام"],
            mode: "ios",
          });
          await alert.present();

          const { role } = await alert.onDidDismiss();
          console.log("onDidDismiss resolved with role", role);
        });
    };
    return { login, call, lockClosed, phone, password, loading };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.wrapper {
  max-width: 500px;
  padding: 0 24px;
  margin-top: 24px;
  margin-bottom: 48px;
}
form,
.wrapper {
  width: 100%;
}
ion-title {
  text-align: center;
  margin-bottom: 32px;
}
.submit-btn {
  margin-top: 24px;
}
ion-item {
  margin: 12px 0 12px 0;
}
ion-icon {
  align-self: center;
}
ion-item {
  /* --border-width: 1px; */
  --border-radius: 4px;
}
</style>