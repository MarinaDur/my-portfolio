import { styled } from "styled-components";

interface StyledPageBgProps {
  $bgColor?: string;
}

const StyledPageBg = styled.div<StyledPageBgProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.$bgColor};
  z-index: -1;
`;

function PageBg({ bgColor }: { bgColor?: string }) {
  return <StyledPageBg $bgColor={bgColor} />;
}

export default PageBg;
