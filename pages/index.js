import Head from "next/head";
import styles from "../styles/Home.module.css";
import Page from "@/components/page";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";

import Customer from "@/components/home/customer";
import Product from "@/components/home/product";
import Service from "@/components/home/service";
import TinTuc from "@/components/home/tintuc";

import { ORG_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <Page title={`Next.js by ${ORG_NAME} - The React Framework`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      
      <About />

      <Customer />
      
      <Product />

      <Service />
      
      <TinTuc />
    </Page>
  );
}
