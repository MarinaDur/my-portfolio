import type { Metadata } from "next";
import { Montserrat, Poiret_One, Roboto } from "next/font/google";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import Main from "./components/Main";

const roboto = Roboto({
  subsets: ["latin"],
});

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marina's Portfolio",
  description:
    "Portfolio website of Marina Durmishov, showcasing frontend and fullstack web development projects, UI design, and coding expertise.",
  icons: {
    icon: "/portfolio.png",
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
        className={`${poiretOne.className} ${roboto.className} ${montserrat.className}`}
      >
        <StyledComponentsRegistry>
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
