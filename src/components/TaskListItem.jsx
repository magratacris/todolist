import React from "react";
import { useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";
//assets
import CheckIcon from "./Icons/CheckIcon";
import TrashIcon from "./Icons/TrashIcon";
import RefreshIcon from "./Icons/RefreshIcon";
//framer-motion
import { motion, AnimatePresence } from "framer-motion";

const TaskListItem = ({ id, text, container }) => {
  const dispatch = useDispatch();

  const listDeleteHandler = () => {
    dispatch(taskListActions.deleteTask(id));
  };
  const doneDeleteTaskHandler = () => {
    dispatch(taskListActions.deleteCompletedTask(id));
  };
  const doneTaskHandler = () => {
    dispatch(taskListActions.doneTask(id));
  };
  const refreshTaskHandler = () => {
    dispatch(taskListActions.completedToTaskList({ id: id, text: text }));
  };

  const buttonAndClickEvent = (button) => {
    if (button === "list") {
      return {
        icon: <CheckIcon />,
        leftBtn: () => listDeleteHandler(),
        rightBtn: () => doneTaskHandler(),
      };
    }
    if (button === "done") {
      return {
        icon: <RefreshIcon />,
        leftBtn: () => doneDeleteTaskHandler(),
        rightBtn: () => refreshTaskHandler(),
      };
    }
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => null}>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.02 }}
        className="my-2 mx-4 flex list-none flex-nowrap items-center justify-between rounded-3xl bg-sec-color p-1 text-sm duration-500  md:text-base"
      >
        <div
          className={`${
            container === "done" ? "line-through" : ""
          } ml-3 w-3/5 break-words text-xs md:text-sm`}
        >
          <h1>{text}</h1>
        </div>

        <div className="flex">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={buttonAndClickEvent(container).leftBtn}
            className="group m-1 rounded-xl border-[3px] border-accent-color p-1  md:m-2 md:p-2"
          >
            <TrashIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={buttonAndClickEvent(container).rightBtn}
            className="group m-1 rounded-xl border-[3px] border-accent-color p-1  md:m-2 md:p-2"
          >
            {buttonAndClickEvent(container).icon}
          </motion.button>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default TaskListItem;
