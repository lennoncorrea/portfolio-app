import { motion } from "framer-motion";
import { Card, Container, ListGroup } from "react-bootstrap";
import styles from "./AnimatedCard.module.css"

const AnimatedCard = ({ listItems, header, state, color, bgColor, toggleState }:
  { listItems: any, header: any, state: boolean, color: string, bgColor: string, toggleState: () => void }) => {
  const stateOpacity = () => (
    state ? { opacity: 1 } : { opacity: 0 }
  );
  return (
    <>
      <Container>
        <Card className={styles.card}>
          <Card.Header className={styles.header} onClick={() => toggleState()} style={{ backgroundColor: bgColor, color: color }} >
            {header}
          </Card.Header>
          {state ?
            <motion.div initial={{ opacity: 1 }} animate={stateOpacity()}>
              <ListGroup>
                {listItems}
              </ListGroup>
            </motion.div>
            : null
          }
        </Card>
      </Container>
    </>
  )
};

export default AnimatedCard;