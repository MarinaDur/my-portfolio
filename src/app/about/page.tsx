"use client";

import { styled } from "styled-components";
// import PageContainer from "../ui/PageContainer";
import Paragraph from "../ui/Paragraph";
import PageTitle from "../ui/PageTitle";
import PageBg from "../ui/PageBg";
import { useEffect } from "react";
import { animateOut } from "../frontUtils/aminateOut";
import FadeScrollWrapper from "../ui/FadeScrollWrapper";

interface StyledImageContainerProps {
  $display?: string;
}

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 90%;
  padding: 8rem 0 0 0;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10rem 0 0 8vw;
  }
`;

const StyledTextCon = styled.div`
  @media (min-width: 1024px) {
    width: 55%;
    padding-bottom: 5rem;
    position: absolute;
    top: 0;

    z-index: 99999;
  }
`;

const StyledParagraphContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: max-content;
    /* min-height: 900px; */
  }
`;

const StyledImageContainer = styled.div<StyledImageContainerProps>`
  width: 100%;
  justify-content: flex-end;
  display: ${(props) => (props.$display === "bigScreen" ? "none" : "flex")};
  @media (min-width: 1024px) {
    display: ${(props) => (props.$display === "smallScreen" ? "none" : "flex")};
    width: 20%;
    align-items: flex-end;
    position: absolute;
    right: 5rem;
    bottom: 0;
  }
`;

const StyledImage = styled.img`
  width: 150px;
  height: auto;
  @media (min-width: 1024px) {
    width: 100%;
    object-fit: contain;
    margin-bottom: 0;
  }
`;

const StyledContainer = styled.div`
  @media (min-width: 1024px) {
    /* position: absolute;
    height: 100vh; */
    /* width: 40%; */
    padding-bottom: 5rem;
  }
`;

const StyledListWrapper = styled.div`
  /* height: 100vh;
  overflow-y: auto;
  will-change: transform;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  } */
  @media (min-width: 1024px) {
    height: 100vh;
    overflow-y: auto;
    will-change: transform;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-top: 15%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 3000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0;
  }
`;

function AboutPage() {
  useEffect(() => {
    animateOut();
  }, []);

  return (
    <>
      <PageBg bgColor="var(--light)" />
      {/* <PageContainer height="100%"> */}
      <StyledAboutPage>
        {/* <StyledListWrapper> */}
        <StyledTextCon>
          <FadeScrollWrapper>
            <StyledListWrapper>
              <PageTitle as="h1" $page="about">
                ABOUT
              </PageTitle>

              <StyledContainer>
                <StyledParagraphContainer>
                  <PageTitle as="h3" $fontSize="clamp(2rem, 2vw, 3rem)">
                    Hi, I&apos;m Marina — a self-taught developer who enjoys
                    building clean, user-friendly interfaces.
                  </PageTitle>
                  <Paragraph>
                    I started out in QA, where I tested both web and mobile
                    apps, worked closely with developers, and got used to
                    thinking through flows, edge cases, and real user behavior.
                    I learned how to catch small issues, understand how systems
                    connect, and communicate clearly within a team.
                  </Paragraph>
                  <Paragraph>
                    Over time, I realized I didn&apos;t just want to test
                    features — I wanted to help build them. I started learning
                    frontend development on my own and gradually took on
                    development work at my job. I began building responsive
                    pages with HTML, CSS, and Elementor, and writing JavaScript
                    and some PHP to fix bugs and add functionality to our
                    WooCommerce site.
                  </Paragraph>
                  <Paragraph>
                    Outside of work, I&apos;ve built projects to strengthen my
                    skills using tools like React, TypeScript, Node.js, MongoDB,
                    and Styled Components. These projects helped me understand
                    how to structure apps, connect frontend and backend, and
                    improve the overall user experience.
                  </Paragraph>
                  <Paragraph>
                    I care about the small details, especially when it comes to
                    how things work and feel for real users. I enjoy solving
                    problems and figuring out why something isn&apos;t working
                    as expected — whether it&apos;s a bug, a UI issue, or
                    something in the data.
                  </Paragraph>
                  <Paragraph>
                    When I&apos;m not coding, I&apos;m usually reading, dancing,
                    or hanging out with my cat (who always has something to say
                    about my design choices).
                  </Paragraph>
                  <Paragraph>Thanks for stopping by.</Paragraph>
                </StyledParagraphContainer>
                {/* </StyledListWrapper> */}
              </StyledContainer>
            </StyledListWrapper>
          </FadeScrollWrapper>
        </StyledTextCon>

        <StyledImageContainer>
          <StyledImage src="/portfolio.png" alt="portfolio-image" />
        </StyledImageContainer>
        {/* <StyledImageContainer $display="bigScreen">
          <StyledImage src="/portfolio.png" alt="portfolio-image" />
          </StyledImageContainer> */}
      </StyledAboutPage>
      {/* </PageContainer> */}
    </>
  );
}

export default AboutPage;
