import React from "react";
//framer-motion
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ question, content, onCancel, onContinue }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onCancel()}
        id="backdrop"
        className="fixed z-10 h-screen w-screen  backdrop-blur-sm   "
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        id="modal"
        className="fixed top-2/4 left-2/4 z-20 flex h-auto w-64 -translate-x-2/4 -translate-y-2/4 flex-col rounded-2xl bg-sec-color p-3 md:h-56 md:w-96 "
      >
        <h1 className="m-3 mb-2 text-sm font-thin md:m-4 md:text-xl ">
          {question}
        </h1>
        <p className="m-4 text-xs font-thin text-[#b0aeae] md:text-sm ">
          {content}
        </p>
        <div className="mt-2 flex scale-75 flex-nowrap self-end md:scale-100">
          <button
            onClick={() => onCancel()}
            className="m-1 rounded-2xl border-[3px] border-accent-color p-2 hover:bg-accent-color"
          >
            Cancel
          </button>
          <button
            onClick={() => onContinue()}
            className="m-1 rounded-2xl border-[3px] border-accent-color  p-1  hover:bg-accent-color md:p-2"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
