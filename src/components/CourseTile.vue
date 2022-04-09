<template>
  <div>
    <ion-card
      v-if="dense"
      @click="isAvailable ? goToCourse() : useQR()"
      button
    >
      <ion-item lines="none" detail :detail-icon="isAvailable ? chevronBack : lockClosed">
        <ion-avatar slot="start">
          <ion-img
            :src="
              'https://elsaify.elameed.education/elsefy/' +
              course.img
            "
          />
        </ion-avatar>
        <ion-label>
          <h2>{{ invert ? course.title : course.text }}</h2>
          <p>{{ invert ? course.text : course.title }}</p>
        </ion-label>
      </ion-item>
    </ion-card>
    <ion-card class="bordered" v-else @click="goToCourse" button>
      <ion-card-header>
        <ion-item lines="none" detail :detail-icon="chevronBack">
          <ion-label>
            <ion-card-subtitle>{{ course.text }}</ion-card-subtitle>
            <ion-card-title>{{ course.title }}</ion-card-title>
          </ion-label>
        </ion-item>
      </ion-card-header>
    </ion-card>
  </div>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonItem,
  IonImg,
  IonAvatar,
  alertController,
  loadingController,
} from "@ionic/vue";
import axios from "axios";
import { closeCircle, chevronBack, lockClosed } from "ionicons/icons";
import { useAuth } from "../stores/auth";
export default {
  components: {
    // IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonLabel,
    IonItem,
    IonImg,
    IonAvatar,
  },
  props: {
    course: Object,
    dense: Boolean,
    invert: Boolean,
    isLecture: Boolean,
    package: Boolean,
  },
  data: () => ({
    closeCircle,
    chevronBack,
    lockClosed,
  }),
  computed: {
    isAvailable() {
      return this.course.countC > 0 || this.course.money == "0.00";
    }
  },
  methods: {
    goToCourse() {
      this.$router.push({
        path: this.isLecture ? "/lecture" : "/course",
        query: {
          id: this.course.id,
          title: this.course.title,
          type: this.course.type,
          package: this.package,
        },
      });
    },
    async useQR() {
      const alert = await alertController.create({
        header: this.course.title,
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
                  this.course.id +
                  "&code=" + data.code,
                  { crossdomain: true }
                )
                .then((res) => {
                  if (res.data.code == 200) this.goToCourse();
                  else alertController.create({ header: "مشكلة !", message: 'الكود مش مظبوط', buttons: ["تمام"], mode: 'ios', }).then(alert => {
                    alert.present();
                    alert.onDidDismiss().then(() => {
                      this.useQR();
                    })
                  });
                  loading.dismiss()
                })
                .catch((err) => {
                  console.error(err);
                  alertController.create({ header: "مشكلة !", message: 'الكود مش مظبوط', buttons: ["تمام"], mode: 'ios', }).then(alert => {
                    alert.present();
                    alert.onDidDismiss().then(() => {
                      this.useQR();
                    })
                  });
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
    }
  },
};
</script>

<style scoped>
ion-card {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  margin-bottom: 12px;
}
ion-card.bordered {
  border-right: solid 5px var(--ion-color-primary);
}
ion-item {
  --background: transparent;
}
ion-card-title {
  font-size: 1.1rem;
}
ion-card-header {
  padding: 12px;
}
</style>