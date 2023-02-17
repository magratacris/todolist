import React, { Fragment } from "react";
import { useSelector } from "react-redux";
//components
import TaskListDone from "./TaskListDone";
//framer-motion
import { motion } from "framer-motion";
const TaskCompleted = () => {
  const taskCompleted = useSelector((state) => state.task.taskCompleted);
  const liveCount = useSelector((state) => state.task.taskCompleted.length);
  const listContainer = taskCompleted.length === 0 ? "ul-remove" : "ul-task";
  return (
    <Fragment>
      {liveCount ? (
        <div className="flex items-center">
          <div className="my-2 mr-4 ml-6 text-xs md:text-sm">{`Completed - ${liveCount}`}</div>
          <hr className="mx-auto mr-8 flex-grow border-[1px] border-[#42445c]" />
        </div>
      ) : null}
      <motion.ul layoutId="done" className={listContainer}>
        {taskCompleted.map((item) => (
          <TaskListDone key={item.id} id={item.id} text={item.text} />
        ))}
      </motion.ul>
    </Fragment>
  );
};

export default TaskCompleted;
