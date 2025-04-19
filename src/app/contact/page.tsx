"use client";

import { styled } from "styled-components";
import PageTitle from "../ui/PageTitle";
import PageContainer from "../ui/PageContainer";
import { useEffect } from "react";
import Form from "../components/Form";

const Styledpage = styled.div``;

function ContactPage() {
  useEffect(() => {
    document.documentElement.style.setProperty("--light", "#282727");
    document.documentElement.style.setProperty("--dark", "#e9e2e2");

    return () => {
      document.documentElement.style.removeProperty("--light");
      document.documentElement.style.removeProperty("--dark");
    };
  }, []);
  return (
    <Styledpage>
      <PageContainer>
        <PageTitle as="h2">Contact</PageTitle>
        <Form />
      </PageContainer>
    </Styledpage>
  );
}

export default ContactPage;
