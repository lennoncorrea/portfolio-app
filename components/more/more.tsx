import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./more.module.css"
import { SetStateAction, useState } from "react";
import { TwitchUserData } from "../../models/twitch";
import { FaSteam, FaTwitch } from 'react-icons/fa';
import { SteamUserData } from "../../models/steam";
import AnimatedCard from "../animated-card/animatedCard";
import AnimatedListGroup from "../animated-list-group/animatedListGroup";

const More = ({ twitchData, steamData }: { twitchData: TwitchUserData, steamData: SteamUserData }) => {
  const [twitchCardState, setTwitchCardState] = useState(false);
  const [steamCardState, setSteamCardState] = useState(false);
  const toggleCard = (state: boolean, setState: (value: SetStateAction<boolean>) => void) => {
    return state ? setState(false) : setState(true);
  }
  const createdAtTwitch: string = new Date(twitchData.created_at).formate();
  const createdAtSteam = new Date(steamData.timecreated * 1000).formate();
  const purple: string = "rgb(177, 43, 230)";

  return (
    <>
      <Col className="centralizeY">
        <Container>
          <Row>
            <AnimatedCard header={<FaTwitch />} state={twitchCardState} color={'black'} bgColor={purple} toggleState={() => toggleCard(twitchCardState, setTwitchCardState)}
              listItems={
                <>
                  <AnimatedListGroup item={twitchData.description.capitalize()} state={twitchCardState} color={'black'} bgColor={purple} delay={0.15} />
                  <AnimatedListGroup item={`${"I'am a " + twitchData.broadcaster_type.capitalize()}`} state={twitchCardState} color={'black'} bgColor={purple} delay={0.3} />
                  <AnimatedListGroup item={`${"Account created at " + createdAtTwitch}`} state={twitchCardState} color={'black'} bgColor={purple} delay={0.45} />
                  <AnimatedListGroup item={`${"Currently at " + twitchData.view_count}`} state={twitchCardState} color={'black'} bgColor={purple} delay={0.6} />
                  <AnimatedListGroup item={<Image src={twitchData.profile_image_url} className={styles.profileImage} alt="twitch profile image" rounded />}
                    state={twitchCardState} color={'black'} bgColor={purple} delay={0.75} />
                </>
              }
            />
          </Row>
          <Row>
            <AnimatedCard header={<FaSteam />} state={steamCardState} color={'white'} bgColor={"rgb(75, 75, 75)"} toggleState={() => toggleCard(steamCardState, setSteamCardState)}
              listItems={
                <>
                  <AnimatedListGroup item={steamData.personaname.capitalize()} state={steamCardState} color={'white'} bgColor={'rgb(75, 75, 75)'} delay={0.15} />
                  <AnimatedListGroup item={steamData.profileurl} state={steamCardState} color={'white'} bgColor={'rgb(75, 75, 75)'} delay={0.3} />
                  <AnimatedListGroup item={`${"Account created at " + createdAtSteam}`} state={steamCardState} color={'white'} bgColor={'rgb(75, 75, 75)'} delay={0.45} />
                  <AnimatedListGroup item={steamData.communityvisibilitystate} state={steamCardState} color={'white'} bgColor={'rgb(75, 75, 75)'} delay={0.6} />
                  <AnimatedListGroup item={<Image src={steamData.avatarfull} className={styles.profileImage} alt="twitch profile image" rounded />}
                    state={steamCardState} color={'white'} bgColor={'rgb(75, 75, 75)'} delay={0.75} />
                </>
              }
            />
          </Row>
        </Container>
      </Col>
    </>
  )
};

export default More;