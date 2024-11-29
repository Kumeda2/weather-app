import { useState } from "react";
import cl from "./Card.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Card({ date, time, img, temp }) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <motion.div
      className={cl.card}
      onHoverStart={() => setShowMessage(true)}
      onHoverEnd={() => setShowMessage(false)}
    >
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cl.overlay}
          >
            <div className={cl.background} />
            <motion.p
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className={cl.message}
            >
              API doesn't provide info
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cl.wrapper}>
        <p>{date}</p>
        <p>{time}</p>
        <div className={cl.imgHolder}>
          <img src={img} />
        </div>
        <p>{temp}</p>
      </div>
    </motion.div>
  );
}
