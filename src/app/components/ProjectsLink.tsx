import { styled } from "styled-components";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icons from "../ui/Icons";

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: left;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const StyledListIName = styled.p`
  font-size: 4.1rem;
  text-align: right;

  @media (min-width: 1024px) {
    font-size: clamp(6rem, 5vw, 8rem);
  }
  @media (min-width: 2050px) {
    font-size: clamp(10rem, 7vw, 13rem);
  }
  @media (min-width: 2500px) {
    font-size: clamp(13rem, 8vw, 15rem);
  }
  @media (min-width: 2700px) {
    font-size: clamp(15rem, 9vw, 17rem);
  }
`;

const StyledIconsCon = styled.div`
  display: flex;
  gap: 1rem;
  @media (min-width: 1024px) {
    padding-left: 0.5rem;
  }

  @media (min-width: 2500px) {
    padding-left: 0.8rem;

    gap: 2rem;
  }
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
