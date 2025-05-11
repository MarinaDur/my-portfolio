import styled from "styled-components";
import Paragraph from "../ui/Paragraph";
import PageTitle from "../ui/PageTitle";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    width: 36%;
    gap: 0;
    text-align: right;
  }
`;

export default function HomePageHeader() {
  return (
    <StyledHeader>
      <PageTitle>Marina Durmishov</PageTitle>
      <Paragraph $fontSize="clamp(1.3rem, 1vw, 2.5rem)">
        Hey there! I&apos;m Marina, a Full-Stack Developer with a knack for
        creating seamless user experiences. From frontend aesthetics to backend
        logic, I love crafting web applications that are both functional and
        elegant. Let&apos;s build something great!
      </Paragraph>
    </StyledHeader>
  );
}
