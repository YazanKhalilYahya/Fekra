"use client";

import { motion } from "framer-motion";
import styles from "./Section.module.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Process({ content, locale }) {
  return (
    <motion.section
      key={`process-${locale}`}
      id="process"
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.kicker}>{content.title}</span>
      </div>

      <motion.div
        className={styles.timeline}
        variants={sectionVariants}
      >
        {content.steps.map((step, index) => (
          <motion.article
            key={step.title}
            className={styles.timelineItem}
            variants={itemVariants}
          >
            <span className={styles.stepIndex}>0{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
