import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";

import classes from "./styles/TaskForm.module.css";
//assets
import AddIcon from "./Icons/AddIcon";
//framer-motion
import { motion } from "framer-motion";

const TaskForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  //Handlers
  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (taskInput.trim().length === 0) {
      return;
    }

    dispatch(
      taskListActions.addTask({
        id: Math.floor(Math.random() * 10000000).toString(),
        text: taskInput,
      })
    );
    setTaskInput("");
  };

  return (
    <motion.form
      layoutId="above"
      className={classes.taskform}
      onSubmit={submitHandler}
    >
      <div className={classes.label}>
        <label htmlFor="task">What's on your mind?</label>
      </div>

      <div className={classes["input-button"]}>
        <div className={classes["input-container"]}>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="task"
            maxLength="100"
            onChange={taskInputHandler}
            value={taskInput}
          />
        </div>
        <div className={classes["btn-container"]}>
          <button type="submit">
            <div className={classes.icon}>
              <AddIcon />
            </div>
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default TaskForm;
