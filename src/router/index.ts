import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ListPage from "../views/ListPage.vue";
import AllPage from "../views/AllPage.vue";
import WorkPage from "../views/WorkPage.vue";
import MusicPage from "../views/MusicPage.vue";
import TravelPage from "../views/TravelPage.vue";
import StudyPage from "../views/StudyPage.vue";
import SportPage from "../views/SportPage.vue";
import ShoppingPage from "../views/ShoppingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/list",
  },
  {
    path: "/list",
    name: "List",
    component: ListPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/all",
    name: "All",
    component: AllPage,
  },
  {
    path: "/work",
    name: "Work",
    component: WorkPage,
  },
  {
    path: "/travel",
    name: "Travel",
    component: TravelPage,
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: ShoppingPage,
  },

  {
    path: "/study",
    name: "Study",
    component: StudyPage,
  },

  {
    path: "/sport",
    name: "Sport",
    component: SportPage,
  },

  {
    path: "/music",
    name: "Music",
    component: MusicPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
