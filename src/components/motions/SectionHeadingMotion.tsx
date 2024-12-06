import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeadingMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionHeadingMotion;
