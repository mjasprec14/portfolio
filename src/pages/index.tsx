import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MJ Asprec Portfolio</title>
        <meta name="description" content="MJ Asprec Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      
      <h1 className="p-10 text-red-500">MJ Asprec!</h1>
    </>
  )
}
