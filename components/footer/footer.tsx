import Link from "next/link";
import styles from "./footer.module.css"
import { FaArrowLeft } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className={styles.footer}>
        <Link href="/"><a>
          <FaArrowLeft />
        </a></Link>
    </footer>
  </>
);

export default Footer
