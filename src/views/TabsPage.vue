<template>
  <ion-page>
    <ion-tabs @ionTabsWillChange="changeTabs">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon
            :icon="selected === 'home' ? home : homeOutline"
          />
          <ion-label>الرئيسية</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contact" href="/contact">
          <ion-icon :icon="selected === 'contact' ? megaphone : megaphoneOutline" />
          <ion-label>التواصل</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="about" href="/about">
          <ion-icon :icon="selected === 'about' ? helpCircle : helpCircleOutline" />
          <ion-label>عن التطبيق</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonLabel,
} from "@ionic/vue";
import {
  helpCircleOutline,
  helpCircle,
  homeOutline,
  home,
  megaphoneOutline,
  megaphone,
} from "ionicons/icons";

export default {
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
    IonLabel,
  },
  methods: {
    changeTabs(event) {
      this.selected = event.tab
    },
  },
  data: () => ({
    homeOutline,
    home,
    helpCircleOutline,
    helpCircle,
    megaphoneOutline,
    megaphone,
    selected: null,
  }),
};
</script>