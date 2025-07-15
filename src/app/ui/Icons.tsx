import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

interface FontAwsomeIconsProps {
  icon: IconDefinition;
}

const StyledIcons = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--light);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1700px) {
    font-size: clamp(2.5rem, 1vw, 3rem);
  }
  @media (min-width: 2500px) {
    font-size: clamp(3rem, 1.2vw, 3.5rem);
  }
`;

function Icons({ icon }: FontAwsomeIconsProps) {
  return <StyledIcons icon={icon} />;
}

export default Icons;
