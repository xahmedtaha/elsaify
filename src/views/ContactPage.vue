<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar color="primary">
        <ion-title>التواصل مع المستر</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">التواصل مع المستر</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <main>
        <div class="wrapper ion-padding">
          <div>
            <lottie
              :options="animationOptions"
              :height="250"
            />
          </div>
          <ion-item
            detail
            :detail-icon="chevronBack"
            button
            href="https://www.facebook.com/ElSaify4Chemistry"
            target="_system"
            lines="none"
          >
            <ion-icon
              slot="start"
              :icon="logoFacebook"
              style="color: var(--ion-color-primary-shade)"
            />
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h3>الصفحة الرسمية لمستر عمرو</h3>
              </ion-text>
              <p>صفحة الفيس</p>
            </ion-label>
          </ion-item>
          <ion-item
            detail
            :detail-icon="chevronBack"
            button
            href="https://www.facebook.com/groups/1424297907945485"
            target="_system"
            lines="none"
          >
            <ion-icon
              slot="start"
              :icon="logoFacebook"
              style="color: var(--ion-color-primary-shade)"
            />
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h3>جروب عمرو الصيفي</h3>
              </ion-text>
              <p>جروب الطلبة</p>
            </ion-label>
          </ion-item>
          <ion-item
            detail
            :detail-icon="chevronBack"
            button
            href="https://www.youtube.com/channel/UCYefsYxZqaiQMFpw1PCvVVQ"
            target="_system"
            lines="none"
          >
            <ion-icon
              slot="start"
              :icon="logoYoutube"
              style="color: var(--ion-color-danger)"
            />
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h3>قناة اليوتيوب</h3>
              </ion-text>
              <p>قناة المستر عاليوتيوب</p>
            </ion-label>
          </ion-item>
          <ion-item
            detail
            :detail-icon="chevronBack"
            button
            href="https://wa.link/2d3vpd"
            target="_system"
            lines="none"
          >
            <ion-icon
              slot="start"
              :icon="logoWhatsapp"
              style="color: var(--ion-color-success)"
            />
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h3>رقم الاستفسارات الادارية</h3>
              </ion-text>
              <p>استفسارات عن أي حاجه غير المادة العلمية</p>
            </ion-label>
          </ion-item>
          <ion-item
            detail
            :detail-icon="chevronBack"
            lines="none"
            href="https://wa.link/wyim4d"
            target="_system"
          >
            <ion-icon
              slot="start"
              :icon="logoWhatsapp"
              style="color: var(--ion-color-success)"
            />
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h3>رقم الاستفسارات العلمية</h3>
              </ion-text>
              <p>أي استفسارات في المادة و الاسئلة العلمية</p>
            </ion-label>
          </ion-item>
          <!-- <p style="text-align: center; color: #6b7280; font-size: 14px">
            ان شاء الله اللينكات متتغيرش
          </p> -->
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script>
import lottie from "../components/LottiePlayer.vue";
import * as contactAnimation from "../../public/assets/animations/contact.json";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
} from "@ionic/vue";
import {
  logoFacebook,
  logoYoutube,
  logoWhatsapp,
  chevronBack,
} from "ionicons/icons";

export default {
  data: () => ({
    logoFacebook,
    logoYoutube,
    logoWhatsapp,
    animationOptions: { animationData: contactAnimation },
    chevronBack,
  }),
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
    lottie,
  },
};
</script>
<style scoped>
main {
  position: relative;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
ion-card {
  margin: 15px;
}
ion-item {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-bottom: 14px;
  border-radius: 8px;
}
</style>