"use client";

import { useEffect } from "react";
import HomePageHeader from "./components/HomePageHeader";
import NavigationHomePage from "./components/NavigationHomePage";
import PageBg from "./ui/PageBg";
import PageContainer from "./ui/PageContainer";
import { animateOut } from "./utils/aminateOut";

export default function Home() {
  useEffect(() => {
    animateOut();
  }, []);
  return (
    <>
      <PageBg bgColor="var(--light)" />
      <PageContainer>
        <HomePageHeader />
        <NavigationHomePage />
      </PageContainer>
    </>
  );
}
