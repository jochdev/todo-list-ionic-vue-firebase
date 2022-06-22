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
         <ion-icon :icon="cart" size="large" color="primary"></ion-icon>
        </div>

        <div class="text-center">
          <ion-card-title class="text-2xl">Shopping</ion-card-title>
          <ion-card-subtitle>Taks</ion-card-subtitle>
        </div>
      </div>

      <div>
        <!-- Late -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Late <span class="text-gray-600 text-base">0</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding>
            <ion-item-options side="start">
              <ion-item-option color="danger" expadable>
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>

            <ion-item detail="true">
              <ion-label>
                <h2></h2>
                <p style="color: red"></p>
              </ion-label>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option color="primary" expadable>
                <ion-checkbox></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
        <!-- Today -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Today <span class="text-gray-600 text-base">0</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding>
            <ion-item-options side="start">
              <ion-item-option color="danger" expadable>
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>
            <ion-item detail="true">
              <ion-label>
                <h2></h2>
                <p style="color: red"></p>
              </ion-label>
            </ion-item>

            <ion-item-options  side="end">
              <ion-item-option color="primary" expadable>
                <ion-checkbox></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
        <!-- Later -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Later <span class="text-gray-600 text-base">0</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding>
            <ion-item-options side="start">
              <ion-item-option color="danger" expadable>
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>
            <ion-item detail="true">
              <ion-label>
                <h2></h2>
                <p style="color: red"></p>
              </ion-label>
            </ion-item>

            <ion-item-options  side="end">
              <ion-item-option color="primary" expadable>
                <ion-checkbox></ion-checkbox>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
        <!-- Done -->
        <ion-list>
          <ion-list-header>
            <ion-label
              >Done <span class="text-gray-600 text-base">0</span>
            </ion-label>
          </ion-list-header>

          <ion-item-sliding>
            <ion-item-options side="start">
              <ion-item-option color="danger" expadable>
                <ion-icon :icon="trash" size="large"></ion-icon>
              </ion-item-option>
            </ion-item-options>
            <ion-item detail="true">
              <ion-label>
                <h2></h2>
                <p style="color: red"></p>
              </ion-label>
            </ion-item>

            <ion-item-options  side="end">
              <ion-item-option color="primary" expadable>
                <ion-checkbox></ion-checkbox>
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
import { defineComponent, ref } from "vue";
import NewTask from "@/components/NewTask.vue";
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
import { ellipsisVertical, cart, trash, add } from "ionicons/icons";
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
    return {
      ellipsisVertical,
      cart,
      trash,
      add,
      isOpenNewTask,
    };
  },
});
</script>

<style></style>
