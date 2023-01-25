import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskList-slice";

const store = configureStore({ reducer: { task: taskListSlice } });

export default store;
