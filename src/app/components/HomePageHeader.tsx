import styled from "styled-components";
import Paragraph from "../ui/Paragraph";
import PageTitle from "../ui/PageTitle";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    width: 25%;
    gap: 0;
    text-align: left;
  }
`;

export default function HomePageHeader() {
  return (
    <StyledHeader>
      <PageTitle>Marina Durmishov</PageTitle>
      <Paragraph $fontSize="clamp(1rem, 1vw, 2rem)">
        Full-Stack Developer with a knack for creating seamless user
        experiences.
      </Paragraph>
    </StyledHeader>
  );
}
