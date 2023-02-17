import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";

//assets
import AddIcon from "./Icons/AddIcon";
//framer-motion
import { motion } from "framer-motion";

const TaskForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  //Handlers
  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (taskInput.trim().length === 0) {
      return;
    }

    dispatch(
      taskListActions.addTask({
        id: Math.floor(Math.random() * 10000000).toString(),
        text: taskInput,
      })
    );
    setTaskInput("");
  };

  return (
    <motion.form
      layoutId="above"
      onSubmit={submitHandler}
      className="mx-4 mt-2.5 mb-2 flex flex-col space-y-2 rounded-3xl bg-main-color px-4 pt-4 text-sm"
    >
      <div>
        <label htmlFor="task" className="text-xs md:text-sm">
          What's on your mind?
        </label>
      </div>

      <div className=" flex items-center">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="task"
          maxLength="100"
          onChange={taskInputHandler}
          value={taskInput}
          className="my-2 block flex-grow rounded-2xl bg-[#606276] p-2 text-xs outline-none md:my-4  md:text-sm"
        />

        <div>
          <button type="submit" className="mini-btn group">
            <div>
              <AddIcon />
            </div>
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default TaskForm;
