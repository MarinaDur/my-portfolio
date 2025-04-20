"use client";

import { styled } from "styled-components";
import PageContainer from "../ui/PageContainer";
import { useEffect } from "react";
import PageTitle from "../ui/PageTitle";
import Paragraph from "../ui/Paragraph";
import ProjectsLink from "../components/ProjectsLink";

const StyledHeader = styled.div`
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const StyledCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-end;
    width: 55%;
    position: absolute;
    right: 2rem;
    height: 100%;
    bottom: 0;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledListWrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  will-change: transform;
  /* padding: 7rem 0 7rem 0; */
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4rem;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    height: 100vh;
    overflow-y: scroll;
    will-change: transform;
    padding: 7rem 0 7rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
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
    <PageContainer
      gap="5rem"
      height="100%"
      overflow="hidden"
      heightBSize="calc(100vh - 2rem)"
      maxHeight="500px"
      minHeight="480px"
      alignItems="flex-end"
    >
      <StyledHeader>
        <PageTitle as="h2">PROJECTS</PageTitle>
        <Paragraph>Tech stack used across projects:</Paragraph>
        <Paragraph>
          React, TypeScript, Styled Components, Node.js, Express, MongoDB, and
          Mongoose
        </Paragraph>
      </StyledHeader>
      <StyledCon>
        <StyledListWrapper>
          <StyledList

          // animate={{ y: "-100%" }}
          // transition={{
          //   duration: 15,
          //   ease: "linear",
          //   repeat: Infinity,
          // }}
          >
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
        </StyledListWrapper>
      </StyledCon>
    </PageContainer>
  );
}

export default ProjectsPage;
