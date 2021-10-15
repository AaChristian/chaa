import { AboutMe } from "@/components/AboutMe/AboutMe";
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
        <meta name="description" content="Generated by create next app" />
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
