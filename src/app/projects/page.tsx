"use client";

import { styled } from "styled-components";
import PageContainer from "../ui/PageContainer";
import { useEffect } from "react";

const Styledpage = styled.div``;

function ProjectsPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--page-bg", "#282727");
    document.documentElement.style.setProperty("--page-text-color", "#e9e2e2");

    return () => {
      document.documentElement.style.removeProperty("--page-bg");
      document.documentElement.style.removeProperty("--page-text-color");
    };
  }, []);
  return (
    <PageContainer>
      <Styledpage></Styledpage>
    </PageContainer>
  );
}

export default ProjectsPage;
