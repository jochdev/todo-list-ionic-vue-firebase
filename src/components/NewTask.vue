<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nueva tarea</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="$emit('close-modal')">
            <ion-icon :icon="closeOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Form @submit="addTask()">
        <p class="text-lg pb-4">Registra tus tareas facilmente.</p>

        <ion-item class="pb-3">
          <ion-label position="stacked">What are you planning?</ion-label>
          <Field
            v-slot="{ field }"
            name="taskField"
            :rules="isRequired"
            v-model="task"
          >
            <ion-input
              v-bind="field"
              type="text"
              name="taskField"
              :rules="isRequired"
            >
            </ion-input>
          </Field>
          <ErrorMessage v-slot="{ message }" name="taskField">
            <ion-text color="danger" v-if="message">{{ message }}</ion-text>
          </ErrorMessage>
        </ion-item>

        <!-- ///// -->
        <ion-item class="pb-3">
          <ion-label position="stacked"
            >Enter more information here...</ion-label
          >
          <ion-textarea v-model="note" :rules="isRequired"></ion-textarea>
        </ion-item>
        <!-- ///// -->
        <ion-item class="pb-3">
          <ion-label position="stacked">Choose category</ion-label>
          <ion-select
            interface="popover"
            placeholder="Select One"
            v-model="category"
            :rules="isRequired"
            name="categoryField"
          >
            <IonSelectOption value="Work">Work</IonSelectOption>
          </ion-select>
        </ion-item>
        <ErrorMessage v-slot="{ message }" name="categoryField">
          <ion-text color="danger" v-if="message">{{ message }}</ion-text>
        </ErrorMessage>
        <!-- ///// -->
        <ion-list>
          <ion-accordion-group>
            <ion-accordion value="start">
              <ion-item slot="header">
                <ion-label>MMMM YY</ion-label>
                <ion-note slot="end" id="datetimeValue">{{
                  dueDateShow
                }}</ion-note>
              </ion-item>
              <ion-datetime
                :rules="isRequired"
                id="datetime"
                v-model="dueDate"
                slot="content"
                name="duedateField"
                presentation="date-time"
                display-format="MMM DD, YYYY HH:mm"
                display-timezone="utc"
                max="2025-12-31"
                @ionChange="mostrarTimeChange"
              ></ion-datetime>
            </ion-accordion>
          </ion-accordion-group>
        </ion-list>

        <!-- ///// -->
        <ion-button expand="full" type="submit" class="mt-4">Create</ion-button>
        <!-- Inicio -->

        <!-- Toast -->

        <!-- cerrar -->
      </Form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonAccordionGroup,
  IonAccordion,
  IonDatetime,
  IonNote,
  IonButton,
  IonButtons,
  IonIcon,
  IonText,
  IonList,
  toastController,
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { closeOutline } from "ionicons/icons";
import { Form, ErrorMessage, Field } from "vee-validate";
import { database } from "@/firebase.ts";
import { collection, addDoc } from "firebase/firestore";
export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonToolbar,
    IonPage,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonAccordionGroup,
    IonAccordion,
    IonDatetime,
    IonNote,
    IonButton,
    IonButtons,
    IonIcon,
    IonList,
    Form,
    Field,
    ErrorMessage,
    IonText,
  },

  setup() {
    const task = ref("");
    const dueDate = ref("");
    const dueDateShow = ref("");
    const note = ref("");
    const category = ref("");
    const isRequired = (value) => {
      if (!value) {
        return "This field is required";
      }
      return true;
    };

    function timeActual() {
      const fecha = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
      });
      return fecha;
    }

    function mostrarTime() {
      return (dueDateShow.value = timeActual());
    }

    function mostrarTimeChange() {
      const fecha = new Date(dueDate.value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h24",
      });
      return (dueDateShow.value = fecha);
    }
    async function openToast(msg, color) {
      const toast = await toastController.create({
        message: msg,
        color: color,
        duration: 2000,
      });
      return toast.present();
    }
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
          openToast("Document successfully written !", "success");
        })
        .catch((error) => {
          openToast("Error writing document", "danger");
        });
    }
    onMounted(() => {
      mostrarTime();
    });
    return {
      isRequired,
      addTask,
      closeOutline,
      task,
      note,
      dueDate,
      category,
      timeActual,
      dueDateShow,
      mostrarTimeChange,
    };
  },
});
</script>
