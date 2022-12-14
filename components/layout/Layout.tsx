//* === Components === *//
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

//* === Styles & Utils === *//
import styles from "./Layout.module.scss";

import { ReactNode } from "react";
interface Props {
  title: string;
  description: string;
  keywords: string;
  children: ReactNode;
  home: boolean;
}

export default function Layout({
  title,
  description,
  keywords,
  children,
  home,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Header home={home} />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Cristian Sfetcu | Full Stack Web Developer",
  description:
    "Business website for Cristian Sfetcu | Full Stack Web Developer",
  keywords: "portfolio, full stack, web developer",
};
