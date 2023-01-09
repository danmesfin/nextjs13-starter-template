import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Starter Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          className="flex flex-col m-4 justify-center bg-transparent 
        opacity-80 bg-gradient-to-br from-black via-red-500 to-black text-xl rounded-sm px-8"
        >
          <div className="flex">This starter template is made with ...</div>
          <li className="border-spacing-1 shadow-md rounded-sm p-2">
            NextJs 13+
          </li>
          <li className="border-spacing-1 shadow-md rounded-sm p-2">
            TypeScript: difine types, minimizing chance of error
          </li>
          <li className="border-spacing-1 shadow-md rounded-sm p-2">
            Prettier: format your code on save
          </li>
          <li className="border-spacing-1 shadow-md rounded-sm p-2">
            Eslint: write your code to the standard -&gt; default NextJS, NextJS
            Core, Tailwind CSS and Airbnb configuration
          </li>
          <li className="border-spacing-1 shadow-md rounded-sm p-2">
            Husky: run all tests on git commit
          </li>
        </div>
      </main>
    </>
  );
}
