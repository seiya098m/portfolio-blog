import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "@/styles/globals.css";
import { DefaultSeo, NextSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { Noto_Sans_JP } from "next/font/google";

const noto_jp = Noto_Sans_JP({
  // weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div
        className={`${noto_jp.variable} bg-bg-color font-sans  tracking-normal text-font-color`}
      >
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
