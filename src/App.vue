<template>
  <ion-app>
    <transition name="fade">
      <loading-page v-if="loading" />
      <no-network-page @retry="reload" v-else-if="networkError" />
      <ion-router-outlet v-else />
    </transition>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform, useBackButton, useIonRouter } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "./stores/auth";
import LoadingPage from "./views/LoadingPage.vue";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Plugins } from '@capacitor/core';
import NoNetworkPage from "./views/NoNetworkPage.vue";
const { App } = Plugins;

export default defineComponent({
  name: "App",
  data: () => ({
    loading: true,
    networkError: false,
  }),
  methods: {
    reload() {
      window.location.reload();
    },
    monitorDarkMode() {
      if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'auto');

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = localStorage.getItem("theme");
      if (theme && theme !== 'auto') document.body.classList.toggle("dark", theme === 'dark');
      else document.body.classList.toggle("dark", prefersDark.matches);
      prefersDark.addEventListener("change", (mediaQuery) => {
        if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'auto') {
          document.body.classList.toggle("dark", mediaQuery.matches);
        }
      });

      if (isPlatform("capacitor")) {
        if (document.body.classList.contains("dark")) {
          StatusBar.setStyle({ style: Style.Dark });
          StatusBar.setBackgroundColor({ color: "#121212" });
        } else {
          StatusBar.setStyle({ style: Style.Light });
          StatusBar.setBackgroundColor({ color: "#f4f5f8" });
        }
        // eslint-disable-next-line no-unused-vars
        const mutationObserver = new MutationObserver((mutationsList, observer) => {
          mutationsList.forEach(mutation => {
            if (mutation.attributeName === 'class') {
              if (document.body.classList.contains("dark")) {
                StatusBar.setStyle({ style: Style.Dark });
                StatusBar.setBackgroundColor({ color: "#121212" });
              } else {
                StatusBar.setStyle({ style: Style.Light });
                StatusBar.setBackgroundColor({ color: "#f4f5f8" });
              }
            }
          })
        });
        mutationObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      }
    },
  },
  async mounted() {
    this.monitorDarkMode();

    const router = useIonRouter();
    const authStore = useAuth();
    const route = useRoute()
    authStore
      .init()
      .then(() => {
        if (route.matched.some(r => r.meta.requiresAuth && !authStore.user)) router.replace('/login')
        if (route.matched.some(r => r.meta.requiresGuest && !!authStore.user)) router.replace('/')
        // Wait for the page to finish rendering
        setTimeout(() => {
          this.loading = false;
        }, 200);
      })
      .catch((err) => {
        if (err.network) this.networkError = true;
        else router.replace("/login");
        // Wait for the page to finish rendering
        setTimeout(() => {
          this.loading = false;
        }, 200);
      });

    useBackButton(-1, () => {
      if (!router.canGoBack()) {
        App.exitApp();
      }
    })
  },
  components: {
    IonApp,
    IonRouterOutlet,
    LoadingPage,
    NoNetworkPage
  },
});
</script>

<style>
/* body:not(.dark) ion-content {
  --background: var(--ion-color-light);
} */

input::-ms-reveal,
input::-ms-clear {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
main {
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
}
</style>