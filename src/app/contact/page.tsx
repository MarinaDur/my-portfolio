"use client";

import { styled } from "styled-components";
import PageTitle from "../ui/PageTitle";
import PageContainer from "../ui/PageContainer";
import Form from "../components/Form";
import Paragraph from "../ui/Paragraph";
import PageBg from "../ui/PageBg";
import { useEffect } from "react";
import { animateOut } from "../frontUtils/aminateOut";

const TitleContainer = styled.div`
  color: var(--light);
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

function ContactPage() {
  useEffect(() => {
    animateOut();
  }, []);
  return (
    <>
      <PageBg bgColor="var(--dark)" />
      <PageContainer bg="var(--dark)" height="100vh">
        <TitleContainer>
          <PageTitle as="h2" $page="contact" $color="var(--light)">
            Let&apos;s Talk
          </PageTitle>
          <Paragraph $fontSize="2.3rem">
            Got a question, a project, or just want to say hi? Drop me a message
            — I&apos;d love to hear from you!
          </Paragraph>
        </TitleContainer>
        <Form />
      </PageContainer>
    </>
  );
}

export default ContactPage;
