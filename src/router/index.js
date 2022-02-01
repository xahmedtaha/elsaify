import { createRouter, createWebHistory } from "@ionic/vue-router";
import { useAuth } from "../stores/auth";
import TabsPage from "../views/TabsPage.vue";

const routes = [
  // Auth Routes
  {
    meta: {
      requiresGuest: true,
    },
    path: "/login",
    component: () => import("../views/Auth/LoginPage.vue"),
  },
  {
    meta: {
      requiresAuth: true,
    },
    path: "/course",
    props: true,
    component: () => import("../views/CoursePage.vue"),
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
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "contact",
        component: () => import("@/views/ContactPage.vue"),
      },
      {
        path: "about",
        component: () => import("@/views/AboutPage.vue"),
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
