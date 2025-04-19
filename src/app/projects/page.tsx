"use client";

import { styled } from "styled-components";
import PageContainer from "../ui/PageContainer";
import { useEffect } from "react";
import PageTitle from "../ui/PageTitle";
import Paragraph from "../ui/Paragraph";
import ProjectsLink from "../components/ProjectsLink";

const StyledHeader = styled.div``;

const StyledCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function ProjectsPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--light", "#282727");
    document.documentElement.style.setProperty("--dark", "#e9e2e2");

    return () => {
      document.documentElement.style.removeProperty("--light");
      document.documentElement.style.removeProperty("--dark");
    };
  }, []);
  return (
    <PageContainer gap="5rem">
      <StyledHeader>
        <PageTitle as="h2">PROJECTS</PageTitle>
        <Paragraph>Tech stack used across projects:</Paragraph>
        <Paragraph>
          React, TypeScript, Styled Components, Node.js, Express, MongoDB, and
          Mongoose
        </Paragraph>
      </StyledHeader>
      <StyledCon>
        <StyledList>
          <ProjectsLink
            projectName="Markdown Editor"
            githubLink="/"
            liveLink="/"
          ></ProjectsLink>
          <ProjectsLink
            projectName="Tic Tac Toe Game"
            githubLink="/"
            liveLink="/"
          ></ProjectsLink>
          <ProjectsLink
            projectName="IP Address Tracker"
            githubLink="/"
            liveLink="/"
          ></ProjectsLink>
          <ProjectsLink
            projectName="FrontEnd Quiz"
            githubLink="/"
            liveLink="/"
          ></ProjectsLink>
          <ProjectsLink
            projectName="Todo App"
            githubLink="/"
            liveLink="/"
          ></ProjectsLink>
          <ProjectsLink
            projectName="Dine restaurant"
            githubLink="/"
            liveLink="/"
          ></ProjectsLink>
        </StyledList>
      </StyledCon>
    </PageContainer>
  );
}

export default ProjectsPage;
