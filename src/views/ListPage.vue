<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="mycolor">
        <ion-title>ToDo App</ion-title>
      </ion-toolbar>
    </ion-header>

    <div class="flex w-full flex-col overflow-auto">
      <div class="flex w-full flex-row flex-wrap justify-around mt-2">
        <!-- clipboard -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'All' }">
            <ion-card-header>
              <ion-icon :icon="clipboard" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">All</ion-card-title>
              <ion-card-subtitle
                >{{ state.lengthOfAllTasks }} Tasks</ion-card-subtitle
              >
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- briefcase -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Work' }">
            <ion-card-header>
              <ion-icon :icon="briefcase" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Work</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- Music -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Music' }">
            <ion-card-header>
              <ion-icon :icon="headset" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Music</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- Airplane -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Travel' }">
            <ion-card-header>
              <ion-icon :icon="airplane" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Travel</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- book -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Study' }">
            <ion-card-header>
              <ion-icon :icon="book" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Study</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- home -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Home' }">
            <ion-card-header>
              <ion-icon :icon="home" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Home</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- football -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Sport' }">
            <ion-card-header>
              <ion-icon :icon="football" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Sport</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- cart -->
        <ion-card class="w-2/5 tarjeta rounded-md">
          <router-link :to="{ name: 'Shopping' }">
            <ion-card-header>
              <ion-icon :icon="cart" size="large"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <ion-card-title class="text-2xl">Shopping</ion-card-title>
              <ion-card-subtitle>Tasks</ion-card-subtitle>
            </ion-card-content>
          </router-link>
        </ion-card>
        <!-- Fin -->
      </div>

      <ion-modal :is-open="isOpenNewTask">
        <ion-content>
          <new-task @closeModal="isOpenNewTask = false"></new-task
        ></ion-content>
      </ion-modal>
    </div>

    <ion-footer>
      <ion-button @click="isOpenNewTask = true" expand="block">
        Agregar tareas
      </ion-button>
    </ion-footer>
  </ion-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted, reactive } from "vue";
import NewTask from "@/components/NewTask.vue";
import { useStore } from "vuex";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonIcon,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonModal,
  IonToolbar,
  IonFooter,
  IonTitle,
  IonHeader,
  IonButton,
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
    IonButton,
    IonModal,
    NewTask,
    IonToolbar,
    IonFooter,
    IonContent,
    IonTitle,
    IonHeader,
  },
  setup() {
    const isOpenNewTask = ref(false);
    const store = useStore();
    const state = reactive({
      lengthOfAllTasks: computed(() => {
        return store.state.tasks.length;
      }),
      lengthOfMusicTasks: computed(() => {
        return store.getters.lengthTaskByCategory("Music");
      }),
    });

    function getTasks() {
      store.commit("getTasks");
    }

    onMounted(() => {
      if (store.state.tasks.length == 0) {
        getTasks();
      }
    });

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
      store,
      state,
      getTasks,
    };
  },
});
</script>
