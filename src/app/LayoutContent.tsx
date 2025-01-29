"use client";

import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Loader from "@/components/Loader/Loader";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}