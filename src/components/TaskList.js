import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./styles/TaskList.module.css";
//components
import TaskListItem from "./TaskListItem";
//framer-motion
import { motion } from "framer-motion";

const TaskList = () => {
  const taskList = useSelector((state) => state.task.taskList);
  const liveCount = useSelector((state) => state.task.taskList.length);
  const listContainer = taskList.length === 0 ? "taskList-remove" : "taskList";

  return (
    <Fragment>
      {liveCount ? (
        <div className={classes["task-divider"]}>
          <div className={classes.taskCount}>{`Task${
            liveCount > 1 ? "s" : ""
          } - ${liveCount}`}</div>
          <hr />
        </div>
      ) : null}
      <motion.ul layoutId="list" className={`${classes[listContainer]}`}>
        {taskList.map((list) => (
          <TaskListItem
            key={list.id}
            id={list.id}
            text={list.text}
            time={list.time}
          />
        ))}
      </motion.ul>
    </Fragment>
  );
};

export default TaskList;
