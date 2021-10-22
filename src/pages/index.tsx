import { AboutMe } from "@/components/AboutMe";
import { BaseLayout } from "@/components/BaseLayout";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Technologies } from "@/components/Technologies";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Christian Aashamar</title>
        <meta name="title" content="Christian Aashamar" />
        <meta
          name="description"
          content="Christian Aashamar is a software engineer"
        />
        <meta name="keywords" content="portfolio" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutMe />
      <Technologies />
      <Experience />
      <Education />
      <Contact />
    </BaseLayout>
  );
};

export default Home;
