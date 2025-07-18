"use client";

import { useEffect } from "react";
// import HomePageHeader from "./components/HomePageHeader";
import NavigationHomePage from "./components/NavigationHomePage";
import PageBg from "./ui/PageBg";
// import PageContainer from "./ui/PageContainer";
import { animateOut } from "./frontUtils/aminateOut";

export default function Home() {
  useEffect(() => {
    animateOut();
  }, []);
  console.log(window.innerWidth);
  return (
    <>
      <PageBg bgColor="var(--light)" />
      {/* <PageContainer gap="4rem" justifyContent="center"> */}
      {/* <HomePageHeader /> */}
      <NavigationHomePage />
      {/* </PageContainer> */}
    </>
  );
}
