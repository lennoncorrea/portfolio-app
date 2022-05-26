import { motion } from "framer-motion";
import { Col, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";
import styles from "./about.module.css"

const About = ({ skills }: { skills: object }) => {
  
  return (
    <>
      <Row>
        <Col xs={12}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} >
            <div className={styles.education}>
              <h2 className={styles.title}>Education</h2>
              <p><a href="https://www.uerj.br/" className={styles.item}>UERJ</a></p>
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3 }} >
                <ProgressBar animated now={100} key={1} />
              </motion.div>
            </div>

          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} >
            <div className={styles.skills}>
              <h3 className={styles.title}>Skills</h3>
              {Object.keys(skills).map((item, index) => (
                <div className={styles.item} key={"skill_div_item_"+index}>
                  <code key={"skill_code_item_"+index}>{item}</code>
                  <motion.div initial={{ width: 0 }} animate={{ width: Object.values(skills)[index] + "%" }} transition={{ duration: 2 }} key={"skill_motion_item_"+index}>
                    <ProgressBar animated now={100} key={"skill_progress_item_"+index} />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </Col>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} >
          <div className={styles.experience}>
            <h2 className={styles.title}>Experience</h2>
            <p className={styles.item}>- Currently in a internship at <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Three months by now</Tooltip>}><a href="https://www.bllog.com.br/">Bllog</a></OverlayTrigger></p>
          </div>
        </motion.div>
      </Row>
    </>
  )
};

export default About