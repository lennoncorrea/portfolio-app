import { motion } from "framer-motion";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import { FaTwitch } from "react-icons/fa";
import styles from "./animatedCard.module.css"

const AnimatedCard = ({ listItems, state, toggleState }: { listItems:any, state: boolean, toggleState: () => void }) => {
  return (
    <>
      <Col className="centralizeY">
        <Container>
          <Card className={styles.twitch}>
            <Card.Header className={styles.header} onClick={() => toggleState()} >
              <FaTwitch />
            </Card.Header>
            {state ?
              <motion.div initial={{ opacity: 1 }} animate={state ? { opacity: 1 } : { opacity: 1 }} className={styles.items}>
                <ListGroup>
                  {listItems}
                </ListGroup>
              </motion.div>
              : null
            }
          </Card>
        </Container>

      </Col>
    </>
  )
};

export default AnimatedCard;