import Head from 'next/head';
import {Header, Hero} from "@/components";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MJ Asprec Portfolio</title>
        <meta name="description" content="MJ Asprec Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      
      <Header />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT */}

      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </>
  )
}
