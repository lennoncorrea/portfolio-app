import '../../util/stringExtensions';
import { motion, MotionValue, TargetAndTransition, VariantLabels } from "framer-motion";
import { Col, Row, Image, Card, Container } from "react-bootstrap";
import styles from "./more.module.css"
import { useState } from "react";
import { UserData } from "../../models/twitchModels";

const More = ({ data }: { data: UserData }) => {
  const [twitchCardState, setTwitchCardState] = useState(false);

  const showTwitchCardData: VariantLabels | any = () => {
    setTwitchCardState(true);
    return { width: "100%" };
  }

  return (
    <>
      <Col className="centralizeY">
        <motion.div whileHover={showTwitchCardData} onHoverEnd={() => setTwitchCardState(false)} transition={{ type: "just" }} className={styles.twitch}>
          <div className={styles.leftCol}>
            <Image src={data.profile_image_url} className={styles.profile} roundedCircle />
            <p className={styles.displayName}>{data.display_name}</p>
          </div>
          {twitchCardState ?
            <motion.div initial={{display: 'none'}} animate={{display: 'inherit'}} transition={{delay: 0.5, duration: 1}} className={styles.rightCol}>
              <div >
                <p>Description: {data.description}</p>
                <p>Created at: {data.created_at}</p>
                <p>Boradercaster type: {data.broadcaster_type.capitalize()}</p>
                <p>View Count: {data.view_count}</p>
              </div>
            </motion.div> :
            null
          }
        </motion.div>
      </Col>

    </>
  )
};



export default More;