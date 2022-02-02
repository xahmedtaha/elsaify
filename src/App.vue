<template>
  <ion-app>
    <transition name="fade">
      <loading-page v-if="loading" />
      <ion-router-outlet v-else />
    </transition>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from './stores/auth';
import LoadingPage from './views/LoadingPage.vue';

export default defineComponent({
  name: 'App',
  data: () => ({
    loading: true,
  }),
  async mounted () {
    const router = useRouter();
    const authStore = useAuth();
    console.group('Auth Init');
    authStore.init().then(async () => {
      await router.replace('/')
      // Wait for the page to finish rendering
      setTimeout(() => {
        this.loading = false;
      }, 200);
    }).catch(async () => {
      await router.replace('/login')
      // Wait for the page to finish rendering
      setTimeout(() => {
        this.loading = false;
      }, 200);
    });
    console.groupEnd();
  },
  components: {
    IonApp,
    IonRouterOutlet,
    LoadingPage,
  }
});
</script>

<style>
@media (prefers-color-scheme: light) {
  ion-content {
    --background: var(--ion-color-light);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
main{
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
}
.video-modal {
  --min-height: 460px;
  --height: auto;
}
</style>