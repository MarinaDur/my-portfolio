import { site } from "./site";

export type TileColor = "peach" | "mustard" | "sage" | "pink" | "cream" | "ink";

type BaseProject = {
  title: string;
  description: string;
  stack: string;
  live?: string;
  code: string;
  color: TileColor;
  /** Shown as a large card at the top of the Work page. */
  featured?: boolean;
};

/** A project shown with a screenshot, or (for test suites) a mock test report. */
export type Project = BaseProject &
  ({ kind: "image"; image: string; alt: string } | { kind: "report" });

const gh = site.github;

export const projects: Project[] = [
  {
    kind: "report",
    title: "Store Test Suite",
    description: "How I test real shops: login, cart and checkout tests — prices and tax checked — plus API tests, on 3 browsers and 2 phones, running in CI.",
    stack: "Playwright · TypeScript · Page Objects · GitHub Actions",
    code: gh + "saucedemo-playwright-tests",
    featured: true,
    color: "ink",
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
    featured: true,
    color: "mustard",
  },
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
];
