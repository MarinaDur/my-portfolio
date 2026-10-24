export const site = {
  name: "Marina Durmishov",
  url: "https://marinadurmishov.com",
  // Shown on the contact page once set; the contact form sends to CONTACT_TO_EMAIL instead.
  email: null as string | null,
  linkedin: "https://www.linkedin.com/in/marina-durmishov-1900051b5/",
  github: "https://github.com/MarinaDur/",
  year: 2026,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;
