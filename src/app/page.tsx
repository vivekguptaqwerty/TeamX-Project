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
