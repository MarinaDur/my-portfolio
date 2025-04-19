"use client";

import HomePageHeader from "./components/HomePageHeader";
import NavigationHomePage from "./components/NavigationHomePage";
import PageContainer from "./ui/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <HomePageHeader />
      <NavigationHomePage />
    </PageContainer>
  );
}
