import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./styles/TaskCompleted.module.css";
//components
import TaskListDone from "./TaskListDone";
//framer-motion
import { motion } from "framer-motion";
const TaskCompleted = () => {
  const taskCompleted = useSelector((state) => state.task.taskCompleted);
  const liveCount = useSelector((state) => state.task.taskCompleted.length);
  const listContainer =
    taskCompleted.length === 0 ? "completed-remove" : "completed";
  return (
    <Fragment>
      {liveCount ? (
        <div className={classes["completed-divider"]}>
          <div className={classes.doneCount}>{`Completed - ${liveCount}`}</div>
          <hr />
        </div>
      ) : null}
      <motion.ul layoutId="done" className={classes[listContainer]}>
        {taskCompleted.map((item) => (
          <TaskListDone key={item.id} id={item.id} text={item.text} />
        ))}
      </motion.ul>
    </Fragment>
  );
};

export default TaskCompleted;
