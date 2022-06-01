import Head from 'next/head';
import React, { FunctionComponent, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';

import NavbarApp from '../components/navbar/navbar';
import Introduce from '../components/introduce/introduce';
import Footer from '../components/footer/footer';
import About from '../components/about/about';
import More from '../components/more/more'
import { TwitchUserData } from '../models/twitch';

import { FaGit } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import styles from "../styles/portfolio.module.css"
import { steamUserData, twitchUserData } from './api';
import { SteamUserData } from '../models/steam';

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
              {!homeState ?
                <>
                  {aboutState ? <About skills={skills} /> : null}
                  {moreState ? <More twitchData={twitchData} steamData={steamData} /> : null}
                </> :
                null
              }
            </Row>
            <Footer />
          </Container>
        </main>
      </>
    )
  };

export const getStaticProps: GetStaticProps = async () => {
  const twitchData: TwitchUserData = await twitchUserData();
  const steamData: SteamUserData = await steamUserData();
  return {
    props: {
      twitchData: twitchData,
      steamData: steamData
    }
  }
}

export default Portfolio
