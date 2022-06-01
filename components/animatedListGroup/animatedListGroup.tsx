import { motion } from "framer-motion";
import { ListGroup } from "react-bootstrap";
import styles from "./animatedListGroup.module.css"

const AnimatedListGroup = ({ state, item }: { state: boolean, item: any }) => {
  return (
    <>
      <motion.div initial={{ opacity: 0, display: 'none' }} animate={state ? { opacity: 1, display: 'block' } : { opacity: 1 }} transition={{ delay: 0.30 }}>
        <ListGroup.Item className={styles.item}>{item}</ListGroup.Item>
      </motion.div>
    </>
  )
};

export default AnimatedListGroup;