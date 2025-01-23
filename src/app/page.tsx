
import React from "react";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>TeamX Project</title>
        <meta
          name="description"
          content="This is the home page of the TeamX Project."
        />
      </Head>
      <div className="bg-[#0E0E0E] w-100% min-h-screen">hello</div>
    </>
  );
};

export default HomePage;
=========
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the loading page
    router.push("/Loader");
  }, [router]);

  return null; // No UI since this is just for redirection
}

