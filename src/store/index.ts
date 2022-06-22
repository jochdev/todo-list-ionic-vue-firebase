import { createStore } from "vuex";
import { database } from "@/firebase";
// import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

const store = createStore({
  state: {
    tasks: Array<any>(),
    options: {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h24",
    },

    isToday: (someDate: any) => {
      const today = new Date();
      return (
        someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
      );
    },
  },
  getters: {
    today: (state) => {
      return (todayTasks: Array<any>) =>
        todayTasks.filter((item: any) => {
          return state.isToday(new Date(item.dueDate)) && item.done == false;
        });
    },

    late: () => {
      return (lateTasks: Array<any>) =>
        lateTasks.filter((item: any) => {
          return (
            new Date(item.dueDate).getTime() < new Date().getTime() &&
            item.done == false
          );
        });
    },

    later: (state) => {
      return (laterTasks: Array<any>) =>
        laterTasks.filter((item: any) => {
          return (
            new Date(item.dueDate).getTime() > new Date().getTime() &&
            state.isToday(new Date(item.dueDate)) == false &&
            item.done == false
          );
        });
    },

    done: () => {
      return (doneTasks: Array<any>) =>
        doneTasks.filter((item: any) => {
          return item.done == true;
        });
    },
  },
  mutations: {
    getTasks: (state) => {
      state.tasks = [];

      // V1
      onSnapshot(collection(database, "tasks"), (querySnapshot: any) => {
        state.tasks = [];
        querySnapshot.forEach((doc: any) => {
          state.tasks.push({
            id: doc.id,
            task: doc.data().task,
            dueDate: new Date(doc.data().dueDate).toLocaleDateString('en-US', {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hourCycle: "h24",
            }),
            // dueDate: new Date(doc.data().dueDate).toLocaleDateString("es-US"),
            category: doc.data().category,
            note: doc.data().note,
            done: doc.data().done,
          });

          console.log(doc.id, " => ", doc.data());
        });
      });
      // V1
      // Inicio
      // getDocs(collection(database, "tasks"))
      //   .then((querySnapshot) => {
      //     console.log(querySnapshot.docs);
      //     if (Array.isArray(querySnapshot)) {
      //       querySnapshot.forEach((doc: any) => {
      //         state.tasks.push({
      //           id: doc.id,
      //           task: doc.data().task,
      //           // dueDate: new Date(doc.data().dueDate).toLocaleDateString('en-US',state.options),
      //           dueDate: new Date(doc.data().dueDate),
      //           category: doc.data().category,
      //           note: doc.data().note,
      //           done: doc.data().done,
      //         });

      //         console.log(doc.id, " => ", doc.data());
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // // Fin
    },
  },
});

export default store;
