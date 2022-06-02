import Link from "next/link";
import styles from "./footer.module.css"

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
