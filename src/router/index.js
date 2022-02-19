import {
  createRouter,
  createWebHistory
} from "@ionic/vue-router";
import {
  useAuth
} from "../stores/auth";
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
    meta: {
      requiresAuth: true,
    },
    path: "/lecture",
    props: true,
    component: () => import("../views/LecturePage.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    meta: {
      requiresAuth: true,
    },
    path: "/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/home",
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

router.beforeEach((to, from) => {
  const auth = useAuth();
  if (auth.initialized) {
    if (to.matched.some(route => route.meta.requiresAuth) && !auth.user) return "/login"
    else if (to.matched.some(route => route.meta.requiresGuest) && !!auth.user) return from ? false : "/"
  }
});

export default router;