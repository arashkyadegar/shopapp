import HeaderComponent from "@/components/shared/navbar/header";
import MobileNavbarComponent from "@/components/shared/navbar/mobile-navbar";
import PcNavbarComponent from "@/components/shared/navbar/pc-navbar";
import SearchNavbarComponent from "@/components/shared/navbar/search-navbar";
import Head from "next/head";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeaderComponent />
      <SearchNavbarComponent />
      <MobileNavbarComponent />
      <PcNavbarComponent />
      <div className="w-full p-1">{children}</div>
    </>
  );
}
