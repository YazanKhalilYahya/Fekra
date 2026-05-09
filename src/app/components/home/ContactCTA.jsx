"use client";

import { motion } from "framer-motion";
import styles from "./Section.module.css";

export default function ContactCTA({ content, locale }) {
  return (
    <motion.section
      key={`contact-${locale}`}
      id="contact"
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.contactBox}>
        <h2>{content.title}</h2>
        <p>{content.text}</p>

        <div className={styles.contactActions}>
          <motion.a
            href="mailto:hello@fekra.dev"
            className={styles.primaryBtn}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {content.primary}
          </motion.a>

          <motion.a
            href="mailto:hello@fekra.dev?subject=Project%20Inquiry"
            className={styles.secondaryBtn}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {content.secondary}
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
