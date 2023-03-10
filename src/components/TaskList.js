import React, { Fragment } from "react";
import { useSelector } from "react-redux";

//components
import TaskListItem from "./TaskListItem";
//framer-motion
import { motion } from "framer-motion";

const TaskList = () => {
  const taskList = useSelector((state) => state.task.taskList);
  const liveCount = useSelector((state) => state.task.taskList?.length);
  const listContainer = taskList?.length === 0 ? "ul-remove" : "ul-task";

  return (
    <Fragment>
      {liveCount ? (
        <div className="flex items-center">
          <div className="my-2 mr-4 ml-6 text-xs md:text-sm">{`Task${
            liveCount > 1 ? "s" : ""
          } - ${liveCount}`}</div>
          <hr className="mx-auto mr-8 flex-grow border-[1px] border-[#42445c]" />
        </div>
      ) : null}
      {/* tasks list */}
      <motion.ul layoutId="list" className={listContainer}>
        {taskList?.map((list) => (
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
