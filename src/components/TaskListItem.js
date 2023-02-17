import React from "react";
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
        className="tasklist"
      >
        <div className="ml-3 w-3/5 break-words text-xs md:text-sm">
          <h1>{text}</h1>
        </div>

        <div className="flex">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            //*------------------
            onClick={deleteTaskHandler}
            className="mini-btn group"
          >
            <div>
              <TrashIcon />
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={doneTaskHandler}
            className="mini-btn group"
          >
            <div>
              <CheckIcon />
            </div>
          </motion.button>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default TaskListItem;
