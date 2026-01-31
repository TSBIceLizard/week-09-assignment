"use client";
import { motion } from "motion/react";

export default function Highlight({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
}
