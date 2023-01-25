import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    taskList: [],
    taskCompleted: [],
    savedInput: JSON.parse(localStorage.getItem("todos")),
    savedCompTask: JSON.parse(localStorage.getItem("completed")),
  },
  reducers: {
    addTask(state, action) {
      const newTask = action.payload;
      state.taskList.unshift({
        id: newTask.id,
        text: newTask.text,
      });
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.taskList = state.taskList.filter((item) => item.id !== id);
    },
    doneTask(state, action) {
      const id = action.payload;
      const selectedItem = state.taskList.find((item) => item.id === id);
      state.taskCompleted.unshift(selectedItem);
      state.taskList = state.taskList.filter((item) => item.id !== id);
    },
    replaceTask(state, action) {
      const selectedItem = action.payload;
      state.taskList = selectedItem;
    },
    completedToTaskList(state, action) {
      const id = action.payload.id;
      const selectedItem = action.payload;
      state.taskList.unshift(selectedItem);
      state.taskCompleted = state.taskCompleted.filter(
        (item) => item.id !== id
      );
    },
    deleteCompletedTask(state, action) {
      const id = action.payload;
      state.taskCompleted = state.taskCompleted.filter(
        (item) => item.id !== id
      );
    },
    //*local storage----------------
    replaceTaskCompleted(state, action) {
      const selectedItem = action.payload;
      state.taskCompleted = selectedItem;
    },
    //*Demo--------------
    replaceTaskListToDemo(state, action) {
      const demo = action.payload;
      state.taskList = [...demo];
    },
    replaceCompListToDemo(state, action) {
      const demo = action.payload;
      state.taskCompleted = [...demo];
    },
    clearAll(state) {
      state.taskList = [];
      state.taskCompleted = [];
    },
  },
});
export const taskListActions = taskListSlice.actions;
export default taskListSlice.reducer;
