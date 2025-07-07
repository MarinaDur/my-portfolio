"use client";

import { styled } from "styled-components";
import PageTitle from "../ui/PageTitle";
import Form from "../components/Form";
import Paragraph from "../ui/Paragraph";
import PageBg from "../ui/PageBg";
import { useEffect } from "react";
import { animateOut } from "../frontUtils/aminateOut";

const TitleContainer = styled.div`
  color: var(--light);
  @media (min-width: 1024px) {
    width: 60%;
    padding-top: 8rem;
  }
`;

const StyledParagraphCon = styled.div`
  @media (min-width: 1024px) {
    width: 58ch;
  }
`;

const StyledCon = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    padding: 0 0 0 8vw;
  }
`;

function ContactPage() {
  useEffect(() => {
    animateOut();
  }, []);
  return (
    <StyledCon>
      <PageBg bgColor="var(--dark)" />
      {/* <PageContainer bg="var(--dark)" height="100vh" justifyContent="center"> */}
      <TitleContainer>
        <PageTitle as="h2" $page="contact" $color="var(--light)">
          Let&apos;s Talk
        </PageTitle>
        <StyledParagraphCon>
          <Paragraph $fontSize="2.3rem">
            Got a question, a project, or just want to say hi? Drop me a message
            — I&apos;d love to hear from you!
          </Paragraph>
        </StyledParagraphCon>
      </TitleContainer>
      <Form />
      {/* </PageContainer> */}
    </StyledCon>
  );
}

export default ContactPage;
