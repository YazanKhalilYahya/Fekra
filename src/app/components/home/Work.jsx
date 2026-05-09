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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Work({ content, locale }) {
  return (
    <motion.section
      key={`work-${locale}`}
      id="work"
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.kicker}>{content.title}</span>
        <p>{content.intro}</p>
      </div>

      <motion.div
        className={styles.gridThree}
        variants={sectionVariants}
      >
        {content.items.map((item) => (
          <motion.article
            key={item.title}
            className={`${styles.card} ${styles.workCard}`}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={styles.workGlow}></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
