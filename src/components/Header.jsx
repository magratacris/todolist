import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskListActions } from "../store/taskList-slice";
//components
import Modal from "./UI/Modal";

const Header = ({ onShow }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskList);
  const userActive = taskList?.find((item) => item.id.length > 2);
  const [demoTask, isDemoTask] = useState([]);
  const [demoTaskCompleted, isDemoTaskCompleted] = useState([]);
  //local data fetching
  useEffect(() => {
    const demo = async () => {
      try {
        const response = await fetch("/data/demo.json");
        const data = await response.json();
        isDemoTask(data[0]);
        isDemoTaskCompleted(data[1]);
      } catch (error) {
        console.log(error);
      }
    };
    demo();
  }, []);
  //Handlers
  const demoButtonHandler = () => {
    if (userActive) {
      setModalShow(true);
      setIsActive(true);
    } else {
      dispatch(taskListActions.replaceTaskListToDemo(demoTask));
      dispatch(taskListActions.replaceCompListToDemo(demoTaskCompleted));
    }
  };

  const clearButtonHandler = () => {
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
    dispatch(taskListActions.replaceTaskListToDemo(demoTask));
    dispatch(taskListActions.replaceCompListToDemo(demoTaskCompleted));
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
          onClick={demoButtonHandler}
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          className=" whitespace-pre-line rounded-xl border-2 border-accent-color p-1 text-xs duration-500 hover:bg-[#dbdbdb] hover:text-black sm:p-3 "
        >
          {"Demo (Try Me!)"}
        </button>

        <div>
          <h1 className="text-xs text-[#968272] md:text-sm">ToDo List</h1>
        </div>

        <button
          onClick={clearButtonHandler}
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
          className="m-1 whitespace-pre-line rounded-xl border-2 border-accent-color p-1 text-xs duration-500 hover:bg-[#dbdbdb] hover:text-black sm:p-3"
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Header;
