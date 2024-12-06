import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ImageIconMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ImageIconMotion;
