"use client";

import { styled } from "styled-components";
import PageContainer from "../ui/PageContainer";
import Paragraph from "../ui/Paragraph";
import PageTitle from "../ui/PageTitle";

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledParagraphContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledImage = styled.img`
  width: 150px;
  height: auto;
`;

function AboutPage() {
  return (
    <PageContainer>
      <StyledAboutPage>
        <PageTitle as="h2">ABOUT</PageTitle>
        <StyledParagraphContainer>
          <Paragraph>
            Hey, I&apos;m Marina — a developer with a background in QA, a
            passion for thoughtful design, and a love for building things that
            are both functional and beautiful.
          </Paragraph>
          <Paragraph>
            I started out in manual testing, where I sharpened my eye for
            detail, learned how users think, and collaborated closely with
            developers to ship better products. But somewhere along the way, I
            realized I didn&apos;t just want to test things — I wanted to build
            them.
          </Paragraph>
          <Paragraph>
            That led me to frontend and full-stack development. Now, I craft
            responsive web experiences using technologies like React,
            TypeScript, Node.js, and MongoDB. I enjoy making clean,
            user-friendly interfaces and adding the little touches — like smooth
            transitions or fun scroll interactions — that make a site feel
            alive.
          </Paragraph>
          <Paragraph>
            I believe design and logic go hand-in-hand, and I&apos;m always
            exploring ways to bring creative energy into code. My portfolio is a
            space where I explore, experiment, and push myself creatively — just
            how I like it.
          </Paragraph>
          <Paragraph>
            When I&apos;m not coding, you&apos;ll probably find me reading
            something random, dancing around my apartment, or hanging out with
            my cat (who has very strong opinions about my color palettes).
          </Paragraph>
          <Paragraph>Thanks for stopping by.</Paragraph>
        </StyledParagraphContainer>
        <StyledImageContainer>
          <StyledImage src="/portfolio.png" alt="portfolio-image" />
        </StyledImageContainer>
      </StyledAboutPage>
    </PageContainer>
  );
}

export default AboutPage;
