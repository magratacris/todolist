import React, { Fragment } from "react";
//local-icons
import AddIcon from "./Icons/AddIcon";
//framer-motion
import { motion } from "framer-motion";

const AddTask = ({ onAddTask, show }) => {
  return (
    <Fragment>
      {!show && (
        <motion.div
          layoutId="above"
          className="group mx-4 flex items-center rounded-2xl bg-sec-color duration-500"
        >
          <motion.button
            key={"addtask"}
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            onClick={onAddTask}
            className=" my-1 mx-2 rounded-2xl border-[3px] border-accent-color py-3 px-3"
          >
            <div>
              <AddIcon />
            </div>
          </motion.button>
          <h1>Add a Task</h1>
        </motion.div>
      )}
      <div></div>
    </Fragment>
  );
};

export default AddTask;
