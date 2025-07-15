"use client";

import { styled } from "styled-components";
import PageTitle from "../ui/PageTitle";
import Paragraph from "../ui/Paragraph";
import ProjectsLink from "../components/ProjectsLink";
import PageBg from "../ui/PageBg";
import { useEffect } from "react";
import { animateOut } from "../frontUtils/aminateOut";
import FadeScrollWrapper from "../ui/FadeScrollWrapper";

const StyledHeader = styled.div`
  color: var(--light);
  padding: 8rem 0 3rem 0;
  width: 90%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: auto;
    padding: 0 0 5rem 8vw;
  }

  @media (min-width: 2050px) {
    gap: 1.5rem;
  }
`;

const StylesParagraph = styled.div`
  @media (min-width: 1024px) {
    width: 38ch;
  }
  @media (min-width: 1650px) {
    width: 50ch;
  }
  @media (min-width: 2000px) {
    width: 70ch;
  }
`;

const StyledCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  align-items: flex-start;

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
  color: var(--light);
  align-items: flex-start;
`;

const StyledListWrapper = styled.div`
  /* height: 100vh; */
  overflow-y: scroll;
  will-change: transform;
  /* padding: 7rem 0 7rem 0; */
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 4rem;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: min-content;
  }
  @media (min-width: 1024px) {
    height: 100vh;
    overflow-y: scroll;
    will-change: transform;
    padding: 10rem 5vw 10rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (min-width: 2500px) {
    padding: 10rem 5vw 10rem 0;
  }
`;

function ProjectsPage() {
  useEffect(() => {
    animateOut();
  }, []);
  return (
    <>
      <PageBg bgColor="var(--dark)" />
      {/* <PageContainer
        gap="5rem"
        height="100%"
        overflow="hidden"
        heightBSize="calc(100vh - 2rem)"
        alignItems="flex-end"
        bg="var(--dark)"
      > */}
      <StyledHeader>
        <PageTitle as="h2" $color="var(--light)" $page="projects">
          PROJECTS
        </PageTitle>
        <StylesParagraph>
          <Paragraph $page="projects">
            Tech stack used across projects:
          </Paragraph>
          <Paragraph $page="projects">
            React, TypeScript, Styled Components, Node.js, Express, MongoDB, and
            Mongoose
          </Paragraph>
        </StylesParagraph>
      </StyledHeader>
      <StyledCon>
        <FadeScrollWrapper>
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
                githubLink="https://github.com/MarinaDur/markdown-editor.git"
                liveLink="https://markdowneditorfullstack.netlify.app/"
              ></ProjectsLink>
              <ProjectsLink
                projectName="Tic Tac Toe Game"
                githubLink="https://github.com/MarinaDur/tic-tac-toe.git"
                liveLink="https://tic-tac-toe-game-with-cpu.netlify.app/"
              ></ProjectsLink>
              <ProjectsLink
                projectName="IP Address Tracker"
                githubLink="https://github.com/MarinaDur/ip-address-tracker.git"
                liveLink="https://ip-address-tracker-master-react.netlify.app/"
              ></ProjectsLink>
              <ProjectsLink
                projectName="FrontEnd Quiz"
                githubLink="https://github.com/MarinaDur/frontend-quiz.git"
                liveLink="https://frontend-quiz-app-reactjs.netlify.app/"
              ></ProjectsLink>
              <ProjectsLink
                projectName="Todo App"
                githubLink="https://github.com/MarinaDur/todo-app.git"
                liveLink="https://todo-app-main-react-js.netlify.app/"
              ></ProjectsLink>
              <ProjectsLink
                projectName="Dine restaurant"
                githubLink="https://github.com/MarinaDur/dine-restaurant.git"
                liveLink="https://dine-restaurant-reactjs.netlify.app/"
              ></ProjectsLink>
            </StyledList>
          </StyledListWrapper>
        </FadeScrollWrapper>
      </StyledCon>
      {/* </PageContainer> */}
    </>
  );
}

export default ProjectsPage;
