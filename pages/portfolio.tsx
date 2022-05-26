import Head from 'next/head';
import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';

import NavbarApp from '../components/navbar/navbar';
import Introduce from '../components/introduce/introduce';
import Footer from '../components/footer/footer';
import About from '../components/about/about';
import More from '../components/more/more'
import { UserData } from './api';
import { handler } from './api';

import { FaGit } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import styles from "../styles/portfolio.module.css"

const pageTitle: string = "Portfolio";
const brand: object = <FaGit />;
const navItems: string[] = ["Home", "About", "More"];
const skills: object = {
  "C#": "50",
  "Java": "50",
  "Angular": "50",
  "React": "75"
};

const Portfolio: NextPage<UserData> = ({ user }: any) => {
  const twitchUser: UserData = user;
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
              <Col className="centralizeY block" xs={7}>
                <div className={styles.divButton}>
                  {aboutState ? <About skills={skills} /> : null}
                  {moreState ? <More data={twitchUser} /> : null}
                </div>
              </Col> :
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
  const data: UserData = await handler();
  return {
    props: {
      user: data
    }
  }
}

export default Portfolio
