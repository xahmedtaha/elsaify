<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div class="wrapper">
          <ion-img src="/assets/img/amr.png"></ion-img>
          <ion-spinner color="primary" name="crescent"></ion-spinner>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonSpinner } from "@ionic/vue";
export default {
  components: {
    IonContent,
    IonPage,
    IonSpinner,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 100%;
}
ion-title {
  text-align: center;
  margin-bottom: 32px;
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
ion-img {
  margin-right: auto;
  margin-left: auto;
  height: 150px;
  margin-bottom: 30px;
}
</style>
