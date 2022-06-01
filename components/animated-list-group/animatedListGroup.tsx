import { motion } from "framer-motion";
import { ListGroup } from "react-bootstrap";

const AnimatedListGroup = ({ state, item, color, delay }: { state: boolean, item: any, color:string, delay:number }) => {
  const toggleOpacity = () => (
    state ? { opacity: 1, display: 'block' } : { opacity: 0 }
  );
  return (
    <motion.div initial={{ opacity: 0, display: 'none' }} animate={toggleOpacity()} transition={{ delay: delay }}>
      <ListGroup.Item style={{backgroundColor: color}}>{item}</ListGroup.Item>
    </motion.div>
  )
};

export default AnimatedListGroup;