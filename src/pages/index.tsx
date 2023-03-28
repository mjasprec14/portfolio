import Head from 'next/head'
import { Inter } from 'next/font/google';
import Header from "../../components/Header"

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

      {/* ABOUT */}

      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
    </>
  )
}
