import { motion } from 'framer-motion';
import { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import FormApp from '../form/FormApp';
import ModalApp from '../modal/ModalApp';
import styles from './Introduce.module.css';


const Introduce = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={styles.introduce}>
        <Col>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} >
            <p className={styles.salute}>{"Hi, i'm"}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} >
            <h2>{"Lennon."}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} >
            <p className={styles.occupation}>Full Stack Developer</p>
            <p className={styles.occupation}>Computer Science Student</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} >
            <div className={styles.center}>
              <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} >
                <Button variant="outline-primary" onClick={() => setModalShow(true)} className="px-4">Hit me up</Button>
              </motion.div>
            </div>
          </motion.div>
        </Col>
      </div>
      <ModalApp title="Contact Me" body={<FormApp onHide={() => setModalShow(false)} />} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
};

export default Introduce
