<template>
    <ion-page>
        <ion-content>
            <div class="container">
                <div class="wrapper">
                    <ion-fab-button
                        color="danger"
                        size="small"
                        style="margin-top: 20px; --box-shadow: none"
                        @click="$emit('retry')"
                    >
                        <ion-icon :icon="refresh" />
                    </ion-fab-button>
                    <ion-text>مفيش نت يا غالي</ion-text>
                    <ion-note v-if="userId">الكود بتاعك لو احتاجته</ion-note>
                    <ion-text v-if="userId" color="primary" class="code">
                        <h3>{{ userId }}</h3>
                    </ion-text>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonIcon, IonText, IonFabButton } from "@ionic/vue";
import { alertCircle, refresh } from 'ionicons/icons';
import { computed } from 'vue-demi';
export default {
    setup() {
        const userId = computed(() => localStorage.getItem('user_id'));
        return {
            alertCircle, refresh,
            userId
        }
    },
    components: {
        IonContent,
        IonPage,
        IonIcon,
        IonText,
        IonFabButton,
    },
};
</script>

<style scoped>
.code {
    letter-spacing: 3px;
    font-weight: bold;
}
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
ion-icon.warning {
    margin-bottom: 10px;
}
</style>
