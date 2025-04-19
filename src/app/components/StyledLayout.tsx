import { styled } from "styled-components";

const StyledStyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`;

function StyledLayout({ children }: { children: React.ReactNode }) {
  return <StyledStyledLayout>{children}</StyledStyledLayout>;
}

export default StyledLayout;
