import Head from "next/head";
import styles from "../styles/Home.module.css";
import Page from "@/components/page";
import Hero from '@/components/hero';

import { ORG_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <Page title={`Next.js by ${ORG_NAME} - The React Framework`}>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Hero />

     
      </div>
    </Page>
  );
}
