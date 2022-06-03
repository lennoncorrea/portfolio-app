import Link from "next/link";
import Image from 'next/image';
import styles from "./footer.module.css"

const Footer: () => JSX.Element = () => (
  <>
    <footer className={styles.footer}>
      <Link href="https://sonarcloud.io/summary/overall?id=lennoncorrea_portfolio-app">
        <Image src="https://sonarcloud.io/images/project_badges/sonarcloud-white.svg" className={styles.sonarCloud} alt="sonar image"></Image>
      </Link>
    </footer>
  </>
);

export default Footer
