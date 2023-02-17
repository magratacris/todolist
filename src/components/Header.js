import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";
//components
import Modal from "./UI/Modal";
//framer-motion
import { motion } from "framer-motion";

const DEMO_TASK = [
  {
    id: "t1",
    text: "Catherine's birthday party",
  },
  { id: "t2", text: "Submit NY expense report" },
  { id: "t3", text: "Add new colleagues to the mailing list" },
  { id: "t4", text: "Follow up Jimmy's question" },
  { id: "t5", text: "Get budget approved by Saimon" },
  { id: "t6", text: "Itzy concert" },
];
const DEMO_COMPLETED_TASK = [
  { id: "c1", text: "Check my work emails" },
  { id: "c2", text: "Workout" },
  { id: "c3", text: "Lazada delivery" },
  { id: "c4", text: "Develop new homepage" },
  { id: "c5", text: "Send pitch deck to prospect" },
  { id: "c6", text: "Yoga classes" },
];
const Header = ({ onShow }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskList);
  const userActive = taskList.find((item) => item.id.length > 2);
  //Handlers
  const demoTaskHandler = () => {
    if (userActive) {
      setModalShow(true);
      setIsActive(true);
    } else {
      dispatch(taskListActions.replaceTaskListToDemo(DEMO_TASK));
      dispatch(taskListActions.replaceCompListToDemo(DEMO_COMPLETED_TASK));
    }
  };

  const clearTaskHandler = () => {
    if (userActive) {
      setModalShow(true);
      setIsActive(false);
    } else {
      dispatch(taskListActions.clearAll());
      onShow();
    }
  };
  const demoCancelHandler = () => {
    setModalShow(false);
  };
  const demoContinueHandler = () => {
    setModalShow(false);
    dispatch(taskListActions.replaceTaskListToDemo(DEMO_TASK));
    dispatch(taskListActions.replaceCompListToDemo(DEMO_COMPLETED_TASK));
  };
  const clearContinueHandler = () => {
    setModalShow(false);
    dispatch(taskListActions.clearAll());
    onShow();
  };
  const modalContent = {
    q1: "Confirm Demo?",
    demo: "This will delete and replace everything on the list.",
    q2: "Clear all items?",
    clearAll: "This will delete everything on the list. Are you sure?",
  };

  return (
    <>
      {modalShow && (
        <Modal
          question={isActive ? modalContent.q1 : modalContent.q2}
          content={isActive ? modalContent.demo : modalContent.clearAll}
          onCancel={demoCancelHandler}
          onContinue={isActive ? demoContinueHandler : clearContinueHandler}
        />
      )}
      <div className="flex-shrink-1 my-2 flex h-16  items-center justify-center space-x-11 text-sm md:justify-between md:space-x-0">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          onClick={demoTaskHandler}
          className="header-btn"
        >
          {"Demo (Try Me!)"}
        </motion.button>

        <div>
          <h1 className="md:text:sm text-xs">ToDo List</h1>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          onClick={clearTaskHandler}
          className="header-btn"
        >
          Clear All
        </motion.button>
      </div>
    </>
  );
};

export default Header;
