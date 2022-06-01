import { motion } from "framer-motion";
import { Card, Col, Container, ListGroup } from "react-bootstrap";
import styles from "./animatedCard.module.css"

const AnimatedCard = ({ listItems, header, state, color, toggleState }: { listItems: any, header: any, state: boolean, color:string, toggleState: () => void }) => {
  const stateOpacity = () => (
    state ? { opacity: 1 } : { opacity: 0 }
  );
  return (
    <>
      <Col className="centralizeY">
        <Container>
          <Card className={styles.card}>
            <Card.Header className={styles.header} onClick={() => toggleState()} style={{ backgroundColor: color }} >
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

      </Col>
    </>
  )
};

export default AnimatedCard;