import { styled } from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icons from "../ui/Icons";

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-end;
  }
`;

const StyledListIName = styled.p`
  font-size: 4.1rem;
  text-align: right;

  @media (min-width: 1024px) {
    font-size: clamp(6rem, 6vw, 10rem);
  }
`;

const StyledIconsCon = styled.div`
  display: flex;
  gap: 1rem;
`;

function ProjectsLink({
  projectName,
  githubLink,
  liveLink,
}: {
  projectName: string;
  githubLink: string;
  liveLink: string;
}) {
  return (
    <StyledListItem>
      <StyledListIName>{projectName}</StyledListIName>
      <StyledIconsCon>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <Icons icon={faGithub} />
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer">
          <Icons icon={faGlobe} />
        </a>
      </StyledIconsCon>
    </StyledListItem>
  );
}

export default ProjectsLink;
