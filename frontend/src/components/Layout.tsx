import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Checkpoint</title>
        <meta
          name="description"
          content="Une magnifique carte pour sauver la planète et les dauphins."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <header id="header">
          <h1>Checkpoint : Frontend</h1>
          <h2>Countries</h2>
        </header>
        {children}
      </main>
    </>
  );
}
