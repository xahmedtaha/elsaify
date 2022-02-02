<template>
  <div>
    <ion-card
      @click="goToCourse"
      :button="course.money == '0.00'"
      :disabled="course.money != '0.00'"
      mode="ios"
    >
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
} from "@ionic/vue";
import { closeCircle, chevronBack } from "ionicons/icons";
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
    closeCircle, chevronBack,
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