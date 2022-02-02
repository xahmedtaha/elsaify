<template>
  <div>
    <ion-card
      @click="goToCourse"
      :button="course.money == '0.00'"
      :disabled="course.money != '0.00'"
    >
      <ion-card-header>
        <ion-item lines="none" detail>
          <ion-label>
            <ion-card-subtitle>{{ course.text }}</ion-card-subtitle>
            <ion-card-title>{{ course.title }}</ion-card-title>
          </ion-label>
        </ion-item>
      </ion-card-header>
    </ion-card>

    <!-- <ion-item
      lines="none"
      @click="goToCourse"
      :detail="course.money == '0.00'"
      :button="course.money == '0.00'"
    >
      <ion-avatar slot="start">
        <ion-img
          :src="'https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/' + course.img"
        />
      </ion-avatar>
      <ion-label>
        <h2>{{ course.title }}</h2>
        <p>{{ course.text }}</p>
      </ion-label>
      <ion-icon
        style="align-self: center; color: var(--ion-color-danger)"
        slot="end"
        :icon="closeCircle"
        v-if="course.money != '0.00'"
        >مش مشترك في الباب</ion-icon
      >
    </ion-item> -->
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
  //   IonIcon,
} from "@ionic/vue";
import { closeCircle } from "ionicons/icons";
export default {
  components: {
    // IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonLabel,
    IonItem,
  },
  props: ["course"],
  data: () => ({
    closeCircle,
  }),
  methods: {
    goToCourse() {
      console.log(this.course);
      if (this.course.money == "0.00") {
        this.$router.push({
          path: "/course",
          query: {
            id: this.course.id,
            title: this.course.title,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
ion-card {
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