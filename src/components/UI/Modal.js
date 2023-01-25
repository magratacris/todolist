import React from "react";
import classes from "../styles/Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";
const Modal = ({ question, content, onCancel, onContinue }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.backdrop}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={classes.modal}
      >
        <h1>{question}</h1>
        <h3>{content}</h3>
        <div className={classes["btn-container"]}>
          <button onClick={() => onCancel()}>Cancel</button>
          <button onClick={() => onContinue()}>Continue</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
