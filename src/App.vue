<template>
  <ion-app>
    <transition name="fade">
      <loading-page v-if="loading" />
      <ion-router-outlet v-else />
    </transition>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform } from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "./stores/auth";
import LoadingPage from "./views/LoadingPage.vue";
import { StatusBar, Style } from "@capacitor/status-bar";

export default defineComponent({
  name: "App",
  data: () => ({
    loading: true,
  }),
  async mounted() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    document.body.classList.toggle("dark", prefersDark.matches);
    if (isPlatform("capacitor")) {
      if (prefersDark.matches) {
        StatusBar.setStyle({ style: Style.Dark });
        StatusBar.setBackgroundColor({ color: "#121212" });
      } else {
        StatusBar.setStyle({ style: Style.Light });
        StatusBar.setBackgroundColor({ color: "#f4f5f8" });
      }
    }

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener("change", (mediaQuery) => {
      document.body.classList.toggle("dark", mediaQuery.matches);
      if (isPlatform("capacitor")) {
        if (mediaQuery.matches) {
          StatusBar.setStyle({ style: Style.Dark });
          StatusBar.setBackgroundColor({ color: "#121212" });
        } else {
          StatusBar.setStyle({ style: Style.Light });
          StatusBar.setBackgroundColor({ color: "#f4f5f8" });
        }
      }
    });

    const router = useRouter();
    const authStore = useAuth();
    authStore
      .init()
      .then(() => {
        router.replace("/");
        // Wait for the page to finish rendering
        setTimeout(() => {
          this.loading = false;
        }, 200);
      })
      .catch(() => {
        router.replace("/login");
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
  },
});
</script>

<style>
/* body:not(.dark) ion-content {
  --background: var(--ion-color-light);
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
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