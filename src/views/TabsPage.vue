<template>
  <ion-page>
    <ion-tabs @ionTabsWillChange="changeTabs">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="lectures" href="/lectures">
          <ion-icon :icon="selected === 'lectures' ? videocam : videocamOutline" />
          <ion-label>المحاضرات</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="homeworks" href="/homeworks" exact>
          <ion-icon :icon="selected === 'homeworks' ? create : createOutline" />
          <ion-label>الواجبات</ion-label>
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
  create,
  createOutline,
  megaphoneOutline,
  megaphone,
  videocam,
  videocamOutline,
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
    videocam,
    videocamOutline,
    create,
    createOutline,
    helpCircleOutline,
    helpCircle,
    megaphoneOutline,
    megaphone,
    selected: null,
  }),
};
</script>