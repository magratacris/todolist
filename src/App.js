import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskListActions } from "./store/taskList-slice";
//components
import AddTask from "./components/AddTask";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskCompleted from "./components/TaskCompleted";
import Header from "./components/Header";

const App = () => {
  const [isAddTask, setIsAddTask] = useState(false);
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskList);
  const taskCompleted = useSelector((state) => state.task.taskCompleted);
  const savedInput = useSelector((state) => state.task.savedInput);
  const savedCompTask = useSelector((state) => state.task.savedCompTask);
  //Setting up local storage
  useEffect(() => {
    dispatch(taskListActions.replaceTask(savedInput));
    dispatch(taskListActions.replaceTaskCompleted(savedCompTask));
  }, [dispatch, savedInput, savedCompTask]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList));
    localStorage.setItem("completed", JSON.stringify(taskCompleted));
  }, [taskList, taskCompleted]);

  //Handlers
  const addTaskHandler = () => {
    setIsAddTask(true);
  };
  const resetAddTaskButtonHandler = () => {
    setIsAddTask(false);
  };
  return (
    <div className="mx-auto  max-h-[95vh] max-w-3xl ">
      <Header onShow={resetAddTaskButtonHandler} />
      {!isAddTask && <AddTask onAddTask={addTaskHandler} show={isAddTask} />}
      {isAddTask && <TaskForm />}
      <div className="flex flex-col">
        <TaskList />
        <TaskCompleted />
      </div>
    </div>
  );
};

export default App;
