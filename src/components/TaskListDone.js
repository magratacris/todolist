import React from "react";
import { useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";
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
    <motion.li whileHover={{ scale: 1.02 }} className="tasklist">
      <div className="ml-3 w-3/5 break-words text-xs line-through md:text-sm">
        <h1>{text}</h1>
        <span></span>
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
          onClick={refreshTaskHandler}
          className="mini-btn group"
        >
          <div>{<RefreshIcon />}</div>
        </motion.button>
      </div>
    </motion.li>
  );
};

export default TaskListDone;
