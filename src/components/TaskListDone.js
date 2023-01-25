import React from "react";
import { useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";
import classes from "./styles/TaskListDone.module.css";
//assets
import RefreshIcon from "./Icons/RefreshIcon";
import TrashIcon from "./Icons/TrashIcon";

//framer-motion
import { motion } from "framer-motion";
const TaskListDone = ({ id, text }) => {
  const dispatch = useDispatch();
  const deleteTaskHandler = () => {
    dispatch(taskListActions.deleteCompletedTask(id));
  };
  const refreshTaskHandler = () => {
    dispatch(taskListActions.completedToTaskList({ id: id, text: text }));
  };
  return (
    <motion.li whileHover={{ scale: 1.02 }} className={classes.done}>
      <div className={classes.text}>
        <h1>{text}</h1>
        <span></span>
      </div>

      <div className={classes.check}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          //*------------------
          className={classes.delete}
          onClick={deleteTaskHandler}
        >
          <div className={classes.icon}>
            <TrashIcon />
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className={classes.back}
          onClick={refreshTaskHandler}
        >
          <div className={classes.icon}>{<RefreshIcon />}</div>
        </motion.button>
      </div>
    </motion.li>
  );
};

export default TaskListDone;
