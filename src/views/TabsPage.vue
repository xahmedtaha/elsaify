<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
        </ion-tab-button>
          
        <ion-tab-button tab="contact" href="/tabs/contact">
          <ion-icon :icon="people" />
        </ion-tab-button>
        
        <ion-tab-button tab="about" href="/tabs/about">
          <ion-icon :icon="helpCircle" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { people, helpCircle, home } from 'ionicons/icons';

export default {
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      people, 
      helpCircle, 
      home,
    }
  }
}
</script>