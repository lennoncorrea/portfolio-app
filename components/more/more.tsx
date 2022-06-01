import { motion, VariantLabels } from "framer-motion";
import { Card, Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import styles from "./more.module.css"
import { useState } from "react";
import { TwitchUserData } from "../../models/twitch";
import { FaTwitch } from 'react-icons/fa';

const More = ({ data }: { data: TwitchUserData }) => {
  const [twitchCardState, setTwitchCardState] = useState(false);
  const toggleTwichCard: any = () => {
    return twitchCardState ? setTwitchCardState(false) : setTwitchCardState(true);
  }
  const createdAtFormated = new Date(data.created_at).formate();
  return (
    <>
      <Col className="centralizeY">

        <Container>
          <Card className={styles.twitch}>
            <Card.Header className={styles.header} onClick={() => toggleTwichCard()} >
              <FaTwitch />
            </Card.Header>
            {twitchCardState ?
              <motion.div initial={{ opacity: 1 }} animate={twitchCardState ? { opacity: 1 } : { opacity: 1 }} className={styles.items}>
                <ListGroup>
                  <motion.div initial={{ opacity: 0, display: 'none' }} animate={twitchCardState ? { opacity: 1, display: 'block' } : { opacity: 1 }} transition={{ delay: 0.15 }}>
                    <ListGroup.Item className={styles.item}>{data.description.capitalize()}</ListGroup.Item>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, display: 'none' }} animate={twitchCardState ? { opacity: 1, display: 'block' } : { opacity: 1 }} transition={{ delay: 0.30 }}>
                    <ListGroup.Item className={styles.item}>{"I'm a "}{data.broadcaster_type.capitalize()}</ListGroup.Item>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, display: 'none' }} animate={twitchCardState ? { opacity: 1, display: 'block' } : { opacity: 1 }} transition={{ delay: 0.45 }}>
                    <ListGroup.Item className={styles.item}>{"Account created at "}{createdAtFormated}</ListGroup.Item>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, display: 'none' }} animate={twitchCardState ? { opacity: 1, display: 'block' } : { opacity: 1 }} transition={{ delay: 0.60 }}>
                    <ListGroup.Item className={styles.item}>Currently at {data.view_count} views</ListGroup.Item>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, display: 'none' }} animate={twitchCardState ? { opacity: 1, display: 'block' } : { opacity: 1 }} transition={{ delay: 0.60 }}>
                    <ListGroup.Item className={styles.item}><Image src={data.profile_image_url} className={styles.profileImage} alt="twitch profile image" rounded/></ListGroup.Item>
                  </motion.div>
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

export default More;