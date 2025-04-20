"use client";

import { styled } from "styled-components";
import PageContainer from "../ui/PageContainer";
import Paragraph from "../ui/Paragraph";
import PageTitle from "../ui/PageTitle";

interface StyledImageContainerProps {
  $display?: string;
}

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 3rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledTextCon = styled.div`
  @media (min-width: 1024px) {
    width: 45%;
  }
`;

const StyledParagraphContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: max-content;
    min-height: 900px;
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
    right: 0;
    bottom: 0;
  }
`;

const StyledImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 6rem;
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
  height: 100vh;
  overflow-y: auto;
  will-change: transform;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
  /* @media (min-width: 1024px) {
    height: 100vh;
    overflow-y: auto;
    will-change: transform;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  } */
`;

function AboutPage() {
  return (
    <PageContainer
      height="100%"
      padding="3rem 3rem 0 3rem"
      maxHeight="500px"
      minHeight="480px"
    >
      <StyledAboutPage>
        <StyledListWrapper>
          <StyledTextCon>
            <PageTitle as="h2" $page="about">
              ABOUT
            </PageTitle>

            <StyledContainer>
              {/* <StyledListWrapper> */}
              <StyledParagraphContainer>
                <PageTitle as="h3">
                  I&apos;m Marina. I build with purpose, polish with passion,
                  and always keep the cat in the loop.
                </PageTitle>
                <Paragraph>
                  With a background in QA, a passion for thoughtful design, and
                  a love for building things that are both functional and
                  beautiful, I bring detail and intention into every line of
                  code.
                </Paragraph>
                <Paragraph>
                  I started out in manual testing, where I sharpened my eye for
                  detail, learned how users think, and collaborated closely with
                  developers to ship better products. But somewhere along the
                  way, I realized I didn&apos;t just want to test things — I
                  wanted to build them.
                </Paragraph>
                <Paragraph>
                  That led me to frontend and full-stack development. Now, I
                  craft responsive web experiences using technologies like
                  React, TypeScript, Node.js, and MongoDB. I enjoy making clean,
                  user-friendly interfaces and adding the little touches that
                  make a site feel alive.
                </Paragraph>
                <Paragraph>
                  I believe design and logic go hand-in-hand, and I&apos;m
                  always exploring ways to bring creative energy into code. My
                  portfolio is a space where I explore, experiment, and push
                  myself creatively — just how I like it.
                </Paragraph>
                <Paragraph>
                  When I&apos;m not coding, you&apos;ll probably find me
                  reading, dancing, or hanging out with my cat (who has very
                  strong opinions about my color palettes).
                </Paragraph>
                <Paragraph>Thanks for stopping by.</Paragraph>
              </StyledParagraphContainer>
              {/* </StyledListWrapper> */}
            </StyledContainer>
          </StyledTextCon>
          <StyledImageContainer $display="smallScreen">
            <StyledImage src="/portfolio.png" alt="portfolio-image" />
          </StyledImageContainer>
        </StyledListWrapper>
        <StyledImageContainer $display="bigScreen">
          <StyledImage src="/portfolio.png" alt="portfolio-image" />
        </StyledImageContainer>
      </StyledAboutPage>
    </PageContainer>
  );
}

export default AboutPage;
