import React from "react";
import classes from "./styles/TaskListItem.module.css";
//assets
import CheckIcon from "./Icons/CheckIcon";
import TrashIcon from "./Icons/TrashIcon";
import { useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";
//framer-motion
import { motion, AnimatePresence } from "framer-motion";

const TaskListItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const deleteTaskHandler = () => {
    dispatch(taskListActions.deleteTask(id));
  };
  const doneTaskHandler = () => {
    dispatch(taskListActions.doneTask(id));
  };
  return (
    <AnimatePresence mode="wait" onExitComplete={() => null}>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        className={classes.listItem}
      >
        <div className={classes.text}>
          <h1>{text}</h1>
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
            onClick={doneTaskHandler}
          >
            <div className={classes.icon}>
              <CheckIcon />
            </div>
          </motion.button>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default TaskListItem;
