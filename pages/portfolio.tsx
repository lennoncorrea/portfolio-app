import Head from 'next/head';
import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import NavbarApp from '../src/components/navbar/NavbarApp';
import Introduce from '../src/components/introduce/introduce';
import About from '../src/components/about/about';
import More from '../src/components/more/more'
import { Skills } from '../src/models/interfaces/skills';
import { TwitchUserData } from '../src/models/interfaces/twitch';

import { FaGit } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import styles from "../styles/portfolio.module.css"
import { SteamUserData } from '../src/models/interfaces/steam';
import { twitchService } from '../src/services/twitch';
import { steamService } from '../src/services/steam';


const pageTitle: string = "Portfolio";
const brand: object = <FaGit />;
const navItems: string[] = ["Home", "About", "More"];
const skills: Skills = {
  "CSharp": 50,
  "Java": 50,
  "Angular": 50,
  "React": 75
};

const Portfolio: ({ twitchData, steamData }: { twitchData: TwitchUserData; steamData: SteamUserData; }) => JSX.Element =
  ({ twitchData, steamData }: { twitchData: TwitchUserData, steamData: SteamUserData }) => {
    const [homeState, setHomeState] = useState(true);
    const [aboutState, setAboutState] = useState(false);
    const [moreState, setMoreState] = useState(false);
    const callback = (item: string) => {
      if (item === "Home") {
        setHomeState(true);
        setAboutState(false);
        setMoreState(false);
        return;
      }
      if (item === "About") {
        setAboutState(true);
        setMoreState(false);
        setHomeState(false);
        return;
      }
      if (item === "More") {
        setMoreState(true);
        setAboutState(false);
        setHomeState(false);
        return;
      }
    }
    const showComponent: (state: boolean, component: JSX.Element) => JSX.Element | null = (state: boolean, component: JSX.Element) => {
      if (!homeState && state) {
        return component;
      }
      return null;
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
              <Col className={homeState ? "centralizeY" : `${styles.responsiveHandle + " centralizeY"}`}>
                <Introduce />
              </Col>
              <>
                {showComponent(aboutState, <About skills={skills} />)}
                {showComponent(moreState, <More twitchData={twitchData} steamData={steamData} />)}
              </>
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
