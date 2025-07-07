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
  height: 100%;
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
    width: 48%;
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
              <PageTitle as="h2" $page="about">
                ABOUT
              </PageTitle>

              <StyledContainer>
                <StyledParagraphContainer>
                  <PageTitle as="h3" $fontSize="clamp(2rem, 2vw, 3rem)">
                    I&apos;m Marina. I build with purpose, polish with passion,
                    and always keep the cat in the loop.
                  </PageTitle>
                  <Paragraph $fontSize="clamp(1.5rem, 1.3vw, 2.5rem)">
                    With a background in QA, a passion for thoughtful design,
                    and a love for building things that are both functional and
                    beautiful, I bring detail and intention into every line of
                    code.
                  </Paragraph>
                  <Paragraph $fontSize="clamp(1.5rem, 1.3vw, 2.5rem)">
                    I started out in manual testing, where I sharpened my eye
                    for detail, learned how users think, and collaborated
                    closely with developers to ship better products. But
                    somewhere along the way, I realized I didn&apos;t just want
                    to test things — I wanted to build them.
                  </Paragraph>
                  <Paragraph $fontSize="clamp(1.5rem, 1.3vw, 2.5rem)">
                    That led me to frontend and full-stack development. Now, I
                    craft responsive web experiences using technologies like
                    React, TypeScript, Node.js, and MongoDB. I enjoy making
                    clean, user-friendly interfaces and adding the little
                    touches that make a site feel alive.
                  </Paragraph>
                  <Paragraph $fontSize="clamp(1.5rem, 1.3vw, 2.5rem)">
                    I believe design and logic go hand-in-hand, and I&apos;m
                    always exploring ways to bring creative energy into code. My
                    portfolio is a space where I explore, experiment, and push
                    myself creatively — just how I like it.
                  </Paragraph>
                  <Paragraph $fontSize="clamp(1.5rem, 1.3vw, 2.5rem)">
                    When I&apos;m not coding, you&apos;ll probably find me
                    reading, dancing, or hanging out with my cat (who has very
                    strong opinions about my color palettes).
                  </Paragraph>
                  <Paragraph $fontSize="clamp(1.5rem, 1.3vw, 2.5rem)">
                    Thanks for stopping by.
                  </Paragraph>
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
