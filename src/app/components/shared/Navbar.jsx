"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Navbar.module.css";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};

export default function Navbar({ locale, setLocale, content }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.logo}>
          <span className={styles.logoMark}></span>
          <span className={styles.logoText}>
            {locale === "ar" ? "فكرة" : "Fekra"}
          </span>
        </div>

        <nav
          className={styles.nav}
          aria-label="Primary navigation"
        >
          <a href="#services">{content.services}</a>
          <a href="#work">{content.work}</a>
          <a href="#process">{content.process}</a>
          <a href="#contact">{content.contact}</a>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.langBtn}
            onClick={() => {
              setLocale(locale === "ar" ? "en" : "ar");
              setMenuOpen(false);
            }}
          >
            {content.language}
          </button>

          <a
            href="#contact"
            className={styles.ctaBtn}
          >
            {content.cta}
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`${styles.menuLine} ${
                menuOpen ? styles.lineTopActive : ""
              }`}
            ></span>
            <span
              className={`${styles.menuLine} ${
                menuOpen ? styles.lineMiddleActive : ""
              }`}
            ></span>
            <span
              className={`${styles.menuLine} ${
                menuOpen ? styles.lineBottomActive : ""
              }`}
            ></span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.mobileMenuInner}>
              <a
                href="#services"
                onClick={handleCloseMenu}
              >
                {content.services}
              </a>
              <a
                href="#work"
                onClick={handleCloseMenu}
              >
                {content.work}
              </a>
              <a
                href="#process"
                onClick={handleCloseMenu}
              >
                {content.process}
              </a>
              <a
                href="#contact"
                onClick={handleCloseMenu}
              >
                {content.contact}
              </a>

              <div className={styles.mobileActions}>
                <button
                  type="button"
                  className={styles.langBtn}
                  onClick={() => {
                    setLocale(locale === "ar" ? "en" : "ar");
                    setMenuOpen(false);
                  }}
                >
                  {content.language}
                </button>

                <a
                  href="#contact"
                  className={styles.ctaBtn}
                  onClick={handleCloseMenu}
                >
                  {content.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
