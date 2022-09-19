import { motion } from "framer-motion";

interface Icolor {
  color: string;
}
const heroVariant = {
  hidden: {
    rotate: 0,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 8,
    },
  },
};

const Box = (props: any) => {
  const { color } = props;
  return (
    <motion.div
      variants={heroVariant}
      initial="hidden"
      animate="visible"
      className={`box ${color}`}
    ></motion.div>
  );
};
export default Box;
