import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "@/styles/globals.css";

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
        className={`${noto_jp.variable} bg-bg-color text-font-color  font-sans tracking-normal`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}