import { styled } from "styled-components";

interface PageContainerProps {
  children: React.ReactNode;
  gap?: string;
  height?: string;
  padding?: string;
  overflow?: string;
  heightBSize?: string;
  maxHeight?: string;
  position?: string;
  minHeight?: string;
  alignItems?: string;
  bg?: string;
}

interface StyledPageContainerProps {
  $gap?: string;
  $height?: string;
  $padding?: string;
  $overflow?: string;
  $heightBSize?: string;
  $maxHeight?: string;
  $position?: string;
  $minHeight?: string;
  $alignItems?: string;
  $bg?: string;
}

const StyledPageContainer = styled.div<StyledPageContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.$padding || "8rem 3rem 0 3rem"};
  gap: ${(props) => props.$gap || "2rem"};
  /* height: ${(props) => props.$height || "calc(100vh - 18.4px - 3rem)"}; */
  /* height: 100vh; */
  width: 100%;
  max-width: 1500px;

  @media (max-width: 767px) {
    background: ${(props) => props.$bg || "var(--light)"};
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding-bottom: 0;
    justify-content: space-between;
    padding: 2rem 2rem 0 2rem;
    /* overflow: ${(props) => props.$overflow || "auto"};
    height: ${(props) => props.$heightBSize || "100%"}; */
    height: 100vh;
    gap: 2rem;
    min-height: ${(props) => props.$minHeight || "100%"};
    max-height: ${(props) => props.$maxHeight || "100%"};
    /* position: ${(props) => props.$position || "relative"}; */
    align-items: ${(props) => props.$alignItems || "flex-start"};
  }

  @media (min-width: 1900px) {
    height: 100%;
  }
`;

function PageContainer({
  children,
  gap,
  height,
  padding,
  overflow,
  heightBSize,
  maxHeight,
  minHeight,
  position,
  alignItems,
  bg,
}: PageContainerProps) {
  return (
    <StyledPageContainer
      $gap={gap}
      $height={height}
      $padding={padding}
      $overflow={overflow}
      $heightBSize={heightBSize}
      $maxHeight={maxHeight}
      $minHeight={minHeight}
      $position={position}
      $alignItems={alignItems}
      $bg={bg}
    >
      {children}
    </StyledPageContainer>
  );
}

export default PageContainer;
