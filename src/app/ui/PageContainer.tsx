import { styled } from "styled-components";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;
  height: calc(100vh - 15.2px - 3rem);
`;

function PageContainer({ children }: { children: React.ReactNode }) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}

export default PageContainer;
