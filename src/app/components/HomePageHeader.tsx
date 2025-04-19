import styled from "styled-components";
import Paragraph from "../ui/Paragraph";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

export default function HomePageHeader() {
  return (
    <StyledHeader>
      <StyledTitle>Marina Durmishov</StyledTitle>
      <Paragraph>
        Hey there! I&apos;m Marina, a Full-Stack Developer with a knack for
        creating seamless user experiences. From frontend aesthetics to backend
        logic, I love crafting web applications that are both functional and
        elegant. Let&apos;s build something great!
      </Paragraph>
    </StyledHeader>
  );
}
