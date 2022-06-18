<template>
  <ion-page>
    <div class="flex w-full flex-col overflow-auto">
      <div class="mt-2">
        <h1 class="text-4xl pl-5 font-semibold">Lista</h1>
      </div>
      <div class="flex w-full flex-row flex-wrap justify-around mt-2">
        <!-- clipboard -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'All' }">
            <ion-card-header>
              <ion-icon
                :icon="clipboard"
                color="primary"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">All</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>

        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Work' }">
            <ion-card-header>
              <ion-icon
                :icon="briefcase"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Work</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- Music -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Music' }">
            <ion-card-header>
              <ion-icon
                :icon="headset"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Music</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>

        <!-- Airplane -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Travel' }">
            <ion-card-header>
              <ion-icon
                :icon="airplane"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Travel</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>

        <!-- book -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Study' }">
            <ion-card-header>
              <ion-icon
                :icon="book"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Study</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>

        <!-- home -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Home' }">
            <ion-card-header>
              <ion-icon
                :icon="home"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Home</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>

        <!-- football -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Sport' }">
            <ion-card-header>
              <ion-icon
                :icon="football"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Sport</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>

        <!-- cart -->
        <ion-card class="w-2/5">
          <router-link :to="{ name: 'Shopping' }">
            <ion-card-header>
              <ion-icon
                :icon="cart"
                color="text-yellow-800"
                size="large"
              ></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">cart</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- Fin -->
      </div>

      <div>
        <ion-fab
          @click="isOpenNewTask = true"
          vertical="botton"
          horizontal="end"
          slot="fixed"
        >
          <ion-fab-button>
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        <ion-modal :is-open="isOpenNewTask">
          <ion-content>
            <new-task @closeModal="isOpenNewTask = false"></new-task
          ></ion-content>
        </ion-modal>
      </div>
    </div>
    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import NewTask from "@/components/NewTask.vue";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonIcon,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonFab,
  IonFabButton,
  IonModal,
  IonToolbar,
  IonFooter,
  IonTitle,
} from "@ionic/vue";
import {
  clipboard,
  briefcase,
  headset,
  airplane,
  book,
  home,
  football,
  cart,
  add,
} from "ionicons/icons";
export default defineComponent({
  components: {
    IonPage,
    IonCard,
    IonCardHeader,
    IonIcon,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonFab,
    IonFabButton,
    IonModal,
    NewTask,
    IonToolbar,
    IonFooter,
    IonContent,
    IonTitle,
  },
  setup() {
    const isOpenNewTask = ref(false);
    return {
      isOpenNewTask,
      clipboard,
      briefcase,
      headset,
      airplane,
      book,
      home,
      football,
      cart,
      add,
    };
  },
});
</script>

<style></style>
