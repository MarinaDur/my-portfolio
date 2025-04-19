import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

interface FontAwsomeIconsProps {
  icon: IconDefinition;
}

const StyledIcons = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: var(--dark);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    color: #000;
  }
`;

function Icons({ icon }: FontAwsomeIconsProps) {
  return <StyledIcons icon={icon} />;
}

export default Icons;
