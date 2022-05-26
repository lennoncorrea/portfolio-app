import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './navbar.module.css';


const NavbarApp = ({ brand, items, callback }: { brand: any, items: string[], callback: Function }) => {
  return (
    <Navbar expand="lg" variant="light" className={styles.navbarApp}>
      <Container>
        <Navbar.Brand href="/" className={styles.navBrand}>{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto" >
            {items.map(item => (
              <Nav.Link key={item} className={styles.item}
                onClick={() => { callback(item) }} >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarApp
