import "./globals.css";
import { DM_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata = {
  title: {
    default: "Fekra — Digital Agency for Modern Brands",
    template: "%s | Fekra",
  },
  description:
    "Fekra builds bold digital experiences, premium websites, e-commerce platforms, and business solutions for modern brands and companies.",
  metadataBase: new URL("https://fekra.example"),
  openGraph: {
    title: "Fekra — Digital Agency for Modern Brands",
    description:
      "Fekra builds bold digital experiences, premium websites, e-commerce platforms, and business solutions for modern brands and companies.",
    url: "https://fekra.example",
    siteName: "Fekra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fekra — Digital Agency for Modern Brands",
    description:
      "Fekra builds bold digital experiences, premium websites, e-commerce platforms, and business solutions for modern brands and companies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="skipLink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
