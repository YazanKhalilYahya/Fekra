"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero({ content }) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop}></div>
      <div className={styles.rings}></div>
      <div className={styles.grid}></div>

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{ willChange: "transform, opacity" }}
        >
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <a
              href="#contact"
              className={styles.primaryBtn}
            >
              {content.primaryCta}
            </a>

            <a
              href="#services"
              className={styles.secondaryBtn}
            >
              {content.secondaryCta}
            </a>
          </div>

          <div className={styles.stats}>
            {content.stats.map((item) => (
              <div
                key={item.label}
                className={styles.statCard}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className={styles.visualFrame}>
            <div className={styles.visualTop}></div>
            <div className={styles.visualCardA}></div>
            <div className={styles.visualCardB}></div>
            <div className={styles.visualCardC}></div>
            <div className={styles.orbit}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
