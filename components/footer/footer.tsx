import Link from "next/link";
import styles from "./footer.module.css"
import { FaArrowLeft } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className={styles.footer}>
        <Link href="/"><a>
          Footer
        </a></Link>
    </footer>
  </>
);

export default Footer
