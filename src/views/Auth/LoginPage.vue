<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div class="wrapper">
          <ion-img src="/assets/img/amr.png" class="logo"></ion-img>
          <form @submit.prevent="login">
            <ion-item fill="solid">
              <ion-label position="stacked">رقم التليفون</ion-label>
              <ion-input
                :disabled="loading"
                required
                v-model.trim="phone"
                name="phone"
                type="number"
                inputmode="numeric"
                placeholder="أدخل رقم التليفون"
                @keyup.enter="login"
              ></ion-input>
            </ion-item>
            <ion-item fill="solid">
              <ion-label position="stacked">كلمة السر</ion-label>
              <ion-input
                :disabled="loading"
                required
                v-model.trim="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                placeholder="أدخل كلمة السر"
                @keyup.enter="login"
              ></ion-input>
              <ion-icon
                :icon="showPassword ? eyeOutline : eyeOffOutline"
                @click="showPassword = !showPassword"
                slot="end"
                style="cursor: pointer;"
              ></ion-icon>
            </ion-item>
            <ion-button :disabled="loading" expand="block" type="submit" class="submit-btn">
              <span v-show="!loading">تسجيل الدخول</span>
              <ion-spinner name="crescent" v-show="loading"></ion-spinner>
            </ion-button>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-items: center;
              "
            >
              <ion-note
                style="text-align: center; margin: 20px auto; max-width: 300px"
              >لو معندكش أكونت اعمل واحد من الأبلكيشن الأصلي</ion-note>
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
  IonImg,
  onIonViewWillEnter,
} from "@ionic/vue";
import { callOutline, lockClosedOutline, eyeOutline, eyeOffOutline } from "ionicons/icons";
import { useAuth } from "../../stores/auth";
import { ref } from "vue";
export default {
  components: {
    IonContent,
    IonPage,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    IonNote,
    IonImg,
  },
  setup() {
    const router = useIonRouter();
    const auth = useAuth();
    const phone = ref("");
    const password = ref("");
    const loading = ref(false);
    const showPassword = ref(false);

    onIonViewWillEnter(() => {
      phone.value = "";
      password.value = "";
      loading.value = false;
      showPassword.value = false;
    });

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
          router.push("/home");
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
    return { login, callOutline, lockClosedOutline, phone, eyeOutline, eyeOffOutline, password, loading, showPassword };
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
  min-height: 550px;
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
  margin-top: 38px;
}
ion-item {
  margin: 12px 0 12px 0;
  /* --background: none; */
}

.logo {
  margin-right: auto;
  margin-left: auto;
  height: 150px;
  margin-bottom: 30px;
}
</style>