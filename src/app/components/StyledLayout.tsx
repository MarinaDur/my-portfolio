import { styled } from "styled-components";

const StyledStyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 1024px) {
    /* grid-template-columns: 80px auto; */
    grid-template-columns: 5% 95%;
    grid-template-rows: min(460px, 100vh);
    /* width: 100vw; */
    justify-items: center;
    width: 100%;
    height: max-content;
    gap: 5rem;
  }
`;

function StyledLayout({ children }: { children: React.ReactNode }) {
  return <StyledStyledLayout>{children}</StyledStyledLayout>;
}

export default StyledLayout;
