import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Poiret_One, Roboto } from "next/font/google";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import Main from "./components/Main";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const qara = localFont({
  src: "./fonts/PPChronosSerif-Stroked.otf",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-grytha-angel", // optional CSS variable
  fallback: ["sans-serif"], // optional fallback
  // 👇 force a proper name so it's easier to use and debug
  declarations: [
    {
      prop: "font-family",
      value: "'Benjola'",
    },
  ],
});

export const metadata: Metadata = {
  title: "Marina's Portfolio",
  description:
    "Portfolio website of Marina Durmishov, showcasing frontend and fullstack web development projects, UI design, and coding expertise.",
  icons: {
    icon: "/portfolio.png", //
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        lang="en"
        className={`${roboto.className} ${montserrat.className} ${poiretOne.className} ${qara.className} `}
      >
        <StyledComponentsRegistry>
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
