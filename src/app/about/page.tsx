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
                  <PageTitle as="h3">
                    Hi, I&apos;m Marina — a self-taught developer who enjoys
                    building clean, user-friendly interfaces.
                  </PageTitle>
                  <Paragraph>
                    I started out in QA, where I focused on catching bugs,
                    understanding how systems work, and working closely with
                    developers to improve the product. That experience taught me
                    how to pay attention to the small details, think through
                    problems logically, and work well as part of a team.
                  </Paragraph>
                  <Paragraph>
                    Over time, I realized I wanted to be the one building the
                    things I was testing. So I started learning frontend
                    development on my own, creating small projects and gradually
                    taking on more complex ones. Now I build full-stack projects
                    using tools like React, TypeScript, Node.js, and MongoDB.
                    I&apos;m also comfortable working with Git and GitHub, and
                    I&apos;m continuing to grow my skills as I take on more
                    backend work.
                  </Paragraph>
                  <Paragraph>
                    I bring a strong work ethic, an eye for detail, and a real
                    focus on user experience. I&apos;m always learning — whether
                    that&apos;s diving deeper into backend development or
                    finding new ways to make interfaces more intuitive and
                    enjoyable to use.
                  </Paragraph>
                  <Paragraph>
                    When I&apos;m not coding, I&apos;m probably reading,
                    dancing, or spending time with my cat (who always has strong
                    opinions about my color choices).
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
