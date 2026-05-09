import styles from "./Footer.module.css";

const socialLinks = {
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  twitter: "https://x.com",
};

export default function Footer({ content, locale }) {
  const labels =
    locale === "ar"
      ? {
          follow: "تابعنا على السوشال ميديا",
          rights: "جميع الحقوق محفوظة.",
          instagram: "إنستغرام",
          youtube: "يوتيوب",
          twitter: "إكس",
        }
      : {
          follow: "Follow us on social media",
          rights: "All rights reserved.",
          instagram: "Instagram",
          youtube: "YouTube",
          twitter: "Twitter",
        };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <h3>{content.brand}</h3>
            <p>{content.text}</p>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span>{content.emailLabel}</span>
              <a href={`mailto:${content.email}`}> {content.email}</a>
            </div>

            <div className={styles.infoItem}>
              <span>{content.locationLabel}</span>
              <p>{content.location}</p>
            </div>
          </div>

          <div className={styles.socialBlock}>
            <h4>{labels.follow}</h4>

            <div className={styles.socialLinks}>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={labels.instagram}
                title={labels.instagram}
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={labels.youtube}
                title={labels.youtube}
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M21.6 7.2a2.98 2.98 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A2.98 2.98 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 2.98 2.98 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a2.98 2.98 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={labels.twitter}
                title={labels.twitter}
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M18.9 2H22l-6.77 7.74L23.2 22h-6.27l-4.9-7.35L5.6 22H2.5l7.23-8.26L1.8 2h6.36l4.43 6.68L18.9 2Zm-1.1 18h1.74L7.17 3.9H5.3L17.8 20Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © 2026 {content.brand}. {labels.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
