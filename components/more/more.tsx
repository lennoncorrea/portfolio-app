import { motion } from "framer-motion";
import { Card, Col, Container, Image, ListGroup } from "react-bootstrap";
import styles from "./more.module.css"
import { useState } from "react";
import { TwitchUserData } from "../../models/twitch";
import { FaTwitch } from 'react-icons/fa';
import { SteamUserData } from "../../models/steam";
import AnimatedCard from "../animated-card/animatedCard";
import AnimatedListGroup from "../animated-list-group/animatedListGroup";

const More = ({ twitchData, steamData }: { twitchData: TwitchUserData, steamData: SteamUserData }) => {
  const [twitchCardState, setTwitchCardState] = useState(false);
  const toggleTwichCard: () => void = () => {
    return twitchCardState ? setTwitchCardState(false) : setTwitchCardState(true);
  }
  const createdAtFormated = new Date(twitchData.created_at).formate();
  const purple: string = "rgb(177, 43, 230)";
  return (
    <>
      <Col className="centralizeY">
        <Container>
          <AnimatedCard header={<FaTwitch />} state={twitchCardState} color={purple} toggleState={() => toggleTwichCard()}
            listItems={
              <>
                <AnimatedListGroup item={twitchData.description.capitalize()} state={twitchCardState} color={purple} delay={0.15} />
                <AnimatedListGroup item={`${"I'am a " + twitchData.broadcaster_type.capitalize()}`} state={twitchCardState} color={purple} delay={0.3} />
                <AnimatedListGroup item={`${"Account created at " + createdAtFormated}`} state={twitchCardState} color={purple} delay={0.45} />
                <AnimatedListGroup item={`${"Currently at " + twitchData.view_count}`} state={twitchCardState} color={purple} delay={0.6} />
                <AnimatedListGroup item={<Image src={twitchData.profile_image_url} className={styles.profileImage} alt="twitch profile image" rounded />} state={twitchCardState} color={purple} delay={0.75} />
              </>
            }
          />
        </Container>
      </Col>
    </>
  )
};

export default More;