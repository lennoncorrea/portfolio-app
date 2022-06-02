import Head from 'next/head';
import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import NavbarApp from '../components/navbar/NavbarApp';
import Introduce from '../components/introduce/Introduce';
import About from '../components/about/About';
import More from '../components/more/More'

import { FaGit } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import styles from "../styles/portfolio.module.css"
import { TwitchUserData } from '../models/twitch';
import { SteamUserData } from '../models/steam';
import { twitchService } from '../services/twitch';
import { steamService } from '../services/steam';

const pageTitle: string = "Portfolio";
const brand: object = <FaGit />;
const navItems: string[] = ["Home", "About", "More"];
const skills: object = {
  "C#": "50",
  "Java": "50",
  "Angular": "50",
  "React": "75"
};

const Portfolio: ({ twitchData, steamData }: { twitchData: TwitchUserData; steamData: SteamUserData; }) => JSX.Element =
  ({ twitchData, steamData }: { twitchData: TwitchUserData, steamData: SteamUserData }) => {
    const [homeState, setHomeState] = useState(true);
    const [aboutState, setAboutState] = useState(false);
    const [moreState, setMoreState] = useState(false);
    const callback: (item: string) => void = (item: string) => {
      if (item === "Home") {
        setHomeState(true);
        setAboutState(false);
        setMoreState(false);
      }
      if (item === "About") {
        setAboutState(true);
        setMoreState(false);
        setHomeState(false);
      }
      if (item === "More") {
        setMoreState(true);
        setAboutState(false);
        setHomeState(false);
      }
    }
    const showAuxComponent = (state: boolean, component: JSX.Element) => {
      if (state && !homeState) {
        return component;
      }
      return null;
    }
    const colClassName: () => string = () => {
      return homeState ? "centralizeY" : `${styles.responsiveHandle + " centralizeY"}`;
    }
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={"Lennon Correa portifolio in NextJs"} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Container>
            <NavbarApp
              brand={brand}
              items={navItems}
              callback={callback}
            />
            <Row className="block">
              <Col className={colClassName()}>
                <Introduce />
              </Col>
              {showAuxComponent(aboutState, <About skills={skills} />)}
              {showAuxComponent(moreState, <More twitchData={twitchData} steamData={steamData} />)}
            </Row>
          </Container>
        </main>
      </>
    )
  };

export const getStaticProps: GetStaticProps = async () => {
  const twitchData: TwitchUserData = await twitchService.userData();
  const steamData: SteamUserData = await steamService.userData();
  return {
    props: {
      twitchData: twitchData,
      steamData: steamData
    }
  }
}

export default Portfolio
