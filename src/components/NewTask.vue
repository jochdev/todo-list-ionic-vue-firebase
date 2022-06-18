<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="">NewTask</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Form @submit="addTask()"> 
        <!--Begin::Input -->
        <ion-item>
          <ion-label position="floating">What are you planning?</ion-label>
          <ion-input
            name="taskField"
            :rules="isRequired"
            v-model="task"
          ></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ErrorMessage v-slot="{ message }" name="taskField">
            <ion-text color="danger" v-if="message">{{ message }}</ion-text>
          </ErrorMessage>
        </ion-item>
        <!--End::Input -->

        <!--Begin::Input Fecha -->
        <ion-datetime
          v-model="dueDate"
          display-format="MMM DD, YYYY HH:mm"
          display-timezone="utc"
          value="2022-06-17T14:51:56.646+01:00"
          max="2025-12-31"
        ></ion-datetime>
        <ion-item lines="none">
          <ErrorMessage v-slot="{ message }" name="duedateField">
            <ion-text color="danger" v-if="message">{{ message }}</ion-text>
          </ErrorMessage>
        </ion-item>
        <!--Begin::Input Fecha-->

        <!--Begin::Input Nota -->
        <ion-item>
          <ion-label position="floating"
            >Enter more information here...</ion-label
          >
          <ion-textarea  v-model="note"></ion-textarea>
        </ion-item>
        <!--Begin::Input Nota-->

        <!--Begin::Input Categoria -->
        <ion-item>
          <ion-label v-bind="field">Category</ion-label>
          <ion-select placeholder="Select One"  v-model="category">
            <ion-select-option value="Work">Work</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item lines="none">
          <ErrorMessage v-slot="{ message }" name="categoryField">
            <ion-text color="danger" v-if="message">{{ message }}</ion-text>
          </ErrorMessage>
        </ion-item>
        <!--Begin::Input Categoria-->

        <!--Begin::Button -->

        <ion-button expand="full" type="submit">Create</ion-button>

        <!--Begin::Button-->
      </Form>
    </ion-content>
    <!-- Begin::Icon -->
    <ion-fab
      vertical="top"
      horizontal="end"
      class="cursor-pointer"
      slot="fixed"
      @click="$emit('close-modal')"
      ><ion-icon name=""></ion-icon>
      <ion-icon :icon="closeOutline" class="text-3xl"></ion-icon>
    </ion-fab>
    <!-- End::Icon -->
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonFab,
  IonIcon,
  IonLabel,
  IonInput,
  IonItem,
  IonDatetime,
  IonTextarea,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { closeOutline } from "ionicons/icons";
import { Form, ErrorMessage } from "vee-validate";
import { database } from "@/firebase.ts";
import { collection, addDoc } from "firebase/firestore";
export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonToolbar,
    IonPage,
    IonFab,
    IonIcon,
    IonLabel,
    IonInput,
    IonItem,
    Form,
    ErrorMessage,
    IonDatetime,
    IonTextarea,
  },
  setup() {
    const task = ref("");
    const dueDate = ref("");
    const note = ref("");
    const category = ref("");
    const isRequired = (value) => {
      if (!value) {
        return "This field is required";
      }
      return true;
    };

    function addTask() {
      addDoc(collection(database, "tasks"), {
        task: task.value,
        note: note.value,
        dueDate: dueDate.value,
        category: category.value,
        done: false,
      })
        .then(() => {
          task.value = "";
          dueDate.value = "";
          note.value = "";
          category.value = "";
          this.$emit("close-modal");
          console.log("Document successfully written !");
        })
        .catch((error) => {
          console.log("Error writing document: ", error);
        });
    }

    return {
      isRequired,
      task,
      dueDate,
      category,
      addTask,
      closeOutline,
    };
  },
});
</script>
