import { site } from "./site";

export type TileColor = "peach" | "mustard" | "sage" | "pink" | "cream" | "ink";

type BaseProject = {
  title: string;
  description: string;
  stack: string;
  live?: string;
  code: string;
  color: TileColor;
};

/** A project shown with a screenshot, or (for test suites) a mock test report. */
export type Project = BaseProject &
  ({ kind: "image"; image: string; alt: string } | { kind: "report" });

const gh = site.github;

export const projects: Project[] = [
  {
    kind: "image",
    title: "Dine Restaurant",
    description: "A multi‑page restaurant website with a booking form.",
    stack: "React · React Router · Styled Components",
    image: "/projects/dine-restaurant.jpg",
    alt: "Dine restaurant website",
    live: "https://dine-restaurant-reactjs.netlify.app/",
    code: gh + "dine-restaurant",
    color: "peach",
  },
  {
    kind: "image",
    title: "Markdown Editor",
    description: "Full‑stack editor with accounts, saved documents and live preview.",
    stack: "React · TypeScript · Node · MongoDB",
    image: "/projects/markdown-editor.jpg",
    alt: "Markdown editor",
    live: "https://markdowneditorfullstack.netlify.app/",
    code: gh + "markdown-editor",
    color: "mustard",
  },
  {
    kind: "report",
    title: "Sunflower Automation",
    description: "End‑to‑end test suite for a demo shop, on desktop and iPhone 13.",
    stack: "Playwright · TypeScript · Page Objects",
    // TODO: point to the Sunflower repo once its name is confirmed.
    code: gh,
    color: "ink",
  },
  {
    kind: "image",
    title: "Frontend Quiz",
    description: "Pick a subject, answer, see your score — light or dark.",
    stack: "React · TypeScript · React Router",
    image: "/projects/frontend-quiz.jpg",
    alt: "Frontend quiz app",
    live: "https://frontend-quiz-app-reactjs.netlify.app/",
    code: gh + "frontend-quiz",
    color: "sage",
  },
  {
    kind: "image",
    title: "IP Address Tracker",
    description: "Look up any IP or domain and see it on a live map.",
    stack: "React · Leaflet · REST API",
    image: "/projects/ip-address-tracker.jpg",
    alt: "IP address tracker with map",
    live: "https://ip-address-tracker-master-react.netlify.app/",
    code: gh + "ip-address-tracker",
    color: "pink",
  },
  {
    kind: "image",
    title: "Todo App",
    description: "Add, filter and drag tasks to reorder, with light and dark themes.",
    stack: "React · Drag & drop · Styled Components",
    image: "/projects/todo-app.jpg",
    alt: "Todo app",
    live: "https://todo-app-main-react-js.netlify.app/",
    code: gh + "todo-app",
    color: "cream",
  },
  {
    kind: "image",
    title: "Tic Tac Toe",
    description: "Play against the CPU, with sound and a running score.",
    stack: "React · Styled Components · Lottie",
    image: "/projects/tic-tac-toe.jpg",
    alt: "Tic tac toe game",
    live: "https://tic-tac-toe-game-with-cpu.netlify.app/",
    code: gh + "tic-tac-toe",
    color: "peach",
  },
];
