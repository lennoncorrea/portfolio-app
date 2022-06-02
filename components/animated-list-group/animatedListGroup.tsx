import { motion } from "framer-motion";
import { ListGroup } from "react-bootstrap";

const AnimatedListGroup: ({ state, item, color, bgColor, delay }:
  { state: boolean; item: any; color: string; bgColor: string; delay: number; }) => JSX.Element =
  ({ state, item, color, bgColor, delay }:
    { state: boolean, item: any, color: string, bgColor: string, delay: number }) => {
    const toggleOpacity = () => (
      state ? { opacity: 1, display: 'block' } : { opacity: 0 }
    );
    return (
      <motion.div initial={{ opacity: 0, display: 'none' }} animate={toggleOpacity()} transition={{ delay: delay }}>
        <ListGroup.Item style={{ backgroundColor: bgColor, color: color }}>{item}</ListGroup.Item>
      </motion.div>
    )
  };

export default AnimatedListGroup;