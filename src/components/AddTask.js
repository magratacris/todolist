import React, { Fragment } from "react";

//lib
import { motion } from "framer-motion";
//styles
import classes from "./styles/AddTask.module.css";
import AddIcon from "./Icons/AddIcon";

//components

const AddTask = ({ onAddTask, show }) => {
  return (
    <Fragment>
      {!show && (
        <motion.div layoutId="above" className={classes.task}>
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
            className={classes.btn}
            onClick={onAddTask}
          >
            <div className={classes.addIcon}>
              <AddIcon />
            </div>
          </motion.button>
          <h1>Add a Task</h1>
        </motion.div>
      )}
    </Fragment>
  );
};

export default AddTask;
