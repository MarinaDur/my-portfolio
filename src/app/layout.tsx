import type { Metadata } from "next";
import Head from "next/head";
import { Poiret_One, Roboto } from "next/font/google";
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

// const montserrat = Montserrat({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

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
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body lang="en" className={`${poiretOne.className} ${roboto.className}`}>
        <StyledComponentsRegistry>
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
