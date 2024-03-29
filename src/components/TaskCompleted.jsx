import { useSelector } from "react-redux";
//components
import TaskListItem from "./TaskListItem";
//framer-motion
import { motion } from "framer-motion";

const TaskCompleted = () => {
  const taskCompleted = useSelector((state) => state.task.taskCompleted);
  const taskList = useSelector((state) => state.task.taskList?.length);
  const liveCount = useSelector((state) => state.task.taskCompleted?.length);
  const listContainer = taskCompleted?.length === 0 ? "ul-remove" : "ul-task";
  return (
    <div>
      {liveCount ? (
        <div className="flex items-center text-[#968272]">
          <div className="my-2 mr-4 ml-6 text-xs md:text-sm">{`Completed - ${liveCount}`}</div>
          <hr className="mx-auto mr-8 flex-grow border-[1px] border-[#42445c]" />
        </div>
      ) : null}
      <motion.ul
        layoutId="done"
        className={`${listContainer}  
        ${
          taskList === 0
            ? "xs:max-h-[27rem]  sm:max-h-[34rem] md:max-h-[38rem] lg:max-h-[53rem]  2xl:max-h-[33rem] 3xl:max-h-[45rem]"
            : "xs:max-h-[13rem]  sm:max-h-[18rem] 2xl:max-h-[16rem] 3xl:max-h-[23rem]"
        } 
        `}
      >
        {taskCompleted?.map((item) => (
          <TaskListItem
            key={item.id}
            id={item.id}
            text={item.text}
            container="done"
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default TaskCompleted;
