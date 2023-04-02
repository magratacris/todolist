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
  const userActive = taskList?.find((item) => item.id.length > 2);
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
      <div className=" my-2 flex h-16  items-center  justify-between space-x-11 px-4 text-sm md:space-x-0">
        <button
          onClick={demoTaskHandler}
          className=" whitespace-pre-line rounded-xl border-2 border-accent-color p-1 text-xs duration-500 hover:bg-[#dbdbdb] hover:text-black sm:p-3 "
        >
          {"Demo (Try Me!)"}
        </button>

        <div>
          <h1 className="text-xs text-[#968272] md:text-sm">ToDo List</h1>
        </div>

        <button
          onClick={clearTaskHandler}
          className="m-1 whitespace-pre-line rounded-xl border-2 border-accent-color p-1 text-xs duration-500 hover:bg-[#dbdbdb] hover:text-black sm:p-3"
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Header;
