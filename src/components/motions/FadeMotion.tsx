import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FadeMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeMotion;
