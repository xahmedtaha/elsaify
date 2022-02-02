import { createRouter, createWebHistory } from "@ionic/vue-router";
import { useAuth } from "../stores/auth";
import TabsPage from "../views/TabsPage.vue";
import CoursePage from "../views/CoursePage.vue";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import LoginPage from "../views/Auth/LoginPage.vue";


const routes = [
  // Auth Routes
  {
    meta: {
      requiresGuest: true,
    },
    path: "/login",
    // component: () => import("../views/Auth/LoginPage.vue"),
    component: LoginPage,
  },
  {
    meta: {
      requiresAuth: true,
    },
    path: "/course",
    props: true,
    // component: () => import("../views/CoursePage.vue"),
    component: CoursePage,
  },
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    meta: {
      requiresAuth: true,
    },
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        // component: () => import("@/views/HomePage.vue"),
        component: HomePage,
      },
      {
        path: "contact",
        // component: () => import("@/views/ContactPage.vue"),
        component: ContactPage,
      },
      {
        path: "about",
        // component: () => import("@/views/AboutPage.vue"),
        component: AboutPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (to.meta.requiresAuth && !auth.user) next("/login")
  else if (to.meta.requiresGuest && !!auth.user) next(from ? false : "/")
  else next()
});

export default router;
