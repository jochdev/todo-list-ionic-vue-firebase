<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/list"></ion-back-button>
      </ion-buttons>
      <ion-icon slot="end" :icon="ellipsisVertical" class="text-2xl"></ion-icon>
    </ion-toolbar>

    <ion-content class="overflow-auto">
      <div class="flex flex-col justify-center items-center mt-2">
        <div class="text-center">
          <ion-icon :icon="headset" size="large" color="primary"></ion-icon>
        </div>

        <div class="text-center">
          <ion-card-title class="text-2xl">Music</ion-card-title>
          <ion-card-subtitle>Taks</ion-card-subtitle>
        </div>
      </div>

      <div>
        <!-- Late -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Late
              <span class="text-gray-600 text-base">{{
                state.late.length
              }}</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding v-for="item in state.late" :key="item.id">
            <ion-item-options side="start">
              <ion-item-option
                @click="deleteTask('item')"
                color="danger"
                expadable
              >
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>

            <ion-item detail="true">
              <ion-label>
                <h2>{{ item.task }}</h2>
                <p style="color: red">{{ item.dueDate }}</p>
              </ion-label>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option
                @click="doneTask('item')"
                color="primary"
                expadable
              >
                <ion-checkbox :checked="item.done"></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
        <!-- Today -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Today
              <span class="text-gray-600 text-base">{{
                state.today.length
              }}</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding v-for="item in state.today" :key="item.id">
            <ion-item-options side="start">
              <ion-item-option
                @click="deleteTask('item')"
                color="danger"
                expadable
              >
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>
            <ion-item detail="true">
              <ion-label>
                <h2>{{ item.task }}</h2>
                <p style="color: red">{{ item.dueDate }}</p>
              </ion-label>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option
                @click="doneTask('item')"
                color="primary"
                expadable
              >
                <ion-checkbox :checked="item.done"></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
        <!-- Later -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Later
              <span class="text-gray-600 text-base">{{
                state.later.length
              }}</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding v-for="item in state.later" :key="item.id">
            <ion-item-options side="start">
              <ion-item-option
                @click="deleteTask('item')"
                color="danger"
                expadable
              >
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>
            <ion-item detail="true">
              <ion-label>
                <h2>{{ item.task }}</h2>
                <p style="color: red">{{ item.dueDate }}</p>
              </ion-label>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option
                @click="doneTask('item')"
                color="primary"
                expadable
              >
                <ion-checkbox :checked="item.done"></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
        <!-- Done -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Done
              <span class="text-gray-600 text-base">{{
                state.done.length
              }}</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding v-for="item in state.done" :key="item.id">
            <ion-item-options side="start">
              <ion-item-option
                @click="deleteTask('item')"
                color="danger"
                expadable
              >
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>
            <ion-item detail="true">
              <ion-label>
                <h2>{{ item.task }}</h2>
                <p style="color: red">{{ item.dueDate }}</p>
              </ion-label>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option
                @click="notDoneTask('item')"
                color="primary"
                expadable
              >
                <ion-checkbox :checked="item.done"></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
      </div>
    </ion-content>
    <div>
      <ion-fab
        @click="isOpenNewTask = true"
        vertical="bottom"
        horizontal="end"
        slot="fixed"
      >
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-modal :is-open="isOpenNewTask" :backdrop-dismiss="false">
        <new-task @closeModal="isOpenNewTask = false"></new-task>
      </ion-modal>
    </div>
  </ion-page>
</template>

<script>
import { defineComponent, reactive, ref, computed, onMounted } from "vue";
import NewTask from "@/components/NewTask.vue";
import { useStore } from "vuex";
import {
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonContent,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonLabel,
  IonListHeader,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonCheckbox,
  IonItem,
  IonFab,
  IonFabButton,
  IonModal,
} from "@ionic/vue";
// Iconos::Begin
import { ellipsisVertical, headset, trash, add } from "ionicons/icons";
// Iconos::END

export default defineComponent({
  components: {
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonContent,
    IonCardTitle,
    IonCardSubtitle,
    IonList,
    IonLabel,
    IonListHeader,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonCheckbox,
    IonItem,
    IonFab,
    IonFabButton,
    IonModal,
    NewTask,
  },
  setup() {
    const isOpenNewTask = ref(false);
    const store = useStore();
    const state = reactive({
      taskMusic: computed(() => {
        return store.getters.taskByCategory("Music");
      }),
      today: computed(() => {
        return store.getters.today(state.taskMusic);
      }),
      late: computed(() => {
        return store.getters.late(state.taskMusic);
      }),
      later: computed(() => {
        return store.getters.later(state.taskMusic);
      }),
      done: computed(() => {
        return store.getters.done(state.taskMusic);
      }),
    });

    function getTasksMusic() {
      store.commit("getTasks");
    }

    function doneTask(item) {
      store.commit("doneTask", item);
    }

    function notDoneTask(item) {
      store.commit("notDoneTask", item);
    }

    function deleteTask(item) {
      store.commit("deleteTask", item);
    }

    onMounted(() => {
      getTasksMusic();
      // if (store.state.tasks.length == 0) {
      //   getTasksMusic();
      // }
    });
    return {
      ellipsisVertical,
      headset,
      trash,
      add,
      isOpenNewTask,
      store,
      state,
      getTasksMusic,
      doneTask,
      notDoneTask,
      deleteTask,
    };
  },
});
</script>

<style></style>
