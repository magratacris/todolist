import { useSelector } from "react-redux";

//components
import TaskListItem from "./TaskListItem";
//framer-motion
import { motion } from "framer-motion";

const TaskList = () => {
  const taskList = useSelector((state) => state.task.taskList);
  const taskCompleted = useSelector(
    (state) => state.task.taskCompleted?.length
  );
  const liveCount = useSelector((state) => state.task.taskList?.length);
  const listContainer = taskList?.length === 0 ? "ul-remove" : "ul-task";

  return (
    <>
      {liveCount ? (
        <div className="flex items-center">
          <div className="my-2 mr-4 ml-6 text-xs text-[#968272] md:text-sm">{`Task${
            liveCount > 1 ? "s" : ""
          } - ${liveCount}`}</div>
          <hr className="mx-auto mr-8 flex-grow border-[1px] border-[#42445c]" />
        </div>
      ) : null}
      <motion.ul
        layoutId="list"
        className={`${listContainer} ${
          taskCompleted <= 2
            ? ""
            : "xs:max-h-[11rem]  sm:max-h-[18rem] 2xl:max-h-[14rem] 3xl:max-h-[23rem]"
        }
        ${
          taskCompleted === 0
            ? "xs:max-h-[20rem]  sm:max-h-[29rem] md:max-h-[33rem]  2xl:max-h-[30rem] 3xl:max-h-[45rem]"
            : ""
        } `}
      >
        {taskList?.map((list) => (
          <TaskListItem
            key={list.id}
            id={list.id}
            text={list.text}
            container="list"
          />
        ))}
      </motion.ul>
    </>
  );
};

export default TaskList;
