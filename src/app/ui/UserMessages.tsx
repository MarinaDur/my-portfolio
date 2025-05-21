import { motion } from "framer-motion";
import styled from "styled-components";

interface MessageProps {
  message: string;
  messageType: "errorInput" | "success" | "errorSubmit";
}

const MotionMessage = styled(motion.p)<{ $messageType: string }>`
  position: absolute;
  bottom: ${(props) =>
    props.$messageType === "errorSubmit" || props.$messageType === "success"
      ? "-28px"
      : "-20px"};
  left: 0;
  width: 100%;
  text-align: left;
  color: ${(props) =>
    props.$messageType === "success" ? "#258f56" : "#c38888"};
  font-size: ${(props) =>
    props.$messageType === "errorSubmit" || props.$messageType === "success"
      ? "1.5rem"
      : "1.2rem"};

  @media (min-width: 1024px) {
    bottom: ${(props) =>
      props.$messageType === "errorSubmit" || props.$messageType === "success"
        ? "-35px"
        : "-20px"};

    font-size: ${(props) =>
      props.$messageType === "errorSubmit" || props.$messageType === "success"
        ? "1.8rem"
        : "1.3rem"};
  }
`;

const messageVariants = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -5, transition: { duration: 0.3 } },
};

function UserMessages({ message, messageType }: MessageProps) {
  return (
    <MotionMessage
      key="form-message"
      variants={messageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      $messageType={messageType}
    >
      {message}
    </MotionMessage>
  );
}

export default UserMessages;
