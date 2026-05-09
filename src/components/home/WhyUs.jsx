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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyUs({ content, locale }) {
  return (
    <motion.section
      key={`whyus-${locale}`}
      className={styles.section}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className={styles.whyPanel}
        variants={itemVariants}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>{content.title}</span>
        </div>

        <motion.div
          className={styles.whyList}
          variants={sectionVariants}
        >
          {content.items.map((item) => (
            <motion.div
              key={item}
              className={styles.whyItem}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <span className={styles.dot}></span>
              <p>{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
