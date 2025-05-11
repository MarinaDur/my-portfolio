import { styled } from "styled-components";

const StyledFadeScrollWrapper = styled.div`
  position: relative;
  /* height: 100vh; */

  @media (min-width: 1024px) {
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    pointer-events: auto;
  }
`;

function FadeScrollWrapper({ children }: { children: React.ReactNode }) {
  return <StyledFadeScrollWrapper>{children}</StyledFadeScrollWrapper>;
}

export default FadeScrollWrapper;
