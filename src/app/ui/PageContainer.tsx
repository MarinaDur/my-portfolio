import { styled } from "styled-components";

interface PageContainerProps {
  children: React.ReactNode;
  gap?: string;
}

interface StyledPageContainerProps {
  $gap?: string;
}

const StyledPageContainer = styled.div<StyledPageContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: ${(props) => props.$gap || "2rem"};
  height: calc(100vh - 15.2px - 3rem);
`;

function PageContainer({ children, gap }: PageContainerProps) {
  return <StyledPageContainer $gap={gap}>{children}</StyledPageContainer>;
}

export default PageContainer;
