import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ x: -5, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ButtonMotion;
